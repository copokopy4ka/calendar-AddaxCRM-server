import { FC, RefObject, useCallback } from 'react';
import clsx from 'clsx';
import { UserEvent } from 'core/types/events.type';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { selectorGetLabels } from 'store/labels-entity/selectors';
import {
  EventDragRef,
  EventItemWrapper,
  EventLabelItem,
  EventLabelsList,
  EventTitle,
} from 'components/CalendarGrid/calendarGrid.style';

interface EventItemProps {
  dayId: string;
  itemRef: RefObject<HTMLDivElement>;
  userEvent: UserEvent;
  isDisabled: boolean;
  handleClick: (userEvent: UserEvent) => void;
}

export const EventItem: FC<EventItemProps> = ({ userEvent, handleClick, isDisabled, dayId, itemRef }) => {
  const allLabels = useSelector(selectorGetLabels);
  const [_, dragRef] = useDrag(() => ({
    type: 'ITEM',
    item: { id: userEvent.id, dayId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const onClick = useCallback(() => handleClick(userEvent), [userEvent, handleClick]);

  return (
    <EventDragRef ref={dragRef}>
      <div ref={itemRef}>
        <EventItemWrapper onClick={onClick} key={userEvent.id} className={clsx({ disabled: isDisabled })}>
          <EventLabelsList>
            {userEvent.labels.map((labelId) => (
              <EventLabelItem
                key={labelId}
                style={{ background: allLabels.find((label) => label.id === labelId)?.color }}
              />
            ))}
          </EventLabelsList>
          <EventTitle>{userEvent.title}</EventTitle>
        </EventItemWrapper>
      </div>
    </EventDragRef>
  );
};
