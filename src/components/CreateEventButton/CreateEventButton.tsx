import { FC } from 'react';
import { Button } from './createEventButton.style';

interface CreateEventButtonProps {
  handleOpenForm: () => void;
}

export const CreateEventButton: FC<CreateEventButtonProps> = ({ handleOpenForm }) => {
  return <Button onClick={handleOpenForm}>Create Task</Button>;
};
