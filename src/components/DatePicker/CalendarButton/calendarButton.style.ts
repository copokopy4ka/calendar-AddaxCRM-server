import { styled } from '@stitches/react';

export const Button = styled('button', {
  padding: '4px 10px',
  border: '1px solid #cccccc80',
  borderRadius: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'box-shadow 0.2s linear',
  '&:hover': {
    boxShadow: '0 0 1px 1px #cccccc80',
  },
});
