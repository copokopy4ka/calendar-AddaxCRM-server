import { useCallback, useEffect } from 'react';
import dayjs from 'dayjs';
import storage from 'core/services/localStorageService';
import { SETTINGS } from 'constants/settings';
import { createUserOnDB, getEvents, getHolidays, updateCurrentDate } from 'store/events-entity/actions';
import { useThunkDispatch } from 'shared/hooks/useThunkDispatch';
import { useSelector } from 'react-redux';
import { selectorGetIsLoading } from 'store/events-entity/selectors';
import { getLabels } from 'store/labels-entity/actions';

/**
 * Hook for performing initial configurations and requests when the application loads.
 *
 * This hook is responsible for initiating user-related data, fetching initial labels, holidays, and events.
 * It also manages loading state to indicate when the initial requests are in progress.
 *
 * @returns {boolean} isLoading - A boolean indicating whether initial requests are still being processed.
 *
 * The hook operates in several steps:
 * 1. On the first render, it checks if there is a saved last viewed date in the local storage. If found,
 *    it updates the current date in the application state and fetches events for that date. If not found, it
 *    sets the current date to today's date, saves it in the local storage, and fetches events for today.
 * 2. It dispatches actions to create a user on the database if necessary, fetch labels, and fetch holidays.
 *
 * This process ensures that upon loading the application, the user has all the necessary data for a seamless experience.
 */
export const useInitialConfigurations = (): boolean => {
  const dispatch = useThunkDispatch();
  const isLoading = useSelector(selectorGetIsLoading);

  const handleInitialRequests = useCallback(async () => {
    await dispatch(createUserOnDB());
    dispatch(getLabels());
    dispatch(getHolidays());
  }, [dispatch]);

  useEffect(() => {
    const savedDate = storage.getData(SETTINGS.LAST_VIEWED_DATE);
    if (savedDate) {
      dispatch(updateCurrentDate(savedDate));
      dispatch(getEvents({ date: savedDate }));
    } else {
      const currentDate = dayjs().format();
      storage.update(SETTINGS.LAST_VIEWED_DATE, currentDate);
      dispatch(updateCurrentDate(currentDate));
      dispatch(getEvents({ date: currentDate }));
    }
  }, [dispatch]);

  useEffect(() => {
    handleInitialRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading;
};
