import { FC } from 'react';
import clsx from 'clsx';
import { Input } from 'components/Input/Input';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { ERROR_MESSAGES } from 'constants/error-messages';
import { UserEventLabel } from 'core/types/events-labels.type';
import { useUserEventLabelsForm } from 'shared/hooks/useUserEventLabelsForm';
import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import {
	BottomButtonsWrapper,
  CloseButton,
  ContentHeader,
  ContentWrapper,
  EventLabelFormComponent,
  FieldsWrapper,
  SelectedColor,
  SubmitButton,
  Title,
} from 'components/EventLabelForm/EventLabelForm/eventLabelForm.style';

interface EventLabelFormProps {
  isOpen: boolean;
  onSubmit: SubmitHandler<FieldValues>;
  handleClose: () => void;
  labelData: UserEventLabel | null;
  selectedColor: string;
  handleSelectedColor: (color: string) => void;
}

export const EventLabelForm: FC<EventLabelFormProps> = ({
  onSubmit,
  labelData,
  handleClose,
  isOpen,
  selectedColor,
  handleSelectedColor,
}) => {
  const { handleSubmit, getErrorMessage, register, errors, control, isDisabledSubmitButton, title } =
    useUserEventLabelsForm(isOpen, labelData);

  return (
    <EventLabelFormComponent onSubmit={handleSubmit(onSubmit)} className={clsx({ active: isOpen })}>
      <ContentWrapper>
        <ContentHeader>
          <Title>{title}</Title>
          <CloseButton onClick={handleClose} type='button' />
        </ContentHeader>
        <SelectedColor style={{ background: selectedColor }} />
        <FieldsWrapper>
          <Input
            errorMessage={getErrorMessage(errors, 'text')}
            {...register('text', {
              required: ERROR_MESSAGES.REQUIRED_FIELD,
              minLength: { value: 3, message: ERROR_MESSAGES.MIN_LENGTH },
            })}
            label='Title *'
            placeholder='Title goes here'
            control={control}
          />
        </FieldsWrapper>
        <ColorPicker color={selectedColor} handleSelectedColor={handleSelectedColor} />
        <BottomButtonsWrapper>
          <SubmitButton disabled={isDisabledSubmitButton} type='submit'>
            save
          </SubmitButton>
        </BottomButtonsWrapper>
      </ContentWrapper>
    </EventLabelFormComponent>
  );
};
