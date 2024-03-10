import { FC, MouseEvent, useState } from 'react';
import { Holiday } from 'core/types/events.type';
import { ReactComponent as DoubleArrowDownIcon } from 'assets/arrow-down-icon.svg';
import clsx from 'clsx';
import {
  ArrowIcon,
  HolidaysList,
  HolidaysListItem,
  HolidaysWrapper,
  Title,
  TitleWrapper,
} from 'components/Holidays/holidays.style';

interface HolidaysProps {
  holidaysList: Holiday[];
  isLargeGrid: boolean;
}

export const Holidays: FC<HolidaysProps> = ({ holidaysList, isLargeGrid }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHolidayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsActive((prev) => !prev);
  };

  return (
    <HolidaysWrapper onClick={handleHolidayClick} className={clsx({ active: isActive })}>
      <TitleWrapper>
        <Title>Holidays</Title>
        <ArrowIcon className={clsx('arrow-icon')}>
          <DoubleArrowDownIcon />
        </ArrowIcon>
      </TitleWrapper>
      <HolidaysList className={clsx({ small: isLargeGrid })}>
        {holidaysList.map((el) => (
          <HolidaysListItem key={el.id}>- {el.name}</HolidaysListItem>
        ))}
      </HolidaysList>
    </HolidaysWrapper>
  );
};
