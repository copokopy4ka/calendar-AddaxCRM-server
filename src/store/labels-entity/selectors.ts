import { RootState } from '../root-store';

export const selectorGetIsLoading = (store: RootState) => store.labelsStore.isLoading;

export const selectorGetLabels = (store: RootState) => store.labelsStore.labels;
