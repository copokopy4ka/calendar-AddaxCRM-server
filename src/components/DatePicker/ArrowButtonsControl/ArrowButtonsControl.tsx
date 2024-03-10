import { FC } from 'react';
import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from 'assets/arrow-icon.svg';
import { useArrowButtonsControl } from 'shared/hooks/useArrowButtonsControl';
import { ArrowButtonsWrapper, Button, Text } from 'components/DatePicker/ArrowButtonsControl/arrowButtonsControl.style';

interface ArrowButtonsControlProps {
  handleOpenModal: () => void;
}

export const ArrowButtonsControl: FC<ArrowButtonsControlProps> = ({ handleOpenModal }) => {
  const { dateText, handlePrevButtonClick, handleNextButtonClick } = useArrowButtonsControl();

  return (
    <ArrowButtonsWrapper>
      <Button onClick={handlePrevButtonClick} className={clsx('left')}>
        <ArrowIcon />
      </Button>
      <Text onClick={handleOpenModal}>{dateText}</Text>
      <Button onClick={handleNextButtonClick} className={clsx('right')}>
        <ArrowIcon />
      </Button>
    </ArrowButtonsWrapper>
  );
};
