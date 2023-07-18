import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from 'entiti/Counter/model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface ICounter {
    className?: string
}

export const Counter = ({ className }: ICounter) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1
                data-testid="value-title"
            >
                {counterValue}
            </h1>
            <Button
                type="button"
                onClick={increment}
                data-testid="increment-btn"

            >
                {t('Increment')}
            </Button>
            <Button
                type="button"
                onClick={decrement}
                data-testid="decrement-btn"

            >
                {t('Decrement')}
            </Button>
        </div>
    );
};
