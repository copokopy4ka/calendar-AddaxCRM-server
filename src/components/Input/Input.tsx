import { FC, ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { ReactComponent as BrushIcon } from 'assets/brush-icon.svg';
import { HELPER_TEXT } from 'constants/helperElementTexts';
import {
  EndButton,
  ErrorMessage,
  FakeInputBorder,
  InputComponent,
  InputWrapper,
  Label,
} from 'components/Input/input.style';

interface InputProps {
  placeholder?: string;
  label: string;
  name: string;
  control: Control<FieldValues, any>;
  errorMessage?: string;
  handleAdornment?: () => void;
}

export const Input: FC<InputProps> = forwardRef(
  ({ placeholder, label, errorMessage, name, control, handleAdornment }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <InputWrapper className={clsx({ error: !!errorMessage })}>
            <Label className={clsx('input-label')} htmlFor={name}>
              {label}
            </Label>
            <InputComponent
              id={name}
              multiple
              value={value}
              onChange={onChange}
              placeholder={placeholder || ''}
              ref={ref}
              autoComplete='off'
            />
            {handleAdornment && (
              <EndButton
                title={HELPER_TEXT.CLEAR_TITLE}
                onClick={handleAdornment}
                type='button'
                className={clsx('input__end-button')}
              >
                <BrushIcon />
              </EndButton>
            )}
            {errorMessage && <ErrorMessage className={clsx('input__error-message')}>{errorMessage}</ErrorMessage>}
            <FakeInputBorder className={clsx('fake-input-border')} />
          </InputWrapper>
        )}
      />
    );
  }
);
