import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface ICurrencySelect {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readonly,
}: ICurrencySelect) => {
    const { t } = useTranslation();
    const mods: Mods = {};

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите валюту')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
            className={classNames('', mods, [className])}
        />
    );
});
