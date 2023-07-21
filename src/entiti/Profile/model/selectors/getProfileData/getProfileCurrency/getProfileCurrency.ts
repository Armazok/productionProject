import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileCurrency = (state: IStateSchema) => state?.profile?.data?.currency || '';
