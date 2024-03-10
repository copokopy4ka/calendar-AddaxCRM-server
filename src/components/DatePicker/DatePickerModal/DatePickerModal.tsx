import { FC, useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import clsx from 'clsx';
import { MonthsList } from './MonthsList/MonthsList';
import { YearsList } from 'components/DatePicker/DatePickerModal/YearsList/YearsList';
import { useDatePickerData } from 'shared/hooks/useDatePickerData';
import { ArrowButton, ConfirmButton, ModalContent } from 'components/DatePicker/DatePickerModal/DatePickerModal.style';
import { ArrowButtonsWrapper } from 'components/DatePicker/ArrowButtonsControl/arrowButtonsControl.style';

interface DatePickerModalProps {
  isOpen: boolean;
  handleClose: () => void;
  anchorEl: HTMLDivElement | null;
}

export const DatePickerModal: FC<DatePickerModalProps> = ({ isOpen, handleClose, anchorEl }) => {
  const [anchorElementRect, setAnchorElementRect] = useState<DOMRect | null>(null);

  const {
    isMonthsPickerActive,
    handleDisplayMonths,
    handleDisplayYears,
    month,
    year,
    handlePickMonth,
    handlePickYear,
    handleConfirm,
  } = useDatePickerData(handleClose);

  useEffect(() => {
    if (anchorEl) {
      setAnchorElementRect(anchorEl.getBoundingClientRect());
    }
  }, [anchorEl]);

  return (
    <Modal id='date-picker-modal' isOpen={isOpen} handleClose={handleClose}>
      {anchorElementRect && (
        <ModalContent
          style={{
            top: anchorElementRect.bottom + 10,
            left: anchorElementRect.left - anchorElementRect.width / 2,
            width: anchorElementRect.width * 1.5,
          }}
          className={clsx({ open: isOpen })}
        >
          <ArrowButtonsWrapper>
            <ArrowButton className={clsx({ active: isMonthsPickerActive })} onClick={handleDisplayMonths}>
              Month
            </ArrowButton>
            <ArrowButton className={clsx({ active: !isMonthsPickerActive })} onClick={handleDisplayYears}>
              Year
            </ArrowButton>
          </ArrowButtonsWrapper>
          {isMonthsPickerActive ? (
            <MonthsList currentPickedMonth={month} handlePickMonth={handlePickMonth} />
          ) : (
            <YearsList currentPickedYear={year} handlePickYear={handlePickYear} />
          )}
          <ConfirmButton onClick={handleConfirm}>OK</ConfirmButton>
        </ModalContent>
      )}
    </Modal>
  );
};
