import { PayloadAction } from '@reduxjs/toolkit';
import { Holiday, UserEvent } from 'core/types/events.type';
import { EventsState } from 'store/events-entity/events-entity.interface';

export const pendingOperation = (state: EventsState) => {
  state.isLoading = true;
};

export const rejectOperation = (state: EventsState) => {
  state.isLoading = false;
};

export const getEventsOperation = (state: EventsState, { payload }: PayloadAction<UserEvent[]>) => {
  state.events = payload;
  state.isLoading = false;
};

export const getHolidaysOperation = (state: EventsState, { payload }: PayloadAction<Holiday[]>) => {
  state.holidays = payload;
  state.isLoading = false;
};

export const getEventByIdOperation = (state: EventsState, { payload }: PayloadAction<UserEvent | null>) => {
  if (payload) {
    state.currentEvent = payload;
  }
  state.isLoading = false;
};

export const createEventOperation = (state: EventsState, { payload }: PayloadAction<UserEvent>) => {
  state.currentEvent = payload;
  state.isLoading = false;
};

export const updateEventOperation = (state: EventsState, { payload }: PayloadAction<UserEvent>) => {
  state.currentEvent = payload;
  state.isLoading = false;
};

export const deleteEventOperation = (state: EventsState, { payload }: PayloadAction<string>) => {
  state.isLoading = false;
};

export const updateDateOperation = (state: EventsState, { payload }: PayloadAction<string>) => {
  state.currentDate = payload;
  state.isLoading = false;
};
