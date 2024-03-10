import { styled } from '@stitches/react';

export const DaysGrid = styled('main', {
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  height: '100%',
  width: '100%',

  '&.large': {
    gridTemplateRows: 'repeat(6, 1fr)',
  },
});

export const DayCard = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  gap: '4px',
  border: '3px solid #eeeff1',
  backgroundColor: '#e3e4e6',
  cursor: 'pointer',
  padding: '4px',
  borderRadius: '6px',
  transition: 'box-shadow 0.2s linear, background-color 0.2s linear',

  '&:hover': {
    boxShadow: '0 0 8px 1px #cccccc80 inset',
  },

  '&.disabled': {
    color: '#7e878b',
    pointerEvents: 'none',
    backgroundColor: '#99999911',

    '& .day-card-header': {
      fontWeight: 500,
    },
  },

  '&.active': {
    backgroundColor: '#0ce20c42',

    '&:hover': {
      boxShadow: 'none',
    },
  },
});

export const WeekDayName = styled('div', {
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#7e878b',
  fontWeight: 500,
});

export const DayCardHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  gap: '4px',
  width: '100%',
  fontWeight: '700',
});

export const DayEventsCounter = styled('div', {
  lineHeight: '1.2',
  fontSize: '14px',
  color: '#7e878b',
  fontWeight: 500,
});

export const EventsList = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'center',
  maxHeight: '12.5vh',
  overflowY: 'auto',
  '&.small': {
    maxHeight: '9.5vh',
  },
});

export const EventDragRef = styled('div', {
  width: '100%',
  margin: '0 auto',
  maxWidth: '12vw',

  '& > div': {
    width: '100%',
  },
});

export const EventItemWrapper = styled('div', {
  maxWidth: '12vw',
  width: '100%',
  padding: '0.4vmax',
  borderRadius: '4px',
  border: '1px solid transparent',
  transition: 'border-color 0.2s linear',
  backgroundColor: '#ffffff',

  '&:hover': {
    borderColor: '#999999',
  },

  '&.disabled': {
    opacity: '0.3',
    color: '#999999',
    pointerEvents: 'none',
  },
});

export const EventLabelsList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
  marginBottom: '6px',
});

export const EventLabelItem = styled('div', {
  borderRadius: ' 4px',
  width: '50px',
  height: '10px',
});

export const EventTitle = styled('div', {
  width: '100%',
  fontSize: '15px',
  fontWeight: 500,
});
