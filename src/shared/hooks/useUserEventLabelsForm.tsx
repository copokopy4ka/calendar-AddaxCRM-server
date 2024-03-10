import { userEventLabelsFormDefaultValues } from 'core/config/userEventLabelsForm.config';
import { UseUserEventLabelsFormResponse } from 'core/types/custom-hooks.type';
import { UserEventLabel } from 'core/types/events-labels.type';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';

/**
 * Custom hook for managing the state and behavior of the user event labels form.
 * This hook encapsulates the logic for handling label data, including initialization,
 * submission, validation, and resetting of the form, as well as managing the form's title.
 *
 * @param {boolean} isOpen - Indicates whether the label form modal is open.
 * @param {UserEventLabel | null} labelData - The label data to be edited, if any.
 * @returns {UseUserEventLabelsFormResponse} - An object containing properties and methods to interact with the form.
 *
 * This hook utilizes `react-hook-form` for form state management and validation. It provides a dynamic title for the form based on
 * whether the user is adding a new label or editing an existing one.
 *
 * Usage:
 * const { register, handleSubmit, errors, getErrorMessage, isDisabledSubmitButton, title } = useUserEventLabelsForm(isOpen, labelData);
 *
 * - `register`, `handleSubmit`, and `errors` are part of `react-hook-form`'s API.
 * - `getErrorMessage` is a helper function to extract error messages for display.
 * - `isDisabledSubmitButton` indicates whether the submit button should be disabled based on the required field values.
 * - `title` is dynamically determined based on the `labelData`.
 *
 * The hook also ensures that the form is reset when it is closed or when the modal is reopened, maintaining a clean state for new inputs.
 */
export const useUserEventLabelsForm = (
  isOpen: boolean,
  labelData: UserEventLabel | null
): UseUserEventLabelsFormResponse => {
  const [title, setTitle] = useState('Add new label');

  const formValues = useMemo(() => {
    return {
      text: labelData?.text ? labelData.text : '',
    };
  }, [labelData]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: userEventLabelsFormDefaultValues });

  const requiredFieldsValues = watch(['text']);

  const isDisabledSubmitButton = useMemo(() => requiredFieldsValues.some((el) => !el), [requiredFieldsValues]);

  const getErrorMessage = useCallback((errors: FieldErrors<FieldValues>, name: string): string => {
    if (typeof errors?.[name]?.message === 'string' && errors?.[name]?.message) {
      return errors[name]?.message as string;
    }
    return '';
  }, []);

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
      if (labelData) {
        setTitle('Edit Your label');
      } else {
        setTitle('Add new label');
      }
    }
  }, [labelData, isOpen]);

  return {
    register,
    control,
    handleSubmit,
    errors,
    getErrorMessage,
    reset,
    isDisabledSubmitButton,
    title,
  };
};
