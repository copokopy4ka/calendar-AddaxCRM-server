import { styled } from '@stitches/react';

export const LabelsPickerWrapper = styled('div', {
  position: 'relative',
  width: '240px',
  cursor: 'pointer',
  borderRadius: '4px',
  padding: '4px 30px 4px 8px',
  border: '1px solid #99999980',
  transition: 'border-color 0.1s linear',
  minHeight: '36px',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    border: '1px solid #999999',
  },
});

export const Placeholder = styled('div', {
  width: '100%',
  color: '#999999aa',
});

export const ClearLabelsButton = styled('div', {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg': {
    width: '16px',
    height: '16px',

    '& g': {
      transition: 'fill 0.1s linear, stroke 0.1s linear',
    },
  },

  '&:hover': {
    '& svg g': {
      stroke: 'red',
      fill: 'rgb(197, 120, 120)',
    },
  },
});

export const SelectedItemsList = styled('div', {
  width: '100%',
  maxWidth: '240px',
  minHeight: '20px',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '6px',
});

export const SelectedItem = styled('div', {
  width: '30px',
  height: '10px',
  borderRadius: '4px',
});
