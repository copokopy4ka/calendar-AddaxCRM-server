import { FC } from 'react';
import clsx from 'clsx';
import { MINUTES } from 'constants/dates';
import { useScrollToActive } from 'shared/hooks/useScrollToActive';
import {
  TimePickerListItem,
  TimePickerListWrapper,
} from 'components/TimeInpudMasked/TimePickerModal/timePickerModal.style';

interface MinutesListProps {
  handlePickMinute: (minute: string) => void;
  currentPickedMinute: string | null;
}

export const MinutesList: FC<MinutesListProps> = ({ handlePickMinute, currentPickedMinute }) => {
  const refsList = useScrollToActive(currentPickedMinute, MINUTES);

  return (
    <TimePickerListWrapper>
      {MINUTES.map((minute, index) => (
        <TimePickerListItem
          key={minute}
          className={clsx({ active: currentPickedMinute === minute })}
          onClick={() => handlePickMinute(minute)}
          ref={refsList.current[index]}
        >
          {minute}
        </TimePickerListItem>
      ))}
    </TimePickerListWrapper>
  );
};
