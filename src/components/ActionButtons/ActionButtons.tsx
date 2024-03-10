import { ChangeEvent, FC, useRef } from 'react';
import { DownloadJsonButton } from './DownloadJsonButton/DownloadJsonButton';
import { DownloadScreenshotButton } from './DownloadScreenshotButton/DownloadScreenshotButton';
import { UploadJsonButton } from './UploadJsonButton/UploadJsonButton';
import { ActionButtonsWrapper } from './actionButtons.style';
import { UploadFileHelperModal } from './UploadJsonButton/UploadFileHelperModal/UploadFileHelperModal';
import { useModal } from 'shared/hooks/useModal';

interface ActionButtonsProps {
  handleDownloadCalendarData: () => void;
  handleUploadCalendarData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ActionButtons: FC<ActionButtonsProps> = ({ handleDownloadCalendarData, handleUploadCalendarData }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { close, open, isOpen } = useModal();

  const handleUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
			close();
    }
  };

  return (
    <ActionButtonsWrapper>
      <DownloadScreenshotButton />
      <UploadJsonButton
        handleUploadCalendarData={handleUploadCalendarData}
        inputRef={inputRef}
        handleOpenModal={open}
      />
      <DownloadJsonButton handleDownloadCalendarData={handleDownloadCalendarData} />
      <UploadFileHelperModal handleClose={close} isOpen={isOpen} handleConfirmButton={handleUpload} />
    </ActionButtonsWrapper>
  );
};
