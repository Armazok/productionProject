import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import i18nForTest from '../../../config/i18n/i18nForTest';

interface IComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<IStateSchema>
}

export function ComponentRender(component: ReactNode, options: IComponentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
        ,
    );
}
