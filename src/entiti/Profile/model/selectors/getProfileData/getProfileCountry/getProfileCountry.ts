import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileCountry = (state: IStateSchema) => state?.profile?.data?.country || '';
