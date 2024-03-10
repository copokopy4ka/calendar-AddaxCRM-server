import { FC } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  ConfirmButton,
  HelperModalContentWrapper,
  HelperModalJsonExample,
  HelperModalSubtitle,
  HelperModalTextsWrapper,
  HelperModalTitle,
} from 'components/ActionButtons/actionButtons.style';
import clsx from 'clsx';
import { UPLOAD_DATA_STRUCTURE } from 'constants/upload-data-example';

interface UploadFileHelperModalProps {
  handleConfirmButton: () => void;
  handleClose: () => void;
  isOpen: boolean;
}

export const UploadFileHelperModal: FC<UploadFileHelperModalProps> = ({ handleConfirmButton, handleClose, isOpen }) => {
  return (
    <Modal id='upload-helper-modal' isOpen={isOpen} handleClose={handleClose}>
      <HelperModalContentWrapper className={clsx({ active: isOpen })}>
        <HelperModalTextsWrapper>
          <HelperModalTitle>
            The data to be saved must be in a file whose type is <span>.json</span>
          </HelperModalTitle>
          <HelperModalSubtitle>
            Also, be careful when entering data into the file. Here is an example of a data structure:
          </HelperModalSubtitle>
          <HelperModalJsonExample>
            <code>{JSON.stringify(UPLOAD_DATA_STRUCTURE, null, 2)}</code>
          </HelperModalJsonExample>
        </HelperModalTextsWrapper>
        <ConfirmButton onClick={handleConfirmButton}>upload</ConfirmButton>
      </HelperModalContentWrapper>
    </Modal>
  );
};
