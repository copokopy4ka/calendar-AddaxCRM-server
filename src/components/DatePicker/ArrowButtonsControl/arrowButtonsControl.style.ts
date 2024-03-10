import { styled } from '@stitches/react';

export const ArrowButtonsWrapper = styled('div', {
  minWidth: '200px',
  display: 'flex',
  gap: '4px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Button = styled('button', {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  padding: '8px',
  backgroundColor: 'transparent',
  transition: 'background-color 0.2s linear',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#cccccc80',
  },
  '&.left': {
    transform: 'rotate(90deg)',
  },
  '&.right': {
    transform: 'rotate(-90deg)',
  },
});

export const Text = styled('button', {
  position: 'relative',
  lineHeight: 1,
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: '100%',
    height: '2px',
    background: '#cccccc80',
    transform: 'rotateY(-90deg)',
    transformOrigin: 'left',
    transition: 'transform 0.4s ease-out',
  },
  ' &:hover': {
    background: 'transparent',
    '&:before': {
      transform: 'rotateY(0)',
    },
  },
});
