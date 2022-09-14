import { createSlice } from "@reduxjs/toolkit";

import { User, UserEmptyState } from "@/Contexts/Public/Authentication/domain/models";

export interface StateType {
    readonly user: User
}

export const initialState: StateType = {
    user: UserEmptyState
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState.user,
    reducers: {
        login: (state, action) => {
            return action.payload;
        },
        logout: (state) => {
            return UserEmptyState;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;