import { styled } from '@stitches/react';

export const LabelsModalContent = styled('div', {
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
