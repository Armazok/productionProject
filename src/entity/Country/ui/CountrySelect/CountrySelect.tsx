import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entity/Country';

interface ICountrySelect {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.ARMENIA, content: Country.ARMENIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.UKRAINE, content: Country.UKRAINE },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
];

export const CountrySelect = memo(({
    className,
    value,
    onChange,
    readonly,
}: ICountrySelect) => {
    const { t } = useTranslation();
    const mods: Mods = {};

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите страну')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
            className={classNames('', mods, [className])}
        />
    );
});
