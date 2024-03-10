import { MonthActiveDay, MonthGridItem } from 'core/types/calendar.type';
import { UserEventLabel } from 'core/types/events-labels.type';
import { UserEvent } from 'core/types/events.type';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Control, FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister, UseFormReset } from 'react-hook-form';

export interface UseArrowButtonsControlResponse {
  dateText: string;
  handlePrevButtonClick: () => void;
  handleNextButtonClick: () => void;
}

export interface UseDatePickerDataResponse {
  isMonthsPickerActive: boolean;
  handleDisplayMonths: () => void;
  handleDisplayYears: () => void;
  month: number | null;
  year: number | null;
  handlePickMonth: (month: number) => void;
  handlePickYear: (year: number) => void;
  handleConfirm: () => void;
}

export interface UseHandleUserEventResponse {
  selectedEvent: UserEvent | null;
  openEventFormModal: () => void;
  closeEventFormModal: () => void;
  isOpenEventFormModal: boolean;
  handleEventClick: (userEvent: UserEvent) => void;
  handleSubmitEventForm: (values: FieldValues) => void;
  handleDeleteEvent: (id: string) => void;
  setSelectedLabels: Dispatch<SetStateAction<string[]>>;
  selectedLabels: string[];
  handleUpdateSelectedLabelsList: (label: UserEventLabel) => void;
  handleClearLabelsFilters: () => void;
  handleClearSearchInput: () => void;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  handleGetFilteredEvents: () => void;
}

export interface UseHandleEventLabelsResponse {
  labelData: UserEventLabel | null;
  openLabelFormModal: () => void;
  isOpenLabelFormModal: boolean;
  closeLabelFormModal: () => void;
  handleLabelClick: (eventLabelData: UserEventLabel) => void;
  handleSubmitLabelForm: (values: FieldValues) => void;
  selectedColor: string;
  handleSelectedColor: (color: string) => void;
}

export interface UseModalResponse {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export interface UseMonthDaysDataResponse {
  daysList: MonthGridItem[];
  selectedDay: MonthActiveDay | null;
  handleDayClick: (dayData: MonthActiveDay) => void;
  setDaysList: React.Dispatch<React.SetStateAction<MonthGridItem[]>>;
  handleDownloadCalendarData: () => void;
  handleUploadCalendarData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface UseUserEventFormResponse {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, any>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  getErrorMessage: (errors: FieldErrors<FieldValues>, name: string) => string;
  reset: UseFormReset<FieldValues>;
  handleClearTitle: () => void;
  handleChangeTime: (time: string) => void;
  subtitle: string | undefined;
  isDisabledSubmitButton: boolean;
  title: string;
}

export interface UseUserEventLabelsFormResponse {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, any>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  getErrorMessage: (errors: FieldErrors<FieldValues>, name: string) => string;
  reset: UseFormReset<FieldValues>;
  isDisabledSubmitButton: boolean;
  title: string;
}

export interface UseTimePickerResponse {
  time: string | null;
  hour: string | null;
  minute: string | null;
  handlePickHour: (hour: string) => void;
  handlePickMinute: (minute: string) => void;
  handleConfirm: () => void;
}
