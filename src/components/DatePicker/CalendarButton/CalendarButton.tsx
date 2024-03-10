import { ReactComponent as CalendarIcon } from 'assets/calendar-icon.svg';
import clsx from 'clsx';
import { FC } from 'react';
import { Button } from 'components/DatePicker/CalendarButton/calendarButton.style';

interface CalendarButtonProps {
  handleOpenModal: () => void;
}

export const CalendarButton: FC<CalendarButtonProps> = ({ handleOpenModal }) => {
  return (
    <Button className={clsx('calendar-button')} onClick={handleOpenModal}>
      <CalendarIcon />
    </Button>
  );
};
