import { createSlice } from '@reduxjs/toolkit';
import { EventsState } from './events-entity.interface';
import {
  updateDateOperation,
  getEventsOperation,
  getEventByIdOperation,
  updateEventOperation,
  createEventOperation,
  deleteEventOperation,
  pendingOperation,
  rejectOperation,
  getHolidaysOperation,
} from './operations';
import {
  updateCurrentDate,
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getHolidays,
  uploadEvents,
} from './actions';

const initialState: EventsState = {
  events: [],
  holidays: [],
  currentEvent: {
    id: '',
    title: '',
    date: '',
    createdAt: '',
    updatedAt: '',
    sequenceNum: 0,
    labels: [],
  },
  currentDate: null,
  errorMessage: null,
  isLoading: false,
};

export const eventsStore = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //update date
      .addCase(updateCurrentDate, updateDateOperation)
      //get events
      .addCase(getEvents.pending, pendingOperation)
      .addCase(getEvents.fulfilled, getEventsOperation)
      .addCase(getEvents.rejected, rejectOperation)
      //get holidays
      .addCase(getHolidays.pending, pendingOperation)
      .addCase(getHolidays.fulfilled, getHolidaysOperation)
      .addCase(getHolidays.rejected, rejectOperation)
      // get event by id
      .addCase(getEventById.pending, pendingOperation)
      .addCase(getEventById.fulfilled, getEventByIdOperation)
      .addCase(getEventById.rejected, rejectOperation)
      // create event
      .addCase(createEvent.pending, pendingOperation)
      .addCase(createEvent.fulfilled, createEventOperation)
      .addCase(createEvent.rejected, rejectOperation)
      // update event
      .addCase(updateEvent.pending, pendingOperation)
      .addCase(updateEvent.fulfilled, updateEventOperation)
      .addCase(updateEvent.rejected, rejectOperation)
      // delete event
      .addCase(deleteEvent.pending, pendingOperation)
      .addCase(deleteEvent.fulfilled, deleteEventOperation)
      .addCase(deleteEvent.rejected, rejectOperation)
      // upload event
      .addCase(uploadEvents.pending, pendingOperation)
      .addCase(uploadEvents.fulfilled, getEventsOperation)
      .addCase(uploadEvents.rejected, rejectOperation);
  },
});

export default eventsStore.reducer;
