import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileAvatar = (state: IStateSchema) => state?.profile?.data?.avatar || '';
