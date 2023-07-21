import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileCity = (state: IStateSchema) => state?.profile?.data?.city || '';
