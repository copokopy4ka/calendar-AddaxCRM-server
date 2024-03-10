import { styled } from '@stitches/react';

export const ModalBackdrop = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 2,
  backgroundColor: '#00ffff0d',
  backdropFilter: 'blur(4px)',
  visibility: 'hidden',
  opacity: 0,
  transition: 'visibility 0.4s linear, opacity 0.4s linear',
  '&.open': {
    visibility: 'visible',
    opacity: 1,
  },
});
