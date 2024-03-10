import { useCallback, useEffect, useState } from 'react';
import { CreateUserEventDto, UpdateUserEventDto, UserEvent } from 'core/types/events.type';
import { createEvent, deleteEvent, getEvents, updateEvent } from 'store/events-entity/actions';
import { useModal } from 'shared/hooks/useModal';
import { FieldValues } from 'react-hook-form';
import { formateInputDateValue } from 'utils/helpers';
import { UseHandleUserEventResponse } from 'core/types/custom-hooks.type';
import { useThunkDispatch } from 'shared/hooks/useThunkDispatch';
import { useSelector } from 'react-redux';
import { selectorGetCurrentDate } from 'store/events-entity/selectors';
import { UserEventLabel } from 'core/types/events-labels.type';

/**
 * Hook to manage interactions with user events, including CRUD operations and modal management.
 *
 * Provides functionality to select an event, open and close the event form modal, handle label selection, and filter events.
 *
 * @returns {UseHandleUserEventResponse} An object containing properties and methods for user event management:
 *   - selectedEvent: The currently selected event for editing.
 *   - openEventFormModal: Function to open the event form modal for creating or editing an event.
 *   - isOpenEventFormModal: Boolean indicating if the event form modal is open.
 *   - closeEventFormModal: Function to close the event form modal.
 *   - handleEventClick: Function to handle event selection and open the event form modal.
 *   - handleSubmitEventForm: Function to submit the event form, performing create or update operations based on the context.
 *   - handleDeleteEvent: Function to delete a selected event.
 *   - setSelectedLabels: Function to set the selected labels for filtering events.
 *   - selectedLabels: Array of selected label IDs for filtering events.
 *   - handleUpdateSelectedLabelsList: Function to update the list of selected labels.
 *   - handleClearLabelsFilters: Function to clear all selected labels filters.
 *   - handleClearSearchInput: Function to clear the search input.
 *   - searchText: Current text used for searching events.
 *   - setSearchText: Function to set the search text.
 *   - handleGetFilteredEvents: Function to fetch events based on the current filters (date, labels, and search text).
 *
 * This hook centralizes the logic for managing user events, including interactions with the event form modal, and handling of event labels and search filters.
 */
export const useHandleUserEvent = (): UseHandleUserEventResponse => {
  const dispatch = useThunkDispatch();
  const currentDate = useSelector(selectorGetCurrentDate);
  const { open: openEventFormModal, isOpen: isOpenEventFormModal, close: closeEventFormModal } = useModal();
  const [selectedEvent, setSelectedEvent] = useState<UserEvent | null>(null);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleEventClick = useCallback(
    (userEvent: UserEvent) => {
      setSelectedEvent(userEvent);
      openEventFormModal();
    },
    [openEventFormModal]
  );

  const handleUpdateSelectedLabelsList = useCallback((label: UserEventLabel) => {
    setSelectedLabels((prev) => {
      if (prev.includes(label.id)) {
        return prev.filter((el) => el !== label.id);
      } else {
        return [...prev, label.id];
      }
    });
  }, []);

  const handleClearLabelsFilters = useCallback(() => {
    if (selectedLabels.length) {
      setSelectedLabels([]);
    }
  }, [selectedLabels.length]);

  const handleClearSearchInput = useCallback(() => {
    setSearchText('');
  }, []);

  const handleGetFilteredEvents = useCallback(async () => {
    if (currentDate) {
      await dispatch(getEvents({ date: currentDate, labels: selectedLabels, searchText }));
    }
  }, [currentDate, dispatch, searchText, selectedLabels]);

  const handleSubmitEventForm = useCallback(
    async (values: FieldValues) => {
      if (selectedEvent) {
        const updateEventData: UpdateUserEventDto = {
          id: selectedEvent.id,
          title: values.title,
          date: values.time ? formateInputDateValue(values.date, values.time) : formateInputDateValue(values.date),
          labels: selectedLabels,
        };
        values.time && (updateEventData.time = values.time);

        await dispatch(updateEvent(updateEventData));

        setSelectedEvent(null);
      } else {
        const createEventData: CreateUserEventDto = {
          title: values.title,
          date: values.time ? formateInputDateValue(values.date, values.time) : formateInputDateValue(values.date),
          labels: selectedLabels,
        };
        values.time && (createEventData.time = values.time);

        await dispatch(createEvent(createEventData));
      }
      if (currentDate) {
        await dispatch(getEvents({ date: currentDate }));
      }
      closeEventFormModal();
    },
    [closeEventFormModal, currentDate, dispatch, selectedEvent, selectedLabels]
  );

  const handleDeleteEvent = useCallback(
    async (id: string) => {
      await dispatch(deleteEvent(id));
      if (currentDate) {
        await dispatch(getEvents({ date: currentDate }));
      }
      setSelectedEvent(null);
    },
    [currentDate, dispatch]
  );

  useEffect(() => {
    if (!isOpenEventFormModal) {
      setSelectedLabels([]);
      setSelectedEvent(null);
    }
  }, [isOpenEventFormModal]);

  return {
    selectedEvent,
    openEventFormModal,
    isOpenEventFormModal,
    closeEventFormModal,
    handleEventClick,
    handleSubmitEventForm,
    handleDeleteEvent,
    setSelectedLabels,
    selectedLabels,
    handleUpdateSelectedLabelsList,
    handleClearLabelsFilters,
    handleClearSearchInput,
    searchText,
    setSearchText,
    handleGetFilteredEvents,
  };
};
