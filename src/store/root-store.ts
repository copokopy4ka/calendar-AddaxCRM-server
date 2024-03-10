import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './events-entity/reducer';
import labelsReducer from './labels-entity/reducer';

export const store = configureStore({
  reducer: {
    eventsStore: eventsReducer,
    labelsStore: labelsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
