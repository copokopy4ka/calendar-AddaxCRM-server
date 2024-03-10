import { useCallback, useEffect, useState } from 'react';
import { useModal } from 'shared/hooks/useModal';
import { FieldValues } from 'react-hook-form';
import { UseHandleEventLabelsResponse } from 'core/types/custom-hooks.type';
import { useThunkDispatch } from 'shared/hooks/useThunkDispatch';
import { CreateUserEventLabelDto, UpdateUserEventLabelDto, UserEventLabel } from 'core/types/events-labels.type';
import { createLabel, updateLabel } from 'store/labels-entity/actions';

/**
 * Hook to manage label interactions within an event.
 *
 * Provides functionality to open a modal for label editing or creation, handle label color selection, and submit label form data.
 *
 * @returns {UseHandleEventLabelsResponse} An object containing various properties and methods for label management:
 *   - labelData: The currently selected label data.
 *   - openLabelFormModal: Function to open the label form modal.
 *   - isOpenLabelFormModal: Boolean indicating if the label form modal is open.
 *   - closeLabelFormModal: Function to close the label form modal.
 *   - handleLabelClick: Function to handle click events on labels, which opens the label form modal for editing.
 *   - handleSubmitLabelForm: Function to submit label form data, updating or creating a label as necessary.
 *   - selectedColor: The currently selected color for the label.
 *   - handleSelectedColor: Function to update the selected color.
 *
 * This hook integrates modal functionality for editing labels and managing label color selection. It dispatches actions to update or create labels based on user input.
 */
export const useHandleEventLabels = (): UseHandleEventLabelsResponse => {
  const dispatch = useThunkDispatch();
  const { open: openLabelFormModal, isOpen: isOpenLabelFormModal, close: closeLabelFormModal } = useModal();
  const [selectedEventLabel, setSelectedEventLabel] = useState<UserEventLabel | null>(null);
  const [selectedColor, setSelectedColor] = useState('#000');

  const handleLabelClick = useCallback(
    (userEventLabel: UserEventLabel) => {
      setSelectedEventLabel(userEventLabel);
      openLabelFormModal();
    },
    [openLabelFormModal]
  );

  const handleSelectedColor = useCallback((color: string) => {
    setSelectedColor(color);
  }, []);

  const handleSubmitLabelForm = useCallback(
    (values: FieldValues) => {
      if (selectedEventLabel) {
        const updateLabelData: UpdateUserEventLabelDto = {
          id: selectedEventLabel.id,
          text: values.text,
          color: selectedColor,
        };

        dispatch(updateLabel(updateLabelData));

        setSelectedEventLabel(null);
      } else {
        const createLabelData: CreateUserEventLabelDto = {
          text: values.text,
          color: selectedColor,
        };

        dispatch(createLabel(createLabelData));
      }
      closeLabelFormModal();
    },
    [closeLabelFormModal, dispatch, selectedColor, selectedEventLabel]
  );

  useEffect(() => {
    if (selectedEventLabel) {
      handleSelectedColor(selectedEventLabel.color);
    } else {
      handleSelectedColor('#000');
    }
  }, [handleSelectedColor, selectedEventLabel]);

  useEffect(() => {
    if (!isOpenLabelFormModal) setSelectedEventLabel(null);
  }, [isOpenLabelFormModal]);

  return {
    labelData: selectedEventLabel,
    openLabelFormModal,
    isOpenLabelFormModal,
    closeLabelFormModal,
    handleLabelClick,
    handleSubmitLabelForm,
    selectedColor,
    handleSelectedColor,
  };
};
