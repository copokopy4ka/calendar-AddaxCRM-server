import { styled } from '@stitches/react';

export const Button = styled('button', {
  backgroundColor: '#2288dc',
  padding: '8px 30px',
  borderRadius: '10px',
  boxShadow: '-1px 1px 4px 1px #999999',
  fontSize: '16px',
  color: '#ffffff',
  transition: 'box-shadow 0.1s linear',

  '&:hover': {
    boxShadow: '-1px 1px 8px 2px #999999',
  },
});
