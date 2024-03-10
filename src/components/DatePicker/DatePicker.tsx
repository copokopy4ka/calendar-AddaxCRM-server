import { useRef } from 'react';
import { ArrowButtonsControl } from './ArrowButtonsControl/ArrowButtonsControl';
import { CalendarButton } from './CalendarButton/CalendarButton';
import { DatePickerModal } from './DatePickerModal/DatePickerModal';
import { useModal } from 'shared/hooks/useModal';
import { DatePickerWrapper } from 'components/DatePicker/datePicker.style';

export const DatePicker = () => {
  const { open, isOpen, close } = useModal();
  const datePickerRef = useRef<HTMLDivElement>(null);

  return (
    <DatePickerWrapper ref={datePickerRef}>
      <ArrowButtonsControl handleOpenModal={open} />
      <CalendarButton handleOpenModal={open} />
      {isOpen && <DatePickerModal anchorEl={datePickerRef.current} isOpen={isOpen} handleClose={close} />}
    </DatePickerWrapper>
  );
};
