import { DATE_FORMAT } from 'constants/date-format';
import { userEventFormDefaultValues } from 'core/config/userEventForm.config';
import { MonthActiveDay } from 'core/types/calendar.type';
import { UseUserEventFormResponse } from 'core/types/custom-hooks.type';
import { UserEvent } from 'core/types/events.type';
import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { formateDateForInputMasked } from 'utils/helpers';

/**
 * Custom hook for managing the state and behavior of the user event form.
 * This hook encapsulates the logic for handling event data, including initialization,
 * submission, validation, and resetting of the form, as well as managing the form's title and subtitle.
 *
 * @param {boolean} isOpen - Indicates whether the event form modal is open.
 * @param {UserEvent | null} eventData - The event data to be edited, if any.
 * @param {MonthActiveDay} selectedDay - The day selected by the user, used as the default event date.
 * @returns {UseUserEventFormResponse} - An object containing properties and methods to interact with the form.
 *
 * This hook utilizes `react-hook-form` for form state management and validation. It also uses `dayjs` for date manipulation
 * to provide meaningful subtitles indicating when the event was created or last updated.
 *
 * Usage:
 * const { register, handleSubmit, errors, getErrorMessage, isDisabledSubmitButton, title, subtitle } = useUserEventForm(isOpen, eventData, selectedDay);
 *
 * - `register`, `handleSubmit`, and `errors` are part of `react-hook-form`'s API.
 * - `getErrorMessage` is a helper function to extract error messages for display.
 * - `isDisabledSubmitButton` indicates whether the submit button should be disabled based on the required field values.
 * - `title` and `subtitle` are dynamically determined based on the `eventData` and `selectedDay`.
 *
 * @callback handleClearTitle - Clears the title input field.
 * @callback handleChangeTime - Updates the time value in the form.
 */
export const useUserEventForm = (
  isOpen: boolean,
  eventData: UserEvent | null,
  selectedDay: MonthActiveDay
): UseUserEventFormResponse => {
  const [title, setTitle] = useState('Add new event');
  const subtitle = useMemo(() => {
    if (eventData) {
      const createdAt = dayjs(eventData.createdAt);
      const updatedAt = dayjs(eventData.updatedAt);

      return updatedAt.isAfter(createdAt)
        ? `Updated at: ${updatedAt.format(DATE_FORMAT.DATE)} ${updatedAt.get('hour')}:${updatedAt.get('minutes')}`
        : `Created at: ${createdAt.format(DATE_FORMAT.DATE)} ${createdAt.get('hour')}:${createdAt.get('minutes')}`;
    }
  }, [eventData]);

  const formValues = useMemo(() => {
    const formDateValue = eventData
      ? formateDateForInputMasked(eventData.date)
      : formateDateForInputMasked(selectedDay.date);

    return {
      title: eventData?.title ? eventData.title : '',
      date: formDateValue,
      time: eventData?.time ? eventData.time : '',
    };
  }, [eventData, selectedDay]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: userEventFormDefaultValues });

  const requiredFieldsValues = watch(['title', 'date']);

  const isDisabledSubmitButton = useMemo(() => requiredFieldsValues.some((el) => !el), [requiredFieldsValues]);

  const getErrorMessage = useCallback((errors: FieldErrors<FieldValues>, name: string): string => {
    if (typeof errors?.[name]?.message === 'string' && errors?.[name]?.message) {
      return errors[name]?.message as string;
    }
    return '';
  }, []);

  const handleClearTitle = useCallback(() => {
    setValue('title', '');
  }, [setValue]);

  const handleChangeTime = useCallback(
    (time: string) => {
      const currentValues = getValues();
      reset({ ...currentValues, time });
    },
    [getValues, reset]
  );

  useEffect(() => {
    reset(formValues);
  }, [formValues, reset]);

  useEffect(() => {
    if (!isOpen) {
      reset(formValues);
    }
  }, [formValues, isOpen, reset]);

  useEffect(() => {
    if (isOpen) {
      if (eventData) {
        setTitle('Edit Your event');
      } else {
        setTitle('Add new event');
      }
    }
  }, [eventData, isOpen]);

  return {
    register,
    control,
    handleSubmit,
    errors,
    getErrorMessage,
    reset,
    handleClearTitle,
    handleChangeTime,
    subtitle,
    isDisabledSubmitButton,
    title,
  };
};
