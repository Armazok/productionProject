import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileFormData = (state: IStateSchema) => state.profile?.formData;
