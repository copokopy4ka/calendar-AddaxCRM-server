import { styled } from '@stitches/react';

export const EventLabelFormComponent = styled('form', {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-52%, -52%)',
  zIndex: 3,
  backgroundColor: '#ffffff',
  height: '90vh',
  width: '50vw',
  maxWidth: '500px',
  maxHeight: '900px',
  padding: '30px',
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

  '& .sketch-picker': {
    width: '60% !important',
    margin: '0 auto 40px !important',

    '& .saturation-white div:last-child div': {
      width: '10px !important',
      height: '10px !important',
    },

    '& .flexbox-fix:nth-of-type(2) div:last-child div': {
      boxShadow: 'none !important',
    },
  },
});

export const ContentWrapper = styled('div', {
  height: '100%',
  borderTop: '1px solid #cccccc80',
  borderBottom: '1px solid #cccccc80',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const ContentHeader = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
});

export const Title = styled('h2', {
  fontWeight: 500,
});

export const FieldsWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  height: '100%',
});

export const CloseButton = styled('button', {
  position: 'relative',
  width: '26px',
  height: '26px',
  padding: 0,
  borderRadius: '4px',
  border: '1px solid transparent',
  transition: 'border-color 0.2s linear',

  '&:before, &::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translateY(-50%)',
    width: '90%',
    height: '2px',
    backgroundColor: '#999999',
    transition: 'background-color 0.2s linear',
  },

  '&::after': {
    transform: 'translateY(-50%) rotate(45deg)',
  },

  '&::before': {
    transform: 'translateY(-50%) rotate(-45deg)',
  },

  '&:hover': {
    border: '1px solid #999999',
    '&:after, &:before': {
      backgroundColor: '#333333,',
    },
  },
});

export const SelectedColor = styled('div', {
  borderRadius: '4px',
  width: '50px',
  height: '10px',
  minHeight: '10px',
});

export const BottomButtonsWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10px',
  padding: '0 20px',
});

export const SubmitButton = styled('button', {
  backgroundColor: '#333333',
  color: '#ffffff',
  textTransform: 'uppercase',
  padding: '8px 16px',
  borderRadius: '4px',
  fontSize: '12px',
  transition: 'box-shadow 0.1s linear, background-color 0.2s linear',

  '&:disabled': {
    backgroundColor: '#cccccc80',
    color: '#999999',
    pointerEvents: 'none',
  },

  '&:hover': {
    boxShadow: '0 0 4px 1px #999999',
  },
});
