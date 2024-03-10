import { RootState } from '../root-store';

export const selectorGetIsLoading = (store: RootState) => store.eventsStore.isLoading;

export const selectorGetEvents = (store: RootState) => store.eventsStore.events;

export const selectorGetHolidays = (store: RootState) => store.eventsStore.holidays;

export const selectorGetEventById = (store: RootState) => store.eventsStore.currentEvent;

export const selectorGetCurrentDate = (store: RootState) => store.eventsStore.currentDate;
