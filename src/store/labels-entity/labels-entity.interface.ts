import { UserEventLabel } from 'core/types/events-labels.type';

export interface LabelsState {
  labels: UserEventLabel[];
  errorMessage: string | null;
  isLoading: boolean;
}
