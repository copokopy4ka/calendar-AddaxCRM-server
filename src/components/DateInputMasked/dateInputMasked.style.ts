import { styled } from '@stitches/react';

export const DateInputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  position: 'relative',

  '&.error': {
    '&.label': {
      color: '#f61919e8',
    },

    '.fake-input-border, .fake-input-border::after': {
      backgroundColor: '#f61919e8',
    },
  },

  '& .input': {
    position: 'relative',

    '&::placeholder': {
      color: '#999999',
    },

    '&:focus + .fake-input-border::after': {
      transform: 'rotateY(0)',
    },
    '&:focus ~ .fake-input-border::after': {
      transform: 'rotateY(0)',
    },
  },
});

export const Label = styled('label', {
  cursor: 'pointer',
  width: 'fit-content',
  color: '#999999',
  fontSize: '12px',
});

export const FakeInputBorder = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '1px',
  left: 0,
  top: '100%',
  backgroundColor: '#cccccc80',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '1px',
    left: 0,
    top: 0,
    backgroundColor: '#2288dc',
    transition: 'transform 0.2s linear',
    transform: 'rotateY(90deg)',
    transformOrigin: 'left',
    zIndex: 2,
  },
});

export const ErrorMessage = styled('p', {
  position: 'absolute',
  left: 0,
  top: 'calc(100% + 4px)',
  color: '#f61919e8',
  fontSize: '12px',
});
