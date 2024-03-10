import { styled } from '@stitches/react';

export const ModalContent = styled('div', {
  position: 'fixed',
  backgroundColor: '#ffffff',
  height: '50vh',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '10px',
  transition: 'transform 0.2s linear',
  transform: 'scale(0)',
  transformOrigin: 'top right',
  borderRadius: '10px',
  boxShadow: '0 0 10px 1px #cccccc80',

  '&.open': {
    transform: 'scale(1)',
  },
});

export const ArrowButtonsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 20px',
});

export const ArrowButton = styled('button', {
  borderRadius: '20px',
  width: '100%',
  padding: '10px 20px',
  border: '1px solid #cccccc80',
  fontWeight: 600,
  transition: 'border-color 0.1s linear, background-color 0.1s linear',

  '&.active': {
    borderColor: 'transparent',
    backgroundColor: '#2288dc80',
  },

  '&:hover': {
    borderColor: '#999999',
  },
});

export const ConfirmButton = styled('button', {
  display: 'block',
  textTransform: 'uppercase',
  margin: '0 10px 0 auto',
  width: '40px',
  height: '40px',
  color: '#2288dc',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  transition: 'color 0.2s linear, background-color 0.2s linear',

  '&:hover': {
    color: '#ffffff',
    backgroundColor: '#2288dc',
  },
});
