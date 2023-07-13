import { Counter } from './ui/Counter';
import { counterActions, counterReducer } from './model/slice/counterSlice';
import type { ICounterSchema } from './model/types/counterSchema';

export {
    ICounterSchema,
    counterReducer,
    counterActions,
    Counter,
};
