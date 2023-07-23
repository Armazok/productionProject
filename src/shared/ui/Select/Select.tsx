import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface ISelectOption {
    value: string
    content: string
}

interface ISelect {
    className?: string
    label?: string
    options?: ISelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo(({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: ISelect) => {
    const { t } = useTranslation();
    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
