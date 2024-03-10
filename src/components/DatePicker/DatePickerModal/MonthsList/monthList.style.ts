import { styled } from '@stitches/react';

export const MonthListWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  height: '100%',
  overflow: 'auto',
  padding: '0 10px',
});

export const MonthItem = styled('button', {
  border: '1px solid #cccccc80',
  padding: '10px 18px',
  borderRadius: '10px',
  transition: 'border-color 0.1s linear, background-color 0.1s linear',
  fontSize: '16px',

  '&:hover': {
    borderColor: '#999999',
  },

  '&.active': {
    backgroundColor: '#cccccc80',
    borderColor: '#999999',
  },
});
