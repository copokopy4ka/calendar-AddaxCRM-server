import { styled } from '@stitches/react';

export const ActionButtonsWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  padding: '0 4px',
  gap: '4px',
});

export const Button = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  border: '1px solid transparent',
  transition: 'transform 0.2s ease-out',
  cursor: 'pointer',

  '&:hover .action-buttons-text': {
    transform: 'rotateX(0) translateX(-50%)',
  },
});

export const Input = styled('input', {
  position: 'absolute',
  top: 0,
  left: 0,
  visibility: 'hidden',
  width: '0.1px',
  height: '0.1px',
  opacity: 0,
});

export const ButtonText = styled('div', {
  position: 'absolute',
  whiteSpace: 'nowrap',
  fontSize: '12px',
  top: '90%',
  left: '50%',
  pointerEvents: 'none',
  backgroundColor: '#eeeff1',
  transition: 'transform 0.2s linear',
  transformOrigin: 'top',
  transform: 'rotateX(90deg) translateX(-50%)',
});

export const ButtonIcon = styled('div', {
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& svg': {
    width: '30px',
    minWidth: '30px',
    height: '30px',
  },
});

export const HelperModalContentWrapper = styled('div', {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-48%, -52%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  zIndex: 3,
  backgroundColor: '#ffffff',
  height: '90vh',
  width: '50vw',
  maxWidth: '500px',
  maxHeight: '900px',
  padding: '50px 30px 30px',
  borderRadius: '10px',
  boxShadow: '0 0 10px 1px #cccccc80',
  opacity: 0,
  visibility: 'hidden',
  transition: 'transform 0.15s linear, opacity 0.15s linear, visibility 0.15s linear',

  '&.active': {
    transform: 'translate(-50%, -50%)',
    opacity: 1,
    visibility: 'visible',
  },
});

export const ConfirmButton = styled('button', {
  width: 'fit-content',
  margin: '0 auto',
  backgroundColor: '#333333',
  color: '#ffffff',
  textTransform: 'uppercase',
  padding: '8px 16px',
  borderRadius: '4px',
  fontSize: '12px',
  transition: 'box-shadow 0.1s linear, background-color 0.2s linear',

  '&:hover': {
    boxShadow: '0 0 4px 1px #999999',
  },
});

export const HelperModalTextsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const HelperModalTitle = styled('div', {
  maxWidth: '80%',
  margin: '0 auto',
  color: '#333333',
  borderRadius: '4px',
  fontSize: '22px',
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: '60px',

  '& span': {
    fontSize: '24px',
  },
});

export const HelperModalSubtitle = styled('div', {
  maxWidth: '90%',
  color: '#666666',
  borderRadius: '4px',
  fontSize: '16px',
  marginBottom: '20px',
  letterSpacing: '1px',
});

export const HelperModalJsonExample = styled('pre', {
  lineHeight: 1.5,
  fontWeight: 600,
  margin: 0,
  borderRight: '1px solid #999999',
});
