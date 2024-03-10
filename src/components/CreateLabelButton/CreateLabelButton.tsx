import { FC } from 'react';
import { Button } from 'components/CreateEventButton/createEventButton.style';

interface CreateEventButtonProps {
  handleOpenForm: () => void;
}

export const CreateLabelButton: FC<CreateEventButtonProps> = ({ handleOpenForm }) => {
  return (
    <Button onClick={handleOpenForm}>
      Create Label
    </Button>
  );
};
