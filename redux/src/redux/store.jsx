import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import React from 'react'

const store = configureStore({
    reducer:{
        counter: counterReducer
    }
});

export default store;