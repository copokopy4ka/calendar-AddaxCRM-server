import { styled } from '@stitches/react';

export const LabelsListWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  height: '100%',
  overflow: 'auto',
  padding: '0 4px',
});

export const LabelsListItem = styled('div', {
  position: 'relative',
  border: '1px solid #cccccc80',
  padding: '10px 40px 10px 50px',
  borderRadius: '10px',
  transition: 'border-color 0.1s linear, background-color 0.1s linear',
  fontSize: '16px',
  cursor: 'pointer',

  '&:hover': {
    borderColor: '#999999',
  },

  '&.active': {
    '.fake-background': {
      opacity: '0.3',
    },
  },
});

export const ItemText = styled('div', {
  maxWidth: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const ItemNoLabelsText = styled('div', {
  color: '#999999',
  textAlign: 'center',
  marginTop: '60px',
  lineHeight: '1.4',
});

export const ItemColorBox = styled('div', {
  position: 'absolute',
  left: '10px',
  top: 0,
  transform: 'translateY(50%)',
  width: '20px',
  height: '20px',
  borderRadius: '4px',
});

export const FakeBackground = styled('div', {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  opacity: 0,
  zIndex: '-1',
  transition: 'opacity 0.2s linear',
});

export const EditButton = styled('button', {
  position: 'absolute',
  top: 0,
  right: '10px',
  transform: 'translateY(50%)',

  '&:hover svg': {
    transform: 'scale(1.2)',
  },

  '& svg': {
    width: '16px',
    height: '16px',
    opacity: '0.9',
    transition: 'transform 0.2s linear',
  },
});
