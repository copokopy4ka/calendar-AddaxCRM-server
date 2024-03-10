import { UserEvent, Holiday } from 'core/types/events.type';

export interface EventsState {
  events: UserEvent[];
  holidays: Holiday[];
  currentEvent: UserEvent;
  currentDate: string | null;
  errorMessage: string | null;
  isLoading: boolean;
}
