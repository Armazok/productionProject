import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Story } from '@storybook/react';
import { loginReducers } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducers } from 'entity/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducers } from 'entity/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducers } from 'features/addCommentForm/model/slice/AddCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/test';

const defaultAsyncReducer: ReducersList = {
    loginForm: loginReducers,
    profile: profileReducers,
    articleDetails: articleDetailsReducers,
    addCommentForm: addCommentFormReducers,
    articleDetailsComments: articleDetailsCommentsReducer,
};
export const StoreDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
