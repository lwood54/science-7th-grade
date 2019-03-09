// use React's Hooks to remake GameTemplate with a functional component
// tryout useRef()
// try React.lazy()
// try to import cards and targets as separate components again since
// we can use hooks like useEffect to update the DOM while change occurs.
// useEffect to monitor drag and drop? changes in DOM?
import React, { useState } from 'react';

import cls from './GameTemplate.module.css';

const NewGameTemplate = () => {
        const [count, setCount] = useState(0);
        return (
                <div>
                        <h1 className={cls.Title}>New Game Template</h1>
                        <p>You clicked {count} times</p>
                        <button onClick={() => setCount(count + 1)}>Click me</button>
                </div>
        );
};

export default NewGameTemplate;
