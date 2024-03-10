import { FC } from 'react';
import { MONTHS } from 'constants/dates';
import clsx from 'clsx';
import { useScrollToActive } from 'shared/hooks/useScrollToActive';
import { MonthItem, MonthListWrapper } from 'components/DatePicker/DatePickerModal/MonthsList/monthList.style';

interface MonthsListProps {
  handlePickMonth: (monthNum: number) => void;
  currentPickedMonth: number | null;
}

export const MonthsList: FC<MonthsListProps> = ({ handlePickMonth, currentPickedMonth }) => {
  const refsList = useScrollToActive(currentPickedMonth, MONTHS);

  return (
    <MonthListWrapper>
      {MONTHS.map((month, index) => (
        <MonthItem
          key={month}
          className={clsx({ active: currentPickedMonth === index })}
          onClick={() => handlePickMonth(index)}
          ref={refsList.current[index]}
        >
          {month}
        </MonthItem>
      ))}
    </MonthListWrapper>
  );
};
