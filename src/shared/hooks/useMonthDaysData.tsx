import { SETTINGS } from 'constants/settings';
import { calendarSchema } from 'core/config/validation.config';
import storage from 'core/services/localStorageService';
import { MonthActiveDay, MonthGridItem } from 'core/types/calendar.type';
import { UseMonthDaysDataResponse } from 'core/types/custom-hooks.type';
import { EventToUploadDto } from 'core/types/events.type';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useThunkDispatch } from 'shared/hooks/useThunkDispatch';
import { useToast } from 'shared/hooks/useToast';
import { getDataForDownload, uploadEvents } from 'store/events-entity/actions';
import { selectorGetCurrentDate, selectorGetEvents, selectorGetHolidays } from 'store/events-entity/selectors';
import { getLabels } from 'store/labels-entity/actions';
import { getMonthDays, updateDaysWithEvents } from 'utils/helpers';

/**
 * Hook for managing month days data including events and holidays for the calendar grid.
 *
 * This hook encapsulates the logic for fetching, displaying, and interacting with the days in the current month,
 * as well as handling the download and upload of calendar data.
 *
 * @returns {UseMonthDaysDataResponse} - An object containing state and functions related to month days data.
 *
 * The hook performs several key actions:
 * - On the first render and whenever the current date changes, it calculates the days of the month,
 * updates them with events and holidays, and selects the current day if applicable.
 * - Provides a function to handle day clicks, updating the selected day.
 * - Implements functionality to download the current calendar data as a JSON file.
 * - Allows the user to upload calendar data from a JSON file, validating the data structure and updating the calendar grid accordingly.
 *
 * The hook relies on Redux for state management and dispatching actions related to events and labels, and utilizes custom utility
 * functions and validators to handle date calculations and data validation.
 */
export const useMonthDaysData = (): UseMonthDaysDataResponse => {
  const dispatch = useThunkDispatch();
  const handleToast = useToast();
  const currentDate = useSelector(selectorGetCurrentDate);
  const eventsList = useSelector(selectorGetEvents);
  const holidays = useSelector(selectorGetHolidays);

  const [daysList, setDaysList] = useState<MonthGridItem[]>([]);
  const [selectedDay, setSelectedDay] = useState<MonthActiveDay | null>(null);

  const handleDayClick = useCallback(
    (dayData: MonthActiveDay) => {
      storage.update(SETTINGS.SELECTED_DAY, dayData);
      setSelectedDay(dayData);
    },
    [setSelectedDay]
  );

  const handleDownloadCalendarData = useCallback(async () => {
    try {
      if (currentDate) {
        const dataToDownload = await dispatch(getDataForDownload(currentDate)).unwrap();
        const dataStr = JSON.stringify(dataToDownload, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', 'calendar_data.json');
        linkElement.click();
        linkElement.remove();
      }
    } catch (error) {
      console.error('Error in download data func:', error);
    }
  }, [currentDate, dispatch]);

  const handleUploadCalendarData = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file && file.type === 'application/json' && currentDate) {
        const reader = new FileReader();

        reader.onload = async (e: ProgressEvent<FileReader>) => {
          const content = e?.target?.result as string;
          try {
            if (content) {
              const data: EventToUploadDto[] = JSON.parse(content);
              console.log('data', data);
              await calendarSchema.validate(data);
              await dispatch(uploadEvents({ events: data, date: currentDate }));
              await dispatch(getLabels()).unwrap();
              handleToast('Calendar grid successfully updated! ', { type: 'success' });
            }
          } catch (error) {
            handleToast('Invalid Data Structure.', { type: 'error' });
          }
        };

        reader.onerror = (e) => {
          handleToast(`Reading of file failed. ${e?.target?.error}`, { type: 'error' });
        };

        reader.readAsText(file);
      } else {
        handleToast('File type should be .json', { type: 'error' });
      }
      event.target.value = '';
    },
    [currentDate, dispatch, handleToast]
  );

  useEffect(() => {
    if (currentDate) {
      const { daysList, activeDay } = getMonthDays(currentDate);
      setDaysList(updateDaysWithEvents(daysList, eventsList, holidays));
      setSelectedDay(activeDay);
    }
  }, [currentDate, eventsList, holidays]);

  return { daysList, selectedDay, handleDayClick, setDaysList, handleDownloadCalendarData, handleUploadCalendarData };
};
