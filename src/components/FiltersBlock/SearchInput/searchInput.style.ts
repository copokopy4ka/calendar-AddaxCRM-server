import { styled } from '@stitches/react';

export const SearchInputWrapper = styled('div', {
  position: 'relative',
  width: '240px',
  border: '1px solid #99999980',
  transition: 'border-color 0.1s linear',
  borderRadius: '4px',

  '&:hover': {
    border: '1px solid #999999',
  },
});

export const Input = styled('input', {
  padding: '4px 30px 4px 10px',
  minHeight: '36px',

  '&::placeholder': {
    color: '#99999980',
  },
});

export const ClearTextButton = styled('button', {
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
