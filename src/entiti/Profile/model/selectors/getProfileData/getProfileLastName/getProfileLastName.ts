import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileLastName = (state: IStateSchema) => state?.profile?.data?.lastName || '';
