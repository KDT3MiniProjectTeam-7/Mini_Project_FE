import { createSlice } from '@reduxjs/toolkit';

const autosave = createSlice({
  name: 'autosave',
  initialState: { isToggleTrue: true },
  reducers: {
    toggle(state) {
      state.isToggleTrue = !state.isToggleTrue;
    },
  },
});

export const { toggle } = autosave.actions;
export default autosave;
