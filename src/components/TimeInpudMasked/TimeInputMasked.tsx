import clsx from 'clsx';
import { FC, ForwardedRef, forwardRef, useCallback, useRef } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { isValidTimeInput } from 'utils/helpers';
import { ReactComponent as ClockIcon } from 'assets/clock-icon.svg';
import { TimePickerModal } from 'components/TimeInpudMasked/TimePickerModal/TimePickerModal';
import { useModal } from 'shared/hooks/useModal';
import {
  ErrorMessage,
  FakeInputBorder,
  Label,
  TimeInputWrapper,
} from 'components/TimeInpudMasked/timeInputMasked.style';

interface TimeInputMaskedProps {
  name: string;
  control: Control<FieldValues, any>;
  errorMessage: string;
  handleChangeTime: (timeValue: string) => void;
}

export const TimeInputMasked: FC<TimeInputMaskedProps> = forwardRef(
  ({ name, control, errorMessage, handleChangeTime }, ref: ForwardedRef<HTMLInputElement>) => {
    const { open: openTimeModal, close: closeTimeModal, isOpen: isOpenTimeModal } = useModal();
    const timeInputBlockRef = useRef(null);

    const validateChange = useCallback((value: string, prevValue: string) => {
      if (value.length === 3 && value.at(-1) !== ':') {
        value = `${value.slice(0, 2)}:${value.slice(2)}`;
      }

      if (isValidTimeInput(value)) {
        return value;
      } else {
        return prevValue;
      }
    }, []);

    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => {
          return (
            <TimeInputWrapper ref={timeInputBlockRef} className={clsx({ error: !!errorMessage })}>
              <Label className={clsx('label')} htmlFor={name}>
                Begin time
              </Label>
              <input
                id={name}
                value={value}
                onChange={(e) => {
                  onChange(validateChange(e.target.value, value));
                }}
                className={clsx('input')}
                placeholder='--:--'
                ref={ref}
                maxLength={5}
                autoComplete='off'
              />
              <ClockIcon className={clsx('end-icon')} onClick={openTimeModal} />
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              <FakeInputBorder className={clsx('fake-input-border')} />
              <TimePickerModal
                anchorEl={timeInputBlockRef.current}
                isOpen={isOpenTimeModal}
                handleClose={closeTimeModal}
                handleChangeTime={handleChangeTime}
              />
            </TimeInputWrapper>
          );
        }}
      />
    );
  }
);
