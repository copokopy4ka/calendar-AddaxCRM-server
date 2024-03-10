import { FC } from 'react';
import { ReactComponent as DownloadFileIcon } from 'assets/download-file-icon.svg';
import clsx from 'clsx';
import { Button, ButtonText, ButtonIcon } from '../actionButtons.style';

interface DownloadJsonButtonProps {
  handleDownloadCalendarData: () => void;
}

export const DownloadJsonButton: FC<DownloadJsonButtonProps> = ({ handleDownloadCalendarData }) => {
  return (
    <Button onClick={handleDownloadCalendarData}>
      <ButtonIcon>
        <DownloadFileIcon />
      </ButtonIcon>
      <ButtonText className={clsx('action-buttons-text')}>Download Json</ButtonText>
    </Button>
  );
};
