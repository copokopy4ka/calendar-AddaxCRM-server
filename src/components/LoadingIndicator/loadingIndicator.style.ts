import { keyframes, styled } from '@stitches/react';

export const LoadingIndicatorWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1111,
  backdropFilter: 'blur(3px)',
  display: 'none',

  '&.active': {
    display: 'block',
  },
});

const spinnerAnimation = keyframes({
  '0%': {
    transform: 'translate(-50%, -50%) rotate(-360deg)',
  },
  '100%': {
    transform: 'translate(-50%, -50%) rotate(0)',
  },
});

export const Spinner = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '60px',
  height: '60px',
  transform: 'translate(-50%, -50%)',
  border: '6px solid #2288dc',
  borderLeftColor: 'transparent',
  borderRadius: '50%',
  animation: `${spinnerAnimation} 1s linear infinite`,
});
