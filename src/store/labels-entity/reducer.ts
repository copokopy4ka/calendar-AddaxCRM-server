import { createSlice } from '@reduxjs/toolkit';
import { LabelsState } from './labels-entity.interface';
import {
  getLabelsOperation,
  updateLabelOperation,
  createLabelOperation,
  pendingOperation,
  rejectOperation,
} from './operations';
import { getLabels, createLabel, updateLabel } from './actions';

const initialState: LabelsState = {
  labels: [],
  errorMessage: null,
  isLoading: false,
};

export const labelsStore = createSlice({
  name: 'labels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get labels
      .addCase(getLabels.pending, pendingOperation)
      .addCase(getLabels.fulfilled, getLabelsOperation)
      .addCase(getLabels.rejected, rejectOperation)
      // create label
      .addCase(createLabel.pending, pendingOperation)
      .addCase(createLabel.fulfilled, createLabelOperation)
      .addCase(createLabel.rejected, rejectOperation)
      // update label
      .addCase(updateLabel.pending, pendingOperation)
      .addCase(updateLabel.fulfilled, updateLabelOperation)
      .addCase(updateLabel.rejected, rejectOperation);
  },
});

export default labelsStore.reducer;
