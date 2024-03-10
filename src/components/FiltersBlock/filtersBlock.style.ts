import { styled } from '@stitches/react';

export const FiltersBlockWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

export const ApplyButton = styled('button', {
  height: 'fit-content',
  backgroundColor: '#2288dc',
  padding: '6px 20px',
  borderRadius: '10px',
  boxShadow: '-1px 1px 4px 1px #999999',
  fontSize: '16px',
  color: '#ffffff',
  transition: 'box-shadow 0.1s linear',

  '&:hover': {
    boxShadow: '-1px 1px 8px 2px #999999',
  },
});
