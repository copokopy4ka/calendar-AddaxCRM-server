import { MonthGridItem } from 'core/types/calendar.type';
import { UserEvent } from 'core/types/events.type';
import { Dispatch, SetStateAction } from 'react';
import { useThunkDispatch } from 'shared/hooks/useThunkDispatch';
import { updateEventSequenceNum } from 'store/events-entity/actions';

/**
 * Provides functionality to handle drag-and-drop operations within the calendar.
 *
 * @param {MonthGridItem[]} daysList - An array of day objects currently displayed in the calendar.
 * @param {Dispatch<SetStateAction<MonthGridItem[]>>} setDaysList - State setter function for updating the days list.
 * @returns An object containing:
 *   - moveItem: A function to move an event from one day to another within the calendar.
 *
 * The `moveItem` function takes an event ID, its source day ID, target day ID,
 * and the new index position within the target day. It updates the event's date and position based
 * on the provided parameters, modifies the daysList state to reflect these changes,
 * and dispatches an action to update the event sequence number in the backend.
 */
export const useDragAndDrop = (daysList: MonthGridItem[], setDaysList: Dispatch<SetStateAction<MonthGridItem[]>>) => {
  const dispatch = useThunkDispatch();
  const moveItem = (eventId: string, sourceDayId: string, targetDayId: string, newIndex: number) => {
    const currentEvent: UserEvent | undefined = daysList
      .map((el) => el.events)
      .flat()
      .find((el) => el.id === eventId);
    const newDate: string | undefined = daysList.find((el) => el.id === targetDayId)?.date;
    const prevDate: string | undefined = daysList.find((el) => el.id === sourceDayId)?.date;

    if (currentEvent && newDate && prevDate) {
      const updatedCurrentEvent = { ...currentEvent, date: newDate };

      setDaysList((prev) =>
        prev.map((day) => {
          let newEventsList = [...day.events];
          if (day.id === targetDayId) {
            if (sourceDayId === targetDayId) {
              newEventsList = newEventsList.filter((el) => el.id !== eventId);
            }
            if (newIndex >= newEventsList.length) {
              newEventsList.push(updatedCurrentEvent);
            } else {
              newEventsList.splice(newIndex, 0, updatedCurrentEvent);
            }

            return {
              ...day,
              events: newEventsList,
            };
          } else if (day.id === sourceDayId && sourceDayId !== targetDayId) {
            return {
              ...day,
              events: day.events.filter((el) => el.id !== eventId),
            };
          }
          return day;
        })
      );

      dispatch(
        updateEventSequenceNum({
          itemId: updatedCurrentEvent.id,
          sequenceNum: newIndex,
          prevDate,
          newDate,
        })
      );
    }
  };
  return { moveItem };
};
