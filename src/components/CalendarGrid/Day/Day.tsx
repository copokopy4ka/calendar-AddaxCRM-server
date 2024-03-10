import { FC, RefObject, createRef, useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { MonthActiveDay, MonthGridItem } from 'core/types/calendar.type';
import { EventList } from 'components/CalendarGrid/Day/EventsList/EventsList';
import { UserEvent } from 'core/types/events.type';
import { useDrop } from 'react-dnd';
import { calculateNewIndex, getAdditionalDayHeaderData } from 'utils/helpers';
import { Holidays } from 'components/Holidays/Holidays';
import { DayCard, DayCardHeader, DayEventsCounter, WeekDayName } from 'components/CalendarGrid/calendarGrid.style';

interface DayProps {
  dayData: MonthGridItem;
  isFirstRowItem: boolean;
  isLargeGrid: boolean;
  handleDayClick: (data: MonthActiveDay) => void;
  activeDay: MonthActiveDay | null;
  handleEventClick: (userEvent: UserEvent) => void;
  onDrop: (eventId: string, sourceDayId: string, currentDayId: string, newIndex: number) => void;
}

export const Day: FC<DayProps> = ({
  dayData,
  isFirstRowItem,
  isLargeGrid,
  handleDayClick,
  activeDay,
  handleEventClick,
  onDrop,
}) => {
  const [eventsRefs, setEventsRefs] = useState<RefObject<HTMLDivElement>[]>([]);
  const dropTargetRef = useRef<HTMLDivElement>(null);
  const itemsListRef = useRef<HTMLDivElement>(null);

  const [, dropRef] = useDrop({
    accept: 'ITEM',
    drop: (item: { id: string; dayId: string }, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      const listRect = itemsListRef?.current?.getBoundingClientRect();
      const scrollOffset = itemsListRef?.current?.scrollTop;
      const newIndex = calculateNewIndex(clientOffset, listRect, eventsRefs, scrollOffset);
      onDrop(item.id, item.dayId, dayData.id, newIndex);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const additionalDayHeaderData = getAdditionalDayHeaderData(dayData.date);
  dropRef(dropTargetRef);

  const handleClick = useCallback(
    () => handleDayClick({ id: dayData.id, date: dayData.date }),
    [dayData, handleDayClick]
  );

  useEffect(() => {
    setEventsRefs(dayData.events.map((_) => createRef<HTMLDivElement>()));
  }, [dayData.events]);

  return (
    <DayCard
      ref={dropTargetRef}
      onClick={handleClick}
      className={clsx({
        disabled: !dayData.isCurrentMonthDay,
        active: dayData.id === activeDay?.id,
      })}
      key={`${dayData.dateNum}${dayData.weekDayName}`}
    >
      {isFirstRowItem && <WeekDayName>{dayData.weekDayName}</WeekDayName>}
      <DayCardHeader className={clsx('day-card-header')}>
        {additionalDayHeaderData && <div>{additionalDayHeaderData}</div>}
        <div>{dayData.dateNum}</div>
        {dayData.events.length > 0 && (
          <DayEventsCounter>{`${dayData.events.length} card${
            String(dayData.events.length).endsWith('1') ? '' : 's'
          }`}</DayEventsCounter>
        )}
      </DayCardHeader>
      {dayData.holidays && dayData.holidays.length > 0 && (
        <Holidays holidaysList={dayData.holidays} isLargeGrid={isLargeGrid} />
      )}
      <EventList
        dayData={dayData}
        handleEventClick={handleEventClick}
        id={`${dayData.id}-events-list`}
        eventsRefs={eventsRefs}
        itemsListRef={itemsListRef}
        isLargeGrid={isLargeGrid}
      />
    </DayCard>
  );
};
