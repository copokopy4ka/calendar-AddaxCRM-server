import { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { Day } from './Day/Day';
import { UserEvent } from 'core/types/events.type';
import { MonthActiveDay, MonthGridItem } from 'core/types/calendar.type';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useDragAndDrop } from 'shared/hooks/useDragAndDrop';
import { DaysGrid } from 'components/CalendarGrid/calendarGrid.style';
import clsx from 'clsx';

interface CalendarGridProps {
  daysList: MonthGridItem[];
  setDaysList: Dispatch<SetStateAction<MonthGridItem[]>>;
  selectedDay: MonthActiveDay | null;
  handleDayClick: (dayData: MonthActiveDay) => void;
  handleEventClick: (userEvent: UserEvent) => void;
}

export const CalendarGrid: FC<CalendarGridProps> = ({
  daysList,
  setDaysList,
  selectedDay,
  handleDayClick,
  handleEventClick,
}) => {
  const { moveItem } = useDragAndDrop(daysList, setDaysList);
  const isLargeGrid = useMemo(() => daysList.length > 35, [daysList.length]);

  return (
    <DndProvider backend={HTML5Backend}>
      <DaysGrid className={clsx({ large: isLargeGrid })}>
        {daysList.map((item, index) => (
          <Day
            onDrop={moveItem}
            key={item.id}
            dayData={item}
            handleDayClick={handleDayClick}
            activeDay={selectedDay}
            handleEventClick={handleEventClick}
            isFirstRowItem={index <= 6}
            isLargeGrid={isLargeGrid}
          />
        ))}
      </DaysGrid>
    </DndProvider>
  );
};
