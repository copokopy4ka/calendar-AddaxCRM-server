import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'core/api/axios.confg';
import { ActionType } from 'store/actions.types';
import { CreateUserEventLabelDto, UpdateUserEventLabelDto, UserEventLabel } from 'core/types/events-labels.type';
import { API } from 'core/api/entity.api';

export const getLabels = createAsyncThunk(ActionType.EVENTS_LABELS_GET, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<UserEventLabel[]>(API.EVENTS_LABELS);
    return data;
  } catch (e) {
    throw rejectWithValue(e);
  }
});

export const createLabel = createAsyncThunk(
  ActionType.EVENTS_LABELS_CREATE,
  async (createLabelData: CreateUserEventLabelDto, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<UserEventLabel>(API.EVENTS_LABELS_CREATE, createLabelData);

      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);

export const updateLabel = createAsyncThunk(
  ActionType.EVENTS_LABELS_UPDATE,
  async (updateLabelData: UpdateUserEventLabelDto, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<UserEventLabel>(API.EVENTS_LABELS_UPDATE, updateLabelData);

      return data;
    } catch (e) {
      throw rejectWithValue(e);
    }
  }
);
