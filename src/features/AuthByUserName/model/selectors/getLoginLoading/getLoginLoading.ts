import { IStateSchema } from 'app/providers/StoreProvider';

export const getLoginLoading = (state: IStateSchema) => state?.loginForm?.isLoading;
