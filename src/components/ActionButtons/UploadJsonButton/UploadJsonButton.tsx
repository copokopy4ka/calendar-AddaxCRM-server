import { ChangeEvent, FC, RefObject } from 'react';
import { ReactComponent as UploadFileIcon } from 'assets/upload-file-icon.svg';
import { Button, Input, ButtonText, ButtonIcon } from '../actionButtons.style';
import clsx from 'clsx';

interface UploadJsonButtonProps {
  handleUploadCalendarData: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOpenModal: () => void;
  inputRef: RefObject<HTMLInputElement>;
}

export const UploadJsonButton: FC<UploadJsonButtonProps> = ({
  handleUploadCalendarData,
  handleOpenModal,
  inputRef,
}) => {
  return (
    <Button onClick={handleOpenModal}>
      <Input ref={inputRef} type='file' accept='.json' onChange={handleUploadCalendarData} />
      <ButtonIcon>
        <UploadFileIcon />
      </ButtonIcon>
      <ButtonText className={clsx('action-buttons-text')}>Upload Json</ButtonText>
    </Button>
  );
};
