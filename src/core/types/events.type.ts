export interface UserEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  sequenceNum: number;
  labels: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserEventDto {
  title: string;
  labels: string[];
  date: string;
  time?: string;
}

export type UpdateUserEventDto = CreateUserEventDto & { id: string };

export interface UserEventFormDefaultValues {
  title: string;
  date: string;
  time: string;
}

export interface UserEventSequenceNumDto {
  prevDate: string;
  newDate: string;
  itemId: string;
  sequenceNum: number;
}

export interface Holiday {
  id: string;
  name: string;
  date: string;
}

export interface LabelToDownload {
  id: string;
  text: string;
  color: string;
}

export interface EventToDownloadDto {
  id: string;
  title: string;
  date: string;
  time: string;
  sequenceNum: number;
  labels: LabelToDownload[];
}

export interface EventToUploadDto {
  title: string;
  date: string;
  time?: string;
  labels: Omit<LabelToDownload, 'id'>[];
}
