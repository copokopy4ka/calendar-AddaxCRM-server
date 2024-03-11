import { Dispatch, FC, SetStateAction, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { Input } from 'components/Input/Input';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useUserEventForm } from 'shared/hooks/useUserEventForm';
import { UserEvent } from 'core/types/events.type';
import { DateInputMasked } from 'components/DateInputMasked/DateInputMasked';
import { TimeInputMasked } from 'components/TimeInpudMasked/TimeInputMasked';
import { ERROR_MESSAGES } from 'constants/error-messages';
import { ReactComponent as DeleteIcon } from 'assets/trash-icon.svg';
import { MonthActiveDay } from 'core/types/calendar.type';
import { useSelector } from 'react-redux';
import { selectorGetLabels } from 'store/labels-entity/selectors';
import {
  BottomButtonsWrapper,
  CancelSelection,
  CloseButton,
  ColorBox,
  ContentHeader,
  ContentWrapper,
  DateTimeFieldsWrapper,
  DeleteButton,
  FieldsWrapper,
  LabelItem,
  LabelItemText,
  LabelsListWrapper,
  NoLabelsText,
  SelectLabelsTitle,
  SelectedLabelsItem,
  SelectedLabelsWrapper,
  SubmitButton,
  Subtitle,
  Title,
  UserEventsFormWrapper,
} from 'components/UserEventForm/userEventForm.style';

interface UserEventFormProps {
  isOpen: boolean;
  onSubmit: SubmitHandler<FieldValues>;
  handleClose: () => void;
  userEventData: UserEvent | null;
  handleDeleteEvent: (id: string) => void;
  selectedDay: MonthActiveDay;
  selectedLabels: string[];
  setSelectedLabels: Dispatch<SetStateAction<string[]>>;
}

export const UserEventForm: FC<UserEventFormProps> = ({
  onSubmit,
  userEventData,
  handleClose,
  isOpen,
  handleDeleteEvent,
  selectedDay,
  selectedLabels,
  setSelectedLabels,
}) => {
  const allLabels = useSelector(selectorGetLabels);
  const {
    handleSubmit,
    getErrorMessage,
    register,
    errors,
    control,
    handleClearTitle,
    handleChangeTime,
    subtitle,
    isDisabledSubmitButton,
    title,
  } = useUserEventForm(isOpen, userEventData, selectedDay);

  const handleAddLabel = useCallback(
    (labelId: string) => {
      if (!selectedLabels.includes(labelId)) {
        setSelectedLabels((prev) => [...prev, labelId]);
      }
    },
    [selectedLabels, setSelectedLabels]
  );

  const handleCancelLabelSelection = (labelId: string) => {
    setSelectedLabels((prev) => prev.filter((el) => el !== labelId));
  };

  const handleDeleteButtonClick = useCallback(() => {
    userEventData && handleDeleteEvent(userEventData.id);
    handleClose();
  }, [handleClose, handleDeleteEvent, userEventData]);

  useEffect(() => {
    if (userEventData) {
      setSelectedLabels(userEventData.labels);
    }
  }, [setSelectedLabels, userEventData]);

  return (
    <UserEventsFormWrapper onSubmit={handleSubmit(onSubmit)} className={clsx({ active: isOpen })}>
      <ContentWrapper>
        <ContentHeader>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <CloseButton onClick={handleClose} type='button' />
        </ContentHeader>
        <SelectedLabelsWrapper>
          {selectedLabels.map((labelId) => (
            <SelectedLabelsItem
              key={labelId}
              style={{ background: allLabels.find((label) => label.id === labelId)?.color }}
            />
          ))}
        </SelectedLabelsWrapper>
        <FieldsWrapper>
          <Input
            errorMessage={getErrorMessage(errors, 'title')}
            {...register('title', {
              required: ERROR_MESSAGES.REQUIRED_FIELD,
              minLength: { value: 3, message: ERROR_MESSAGES.MIN_LENGTH },
            })}
            label='Title *'
            placeholder='Title goes here'
            control={control}
            handleAdornment={handleClearTitle}
          />
          <DateTimeFieldsWrapper>
            <DateInputMasked
              errorMessage={getErrorMessage(errors, 'date')}
              control={control}
              {...register('date', {
                required: ERROR_MESSAGES.REQUIRED_FIELD,
                minLength: {
                  value: 10,
                  message: ERROR_MESSAGES.INCORRECT_DATE,
                },
              })}
            />
            <TimeInputMasked
              errorMessage={getErrorMessage(errors, 'time')}
              control={control}
              {...register('time', {
                minLength: { value: 5, message: ERROR_MESSAGES.INCORRECT_TIME },
              })}
              handleChangeTime={handleChangeTime}
            />
          </DateTimeFieldsWrapper>
          <div>
            <SelectLabelsTitle>Select Labels</SelectLabelsTitle>
            <LabelsListWrapper>
              {allLabels.length > 0 ? (
                allLabels.map(({ color, id, text }) => (
                  <LabelItem
                    key={id}
                    onClick={() => handleAddLabel(id)}
                    className={clsx({ selected: selectedLabels.includes(id) })}
                  >
                    <ColorBox className={clsx('item-color-box')} style={{ background: color }}>
                      <CancelSelection
                        onClick={() => handleCancelLabelSelection(id)}
                        type='button'
                        className={clsx('cancel-selection')}
                      />
                    </ColorBox>
                    <LabelItemText style={{ color: color }}>{text}</LabelItemText>
                  </LabelItem>
                ))
              ) : (
                <NoLabelsText>No created labels yet. To add label, You should create one first</NoLabelsText>
              )}
            </LabelsListWrapper>
          </div>
        </FieldsWrapper>
        <BottomButtonsWrapper>
          {userEventData && (
            <DeleteButton onClick={handleDeleteButtonClick} type='button'>
              <DeleteIcon />
            </DeleteButton>
          )}
          <SubmitButton disabled={isDisabledSubmitButton} type='submit'>
            save
          </SubmitButton>
        </BottomButtonsWrapper>
      </ContentWrapper>
    </UserEventsFormWrapper>
  );
};
