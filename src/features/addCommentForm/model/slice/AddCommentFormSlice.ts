import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddCommentFormSchema } from 'features/addCommentForm';

const initialState: IAddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentFormSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder;
        // .addCase(actionName.pending, (state, action) => {
        //     state.error = undefined;
        //     state.isLoading = true;
        // })
        // .addCase(actionName.fulfilled, (state, action) => {
        //     state.isLoading = true;
        // })
        // .addCase(actionName.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducers } = addCommentFormSlice;
