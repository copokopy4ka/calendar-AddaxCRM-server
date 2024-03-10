import { FC, ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import {
  DateInputWrapper,
  ErrorMessage,
  FakeInputBorder,
  Label,
} from 'components/DateInputMasked/dateInputMasked.style';

interface DateInputMaskedProps {
  name: string;
  control: Control<FieldValues, any>;
  errorMessage: string;
}

export const DateInputMasked: FC<DateInputMaskedProps> = forwardRef(
  ({ name, errorMessage, control }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <DateInputWrapper className={clsx('date-input', { error: !!errorMessage })}>
            <Label className={clsx('label')} htmlFor={name}>
              Date *
            </Label>
            <IMaskInput
              mask={Date}
              min={new Date(1900, 0, 1)}
              max={new Date(2100, 0, 1)}
              autofix
              id={name}
              value={value}
              onAccept={onChange}
              className={clsx('input')}
              placeholder='--.--.----'
              ref={ref}
              autoComplete='off'
            />
            {errorMessage && <ErrorMessage className={clsx('error-message')}>{errorMessage}</ErrorMessage>}
            <FakeInputBorder className={clsx('fake-input-border')} />
          </DateInputWrapper>
        )}
      />
    );
  }
);
