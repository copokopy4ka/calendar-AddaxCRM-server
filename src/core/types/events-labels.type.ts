export interface UserEventLabel {
  id: string;
  text: string;
  color: string;
}

export interface CreateUserEventLabelDto {
  text: string;
  color: string;
}

export type UpdateUserEventLabelDto = CreateUserEventLabelDto & { id: string };

export interface UserEventFormDefaultValues {
  text: string;
  color: string;
}
