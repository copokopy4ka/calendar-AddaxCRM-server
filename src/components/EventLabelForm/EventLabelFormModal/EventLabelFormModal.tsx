import { FC } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { EventLabelForm } from 'components/EventLabelForm/EventLabelForm/EventLabelForm';
import { UserEventLabel } from 'core/types/events-labels.type';

interface EventLabelFormModalProps {
  isOpen: boolean;
  handleClose: () => void;
  onSubmit: SubmitHandler<FieldValues>;
  labelData: UserEventLabel | null;
  selectedColor: string;
  handleSelectedColor: (color: string) => void;
}

export const EventLabelFormModal: FC<EventLabelFormModalProps> = ({
  isOpen,
  handleClose,
  onSubmit,
  labelData,
  handleSelectedColor,
  selectedColor,
}) => {
  return (
    <Modal id='user-label-form-modal' isOpen={isOpen} handleClose={handleClose}>
      <EventLabelForm
        onSubmit={onSubmit}
        handleClose={handleClose}
        isOpen={isOpen}
        labelData={labelData}
        selectedColor={selectedColor}
        handleSelectedColor={handleSelectedColor}
      />
    </Modal>
  );
};
