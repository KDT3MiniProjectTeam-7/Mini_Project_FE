import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  email: string;
  name: string;
  age: number;
  tag: string[];
}

const user = createSlice({
  name: 'user',
  initialState: {} as User,
  reducers: {},
});

export default user;
