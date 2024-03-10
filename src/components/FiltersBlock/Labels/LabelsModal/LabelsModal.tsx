import { FC, useCallback, useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import clsx from 'clsx';
import { LabelsList } from './LabelsList/LabelsList';
import { UserEventLabel } from 'core/types/events-labels.type';
import { LabelsModalContent } from 'components/FiltersBlock/Labels/LabelsModal/labelsModal.style';
import { ConfirmButton } from 'components/DatePicker/DatePickerModal/DatePickerModal.style';

interface LabelsModalProps {
  isOpen: boolean;
  handleClose: () => void;
  anchorEl: HTMLDivElement | null;
  selectedLabels: string[];
  handleConfirm: () => void;
  handleUpdateSelectedLabelsList: (labelItem: UserEventLabel) => void;
  handleEditLabelClick: (labelItem: UserEventLabel) => void;
}

export const LabelsModal: FC<LabelsModalProps> = ({
  isOpen,
  handleClose,
  anchorEl,
  selectedLabels,
  handleConfirm,
  handleUpdateSelectedLabelsList,
  handleEditLabelClick,
}) => {
  const [anchorElementRect, setAnchorElementRect] = useState<DOMRect | null>(null);

  const handleEditButton = useCallback(
    (labelItem: UserEventLabel) => {
      handleEditLabelClick(labelItem);
      handleClose();
    },
    [handleClose, handleEditLabelClick]
  );

  useEffect(() => {
    if (anchorEl) {
      setAnchorElementRect(anchorEl.getBoundingClientRect());
    }
  }, [anchorEl]);

  return (
    <Modal id='label-picker-modal' isOpen={isOpen} handleClose={handleClose}>
      {anchorElementRect && (
        <LabelsModalContent
          style={{
            top: anchorElementRect.bottom + 10,
            left: anchorElementRect.left,
            width: anchorElementRect.width * 1.5,
          }}
          className={clsx({ open: isOpen })}
        >
          <LabelsList
            selectedLabels={selectedLabels}
            handleEditLabelClick={handleEditButton}
            handleUpdateSelectedLabelsList={handleUpdateSelectedLabelsList}
          />
          <ConfirmButton onClick={handleConfirm}>OK</ConfirmButton>
        </LabelsModalContent>
      )}
    </Modal>
  );
};
