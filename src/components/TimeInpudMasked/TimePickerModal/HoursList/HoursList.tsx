import { FC } from 'react';
import { HOURS } from 'constants/dates';
import clsx from 'clsx';
import { useScrollToActive } from 'shared/hooks/useScrollToActive';
import {
  TimePickerListItem,
  TimePickerListWrapper,
} from 'components/TimeInpudMasked/TimePickerModal/timePickerModal.style';

interface HoursListProps {
  handlePickHour: (hour: string) => void;
  currentPickedHour: string | null;
}

export const HoursList: FC<HoursListProps> = ({ handlePickHour, currentPickedHour }) => {
  const refsList = useScrollToActive(currentPickedHour, HOURS);

  return (
    <TimePickerListWrapper>
      {HOURS.map((hour, index) => (
        <TimePickerListItem
          key={hour}
          className={clsx({ active: currentPickedHour === hour })}
          onClick={() => handlePickHour(hour)}
          ref={refsList.current[index]}
        >
          {hour}
        </TimePickerListItem>
      ))}
    </TimePickerListWrapper>
  );
};
