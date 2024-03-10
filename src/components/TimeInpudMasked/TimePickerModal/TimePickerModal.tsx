import { FC, useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import clsx from 'clsx';
import { HoursList } from './HoursList/HoursList';
import { MinutesList } from './MinutesList/MinutesList';
import { useTimePicker } from 'shared/hooks/useTimePicker';
import {
  ConfirmButton,
  ListsWrapper,
  TimeModalContent,
  TitleWrapper,
} from 'components/TimeInpudMasked/TimePickerModal/timePickerModal.style';

interface TimePickerModalProps {
  isOpen: boolean;
  handleClose: () => void;
  anchorEl: HTMLDivElement | null;
  handleChangeTime: (timeValue: string) => void;
}

export const TimePickerModal: FC<TimePickerModalProps> = ({ isOpen, handleClose, anchorEl, handleChangeTime }) => {
  const [anchorElementRect, setAnchorElementRect] = useState<DOMRect | null>(null);

  const { time, hour, minute, handlePickHour, handlePickMinute, handleConfirm } = useTimePicker(handleClose);

  useEffect(() => {
    if (anchorEl) {
      setAnchorElementRect(anchorEl.getBoundingClientRect());
    }
  }, [anchorEl]);

  useEffect(() => {
    if (time) {
      handleChangeTime(time);
    }
  }, [handleChangeTime, time]);

  return (
    <Modal
      id='time-picker-modal'
      isOpen={isOpen}
      handleClose={handleClose}
      backdropStyle={{ zIndex: 4, backdropFilter: 'none', background: 'transparent' }}
    >
      {anchorElementRect && (
        <TimeModalContent
          style={{
            top: anchorElementRect.top - anchorElementRect.height,
            left: anchorElementRect.left - anchorElementRect.width / 2,
          }}
          className={clsx({ open: isOpen })}
        >
          <TitleWrapper className={clsx({ open: isOpen })}>
            <span className={clsx({ open: isOpen })}>HH</span>
            <span className={clsx({ open: isOpen })}>mm</span>
          </TitleWrapper>
          <ListsWrapper>
            <HoursList currentPickedHour={hour} handlePickHour={handlePickHour} />
            <MinutesList currentPickedMinute={minute} handlePickMinute={handlePickMinute} />
          </ListsWrapper>
          <ConfirmButton onClick={handleConfirm}>ok</ConfirmButton>
        </TimeModalContent>
      )}
    </Modal>
  );
};
