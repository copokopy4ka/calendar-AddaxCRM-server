import { FC, RefObject } from 'react';
import clsx from 'clsx';
import { UserEvent } from 'core/types/events.type';
import { EventItem } from '../EventItem/EventItem';
import { MonthGridItem } from 'core/types/calendar.type';
import { EventsList } from 'components/CalendarGrid/calendarGrid.style';

interface EventsListProps {
  dayData: MonthGridItem;
  id: string;
  handleEventClick: (userEvent: UserEvent) => void;
  eventsRefs: RefObject<HTMLDivElement>[];
  itemsListRef: RefObject<HTMLDivElement>;
  isLargeGrid: boolean;
}

export const EventList: FC<EventsListProps> = ({
  dayData,
  id,
  handleEventClick,
  eventsRefs,
  itemsListRef,
  isLargeGrid,
}) => {
  return (
    <EventsList ref={itemsListRef} id={id} className={clsx({ small: isLargeGrid })}>
      {eventsRefs.length > 0 &&
        dayData.events.map((item, index) => (
          <EventItem
            key={item.id}
            userEvent={item}
            dayId={dayData.id}
            handleClick={handleEventClick}
            isDisabled={!dayData.isCurrentMonthDay}
            itemRef={eventsRefs[index]}
          />
        ))}
    </EventsList>
  );
};
