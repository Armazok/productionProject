import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileAge = (state: IStateSchema) => state?.profile?.data?.age || '';
