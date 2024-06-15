// store/store.js

import { configureStore } from '@reduxjs/toolkit';

// Example: create a simple slice
import counterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
