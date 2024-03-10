export const API = {
  // Calendar events
  EVENTS: '/api/events',
  HOLIDAYS: 'api/v3/NextPublicHolidaysWorldwide',
  EVENTS_CREATE: '/api/events/create',
  EVENTS_UPDATE: '/api/events/update',
  EVENTS_UPDATE_SEQUENCE_NUM: '/api/events/update-sequence-num',
  EVENTS_BY_ID: (id: string) => `/api/events/${id}`,
  EVENTS_DOWNLOAD: '/api/events/download',
  EVENTS_UPLOAD: '/api/events/upload',
  // Events labels
  EVENTS_LABELS: '/api/labels',
  EVENTS_LABELS_CREATE: '/api/labels/create',
  EVENTS_LABELS_UPDATE: '/api/labels/update',
  //User
  USER_CREATE: '/api/user/create',
};
