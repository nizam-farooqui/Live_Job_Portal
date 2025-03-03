import React, { useEffect, useState } from 'react'

function Counter(params) {
    let { targetValue, name } = params;
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < targetValue) {
            const interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < targetValue) {
                        return prevCount + 5;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 1);

            return () => clearInterval(interval);
        }
    }, [count, targetValue]);

    return (
        <div className='w-[200px] h-[150px] bg-gray-600 rounded-lg border-4 shadow-[0px_0px_5px_gray] text-black flex flex-col gap-2 justify-center items-center'>
            <p className='font-bold text-white text-4xl'>{count}</p>
            <p className=' text-lg text-white'>{name}</p>
        </div>
    )
}

export default Counter