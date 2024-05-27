import { configureStore } from '@reduxjs/toolkit';
import  ThemeMode  from '../reducers/Theme';



export default configureStore({
  reducer: {
    mode: ThemeMode,
  },
});