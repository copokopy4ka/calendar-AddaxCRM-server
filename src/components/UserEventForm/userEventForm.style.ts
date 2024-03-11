import { styled } from '@stitches/react';

export const UserEventsFormWrapper = styled('form', {
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

export const Subtitle = styled('h2', {
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: 0,
  fontWeight: 500,
  fontSize: '12px',
  color: '#999999',
});

export const SelectedLabelsWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
  minHeight: '10px',
});

export const SelectedLabelsItem = styled('div', {
  borderRadius: '4px',
  width: '50px',
  height: '10px',
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

export const DeleteButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f61919e8',
  width: '30px',
  height: '30px',
  borderRadius: '4px',
  padding: 0,
  transition: 'box-shadow 0.1s linear',

  '&:hover': {
    boxShadow: '0 0 4px 1px #f6191980',
  },

  '& svg': {
    width: '20px',
    height: '20px',
  },
});

export const FieldsWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  height: '100%',
  borderBottom: '1px solid #cccccc80',

  '&:before': {
    content: '""',
    position: 'absolute',
    top: '100%',
    width: '100%',
    left: 0,
    height: '1px',
    boxShadow: '0 -2px 7px 1px #cccccc80',
  },
});

export const DateTimeFieldsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '10px',
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

export const SelectLabelsTitle = styled('h2', {
  fontSize: '20px',
  fontWeight: 500,
  color: '#999999',
  margin: '0 0 20px',
});

export const LabelsListWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  maxHeight: '24vh',
  overflowY: 'auto',
  padding: '10px',
});

export const LabelItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  borderRadius: '4px',
  width: '100%',
  cursor: 'pointer',

  '&:hover .item-color-box': {
    boxShadow: '0 0 6px 1px rgb(0, 0, 0, 0.2)',
  },

  '&.selected .cancel-selection': {
    visibility: 'visible',
    opacity: 1,
    pointerEvents: 'initial',
  },
});

export const ColorBox = styled('div', {
  position: 'relative',
  borderRadius: '4px',
  width: '4vmax',
  maxWidth: '60px',
  height: '2vmax',
  maxHeight: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'box-shadow 0.1s linear',
});

export const CancelSelection = styled('button', {
  position: 'relative',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  padding: 0,
  visibility: 'hidden',
  opacity: 0,
  pointerEvents: 'none',

  '&:before, &::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translateY(-50%)',
    width: '16px',
    height: '1px',
    backgroundColor: '#00000099',
  },

  '&::after': {
    transform: 'translateY(-50%) rotate(45deg)',
  },

  '&::before': {
    transform: 'translateY(-50%) rotate(-45deg)',
  },
});

export const LabelItemText = styled('div', {
  maxWidth: '16vw',
});

export const NoLabelsText = styled('div', {
  color: '#999999',
  textAlign: 'center',
  marginTop: '60px',
  lineHeight: '1.4',
});
