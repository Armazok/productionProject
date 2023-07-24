import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileValidateError = (state: IStateSchema) => state.profile?.validateError;
