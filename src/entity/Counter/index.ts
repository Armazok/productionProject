import { Counter } from './ui/Counter';
import { counterReducer } from './model/slice/counterSlice';
import type { ICounterSchema } from './model/types/counterSchema';

export {
    ICounterSchema,
    counterReducer,
    Counter,
};
