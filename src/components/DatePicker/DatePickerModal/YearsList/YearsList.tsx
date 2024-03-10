import { FC } from 'react';
import clsx from 'clsx';
import { YEARS } from 'constants/dates';
import { useScrollToActive } from 'shared/hooks/useScrollToActive';
import { YearItem, YearsListWrapper } from 'components/DatePicker/DatePickerModal/YearsList/yearsList.style';

interface YearsListProps {
  handlePickYear: (year: number) => void;
  currentPickedYear: number | null;
}

export const YearsList: FC<YearsListProps> = ({ handlePickYear, currentPickedYear }) => {
  const refsList = useScrollToActive(currentPickedYear, YEARS);

  return (
    <YearsListWrapper>
      {YEARS.map((year, index) => (
        <YearItem
          key={year}
          className={clsx({ active: currentPickedYear === year })}
          onClick={() => handlePickYear(year)}
          ref={refsList.current[index]}
        >
          {year}
        </YearItem>
      ))}
    </YearsListWrapper>
  );
};
