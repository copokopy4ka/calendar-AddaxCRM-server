import { keyframes, styled } from '@stitches/react';

export const HolidaysWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  height: '20px',
  width: '48%',
  backgroundColor: '#ffffff',
  cursor: 'pointer',
  padding: '20px 4px 4px',
  borderRadius: '4px',
  transition: 'width 0.3s ease-out 0.5s, height 0.4s ease-out',
  overflow: 'hidden',
  boxShadow: '0 0 6px 1px #99999940',

  '&.active': {
    transition: 'width 0.3s ease-out, height 0.4s ease-out 0.5s',
    width: '100%',
    height: '100%',

    '.arrow-icon': {
      animationPlayState: 'running',
      '& svg': {
        transform: 'rotate(180deg)',
      },
    },
  },

  '&:hover': {
    '.arrow-icon': {
      animationPlayState: 'running',
    },
  },
});

export const TitleWrapper = styled('div', {
  position: 'absolute',
  width: '6vw',
  top: '2px',
  right: '2px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  padding: '0 4px',
});

export const Title = styled('div', {
  fontSize: '14px',
  color: '#7e878b',
  fontWeight: 500,
});

export const HolidaysList = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '0 4px',
  marginTop: '8px',
  maxHeight: '12.5vh',
  overflowY: 'auto',

  '&.small': {
    maxHeight: '9.5vh',
  },
});

export const HolidaysListItem = styled('div', {
  borderBottom: '1px solid #7e878b',
  padding: '0 0 4px',

  '&:last-child': {
    border: 'none',
  },
});

const arrowAnimation = keyframes({
  '0%': {
    transform: 'translateY(-5%)',
  },
  '50%': {
    transform: 'translateY(10%)',
  },
  '100%': {
    transform: 'translateY(-5%)',
  },
});

export const ArrowIcon = styled('div', {
  animation: `${arrowAnimation} 1s ease-in-out infinite alternate`,
  animationPlayState: 'paused',

  '& svg': {
    width: '10px',
    height: '10px',
    transition: 'transform 0.3s linear',
  },
});
