import html2canvas from 'html2canvas';
import { ReactComponent as DownloadScreenIcon } from 'assets/download-screen-icon.svg';
import clsx from 'clsx';
import { Button, ButtonText, ButtonIcon } from '../actionButtons.style';

export const DownloadScreenshotButton = () => {
  const takeScreenshotAndDownload = () => {
    const screenShotTarget = document.body.querySelector('#root') as HTMLElement;
    if (screenShotTarget) {
      html2canvas(screenShotTarget).then((canvas) => {
        const image = canvas.toDataURL('image/png', 1.0);

        const link = document.createElement('a');
        link.href = image;
        link.download = 'screenshot.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  return (
    <Button onClick={takeScreenshotAndDownload}>
      <ButtonIcon>
        <DownloadScreenIcon />
      </ButtonIcon>
      <ButtonText className={clsx('action-buttons-text')}>Download Screenshot</ButtonText>
    </Button>
  );
};
