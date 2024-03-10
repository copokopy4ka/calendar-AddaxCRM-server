import { PayloadAction } from '@reduxjs/toolkit';
import { UserEventLabel } from 'core/types/events-labels.type';
import { LabelsState } from 'store/labels-entity/labels-entity.interface';

export const pendingOperation = (state: LabelsState) => {
  state.isLoading = true;
};

export const rejectOperation = (state: LabelsState) => {
  state.isLoading = false;
};

export const getLabelsOperation = (state: LabelsState, { payload }: PayloadAction<UserEventLabel[]>) => {
  state.labels = payload;
  state.isLoading = false;
};

export const createLabelOperation = (state: LabelsState, { payload }: PayloadAction<UserEventLabel>) => {
  state.labels = [...state.labels, payload];
  state.isLoading = false;
};

export const updateLabelOperation = (state: LabelsState, { payload }: PayloadAction<UserEventLabel>) => {
  state.labels = state.labels.map((item) => (item.id === payload.id ? payload : item));
  state.isLoading = false;
};
