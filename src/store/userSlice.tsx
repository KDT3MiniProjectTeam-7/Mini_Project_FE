import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface user {
  accessToken : string
  status: string;
  birthday: string;
  email: string;
  name: string;
  tags: string;
}

const userData = createSlice({
  name: 'user',
  initialState: [] as user[],
  reducers: {
    setUserItems(state, actions: PayloadAction<user>) {
        console.log(actions.payload)
        state.push(actions.payload) ;
    },
  },
});

export const { setUserItems } = userData.actions;

export default userData;
