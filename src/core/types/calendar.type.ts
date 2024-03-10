import { Holiday, UserEvent } from 'core/types/events.type';

export interface MonthGridItem {
  id: string;
  date: string;
  dateNum: number;
  weekDayName: string;
  events: UserEvent[];
  isCurrentMonthDay: boolean;
  holidays?: Holiday[];
}

export type MonthActiveDay = Pick<MonthGridItem, 'date' | 'id'>;
