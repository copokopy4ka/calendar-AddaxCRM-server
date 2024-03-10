import { styled } from '@stitches/react';

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
  padding: '4px 24px 4px 0',

  '&.error': {
    '.input-label': {
      color: '#f61919e8',
    },

    '.fake-input-border, .fake-input-border::after': {
      backgroundColor: '#f61919e8',
    },
  },
});

export const Label = styled('label', {
  cursor: 'pointer',
  width: 'fit-content',
  color: '#999999',
  fontSize: '12px',
});

export const InputComponent = styled('input', {
  position: 'relative',
  '&::placeholder': {
    color: '#999999',
  },

  '&:focus + .fake-input-border::after, &:focus ~ .fake-input-border::after': {
    transform: 'rotateY(0)',
  },
});

export const ErrorMessage = styled('p', {
  position: 'absolute',
  left: '0px',
  top: 'calc(100% + 4px)',
  color: '#f61919e8',
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

export const EndButton = styled('button', {
  padding: '2px',
  width: '22px',
  height: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: 0,
  bottom: '5px',
  border: '1px solid transparent',
  borderRadius: '4px',
  transition: 'border-color 0.1s linear',

  '& svg': {
    width: '18px',
    height: '18px',
  },
  '&:hover': {
    borderColor: '#999999',
  },
});
