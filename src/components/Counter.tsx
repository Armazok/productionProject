import React, {FC, useState} from 'react';
import classes from './Counter.module.scss'
interface ICounter {

}

export const Counter: FC<ICounter> = ({}) => {
    const [counter, setCounter] = useState(0)
    function incCounter() {
        setCounter(counter => counter + 1)
    }

    return (
        <div className={classes.btn}>
            <div>{counter}</div>
            <button onClick={incCounter}>Click Enc</button>
        </div>
    );
}
