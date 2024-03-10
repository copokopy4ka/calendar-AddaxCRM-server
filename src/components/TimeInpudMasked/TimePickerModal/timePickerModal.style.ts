import { styled } from '@stitches/react';

export const TimeModalContent = styled('div', {
  position: 'fixed',
  backgroundColor: '#ffffff',
  height: '42vh',
  maxHeight: '280px',
  width: '180px',
  padding: '10px',
  zIndex: 5,
  transition: 'transform 0.15s linear',
  transform: 'scale(0)',
  borderRadius: '4px',
  boxShadow: '0 0 10px 1px #cccccc80',

  '&.open': {
    transform: 'scale(1)',
  },
});

export const TitleWrapper = styled('div', {
  margin: '0 auto',
  width: '80%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '4px',
  borderBottom: '1px solid #cccccc80',
});

export const ListsWrapper = styled('div', {
  height: '75%',
  width: '100%',
  display: 'grid',
  gridTemplateRows: '1fr',
  gridTemplateColumns: '1fr 1fr',
  gap: '4px',
  borderRadius: '4px',
  marginBottom: '10px',
});

export const ConfirmButton = styled('button', {
  textTransform: 'uppercase',
  display: 'block',
  margin: '0 auto',
  width: '60%',
  height: '30px',
  color: '#2288dc',
  backgroundColor: '#ffffff',
  borderRadius: '4px',
  transition: 'color 0.2s linear, background-color 0.2s linear',

  '&:hover': {
    color: '#ffffff',
    backgroundColor: '#2288dc',
  },
});

export const TimePickerListWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  height: '100%',
  width: '100%',
  overflow: 'auto',
  padding: '0 4px',
});

export const TimePickerListItem = styled('button', {
  border: '1px solid #cccccc80',
  padding: '4px 8px',
  borderRadius: '4px',
  transition: 'border-color 0.1s linear, background-color 0.1s linear',

  '&:hover': {
    borderColor: '#999999',
  },

  '&.active': {
    backgroundColor: '#cccccc80',
    borderColor: '#999999',
  },
});
