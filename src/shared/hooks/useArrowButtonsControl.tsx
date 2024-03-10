import { useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import storage from 'core/services/localStorageService';
import { SETTINGS } from 'constants/settings';
import { DATE_FORMAT } from 'constants/date-format';
import { useSelector } from 'react-redux';
import { selectorGetCurrentDate } from 'store/events-entity/selectors';
import { getEvents, updateCurrentDate } from 'store/events-entity/actions';
import { UseArrowButtonsControlResponse } from 'core/types/custom-hooks.type';
import { useThunkDispatch } from 'shared/hooks/useThunkDispatch';

/**
 * Provides control for navigating calendar dates using arrow buttons and fetches events based on the selected date.
 *
 * @returns {UseArrowButtonsControlResponse} An object containing:
 *   - dateText: A string representing the current date in "Month Year" format.
 *   - handlePrevButtonClick: A function that decrements the current date by one month, updates the current date in the state, fetches events for the new date, and updates local storage.
 *   - handleNextButtonClick: A function that increments the current date by one month, updates the current date in the state, fetches events for the new date, and updates local storage.
 *
 * This custom hook integrates with a Redux store and local storage to manage the application's current date state.
 * It provides two callback functions to navigate to the previous and next months, respectively. Upon navigating, it updates the current date state,
 * fetches events corresponding to the new date, and maintains the last viewed date in local storage for persistent user experience across sessions.
 */
export const useArrowButtonsControl = (): UseArrowButtonsControlResponse => {
  const dispatch = useThunkDispatch();
  const currentDate = useSelector(selectorGetCurrentDate);

  const dateText = useMemo(() => dayjs(currentDate).format(DATE_FORMAT.MONTH_YEAR), [currentDate]);

  const handleNextButtonClick = useCallback(async () => {
    if (currentDate) {
      const newDate = dayjs(currentDate).add(1, 'month').format();
      dispatch(updateCurrentDate(newDate));
      await dispatch(getEvents({ date: newDate }));
      storage.update(SETTINGS.LAST_VIEWED_DATE, newDate);
    }
  }, [currentDate, dispatch]);

  const handlePrevButtonClick = useCallback(async () => {
    if (currentDate) {
      const newDate = dayjs(currentDate).subtract(1, 'month').format();
      dispatch(updateCurrentDate(newDate));
      await dispatch(getEvents({ date: newDate }));
      storage.update(SETTINGS.LAST_VIEWED_DATE, newDate);
    }
  }, [currentDate, dispatch]);

  return {
    dateText,
    handlePrevButtonClick,
    handleNextButtonClick,
  };
};
