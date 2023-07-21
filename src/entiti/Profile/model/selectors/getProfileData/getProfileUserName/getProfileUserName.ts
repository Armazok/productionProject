import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileUserName = (state: IStateSchema) => state?.profile?.data?.userName || '';
