import { createAction, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'core/api/axios.confg';
import { ActionType } from 'store/actions.types';
import storage from 'core/services/localStorageService';
import { SETTINGS } from 'constants/settings';
import {
  CreateUserEventDto,
  EventToDownloadDto,
  EventToUploadDto,
  Holiday,
  UpdateUserEventDto,
  UserEvent,
  UserEventSequenceNumDto,
} from 'core/types/events.type';
import { API } from 'core/api/entity.api';
import { AxiosRequestConfig } from 'axios';

export const getEvents = createAsyncThunk(
  ActionType.EVENTS_GET,
  async (
    { date, labels, searchText }: { date: string; labels?: string[]; searchText?: string },
    { rejectWithValue }
  ) => {
    try {
      const query: AxiosRequestConfig = {
        params: {
          date: date.split('T')[0],
        },
      };

      if (labels?.length) {
        query.params.labels = labels.join(',');
      }

      if (searchText) {
        query.params.searchText = searchText;
      }

      const { data } = await axios.get<UserEvent[]>(API.EVENTS, query);
      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);

export const getHolidays = createAsyncThunk(ActionType.EVENTS_GET_HOLIDAYS, async (_, { rejectWithValue }) => {
  try {
    const query: AxiosRequestConfig = {
      baseURL: process.env.REACT_APP_WORLDWIDE_HOLIDAYS_API_BASE_URL,
    };

    const { data } = await axios.get<Holiday[]>(API.HOLIDAYS, query);
    const updatedData = data.reduce<Holiday[]>((acc, el) => {
      if (acc.at(-1)?.name === el.name) {
        return acc;
      }
      const { name, date } = el;
      const id = nanoid();
      acc.push({ date, id, name });
      return acc;
    }, []);
    return updatedData;
  } catch (e) {
    throw rejectWithValue(e);
  }
});

export const getEventById = createAsyncThunk(ActionType.EVENTS_GET_BY_ID, async (id: string, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<UserEvent>(API.EVENTS_BY_ID(id));

    return data;
  } catch (e) {
    throw rejectWithValue(e);
  }
});

export const createEvent = createAsyncThunk(
  ActionType.EVENTS_CREATE,
  async (eventData: CreateUserEventDto, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<UserEvent>(API.EVENTS_CREATE, eventData);

      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);

export const updateEventSequenceNum = createAsyncThunk(
  ActionType.EVENTS_UPDATE_SEQUENCE_NUM,
  async (updateSequenceNumDto: UserEventSequenceNumDto, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<UserEvent>(API.EVENTS_UPDATE_SEQUENCE_NUM, updateSequenceNumDto);

      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);

export const updateEvent = createAsyncThunk(
  ActionType.EVENTS_UPDATE,
  async (updateEventData: UpdateUserEventDto, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<UserEvent>(API.EVENTS_UPDATE, updateEventData);

      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);

export const deleteEvent = createAsyncThunk(ActionType.EVENTS_DELETE, async (id: string, { rejectWithValue }) => {
  try {
    await axios.delete<{ deleted: boolean }>(API.EVENTS_BY_ID(id));

    return id;
  } catch (e) {
    throw rejectWithValue(e);
  }
});

// Create user DB
export const createUserOnDB = createAsyncThunk(
  ActionType.USER_CREATE,
  async (_, { rejectWithValue }): Promise<{ msg: string }> => {
    try {
      const { data } = await axios.post<{ msg: string }>(API.USER_CREATE);

      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);

// Current date
export const updateCurrentDate = createAction(ActionType.CURRENT_DATE_UPDATE, (date: string) => {
  storage.update(SETTINGS.LAST_VIEWED_DATE, date);
  return { payload: date };
});

// Upload and download

export const getDataForDownload = createAsyncThunk(
  ActionType.EVENTS_DOWNLOAD,
  async (date: string, { rejectWithValue }) => {
    try {
      const query: AxiosRequestConfig = {
        params: {
          date: date.split('T')[0],
        },
      };

      const { data } = await axios.get<EventToDownloadDto[]>(API.EVENTS_DOWNLOAD, query);
      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);

export const uploadEvents = createAsyncThunk(
  ActionType.EVENTS_UPLOAD,
  async ({ events, date }: { events: EventToUploadDto[]; date: string }, { rejectWithValue }) => {
    try {
      const query: AxiosRequestConfig = {
        params: {
          date: date.split('T')[0],
        },
      };
      const { data } = await axios.post<UserEvent[]>(API.EVENTS_UPLOAD, { events }, query);
      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);
