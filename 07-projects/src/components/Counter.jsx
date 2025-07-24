import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="flex flex-col items-center justify-center
        pb-4 bg-gradient-to-br from-slate-100 to-sky-100 text-slate-800 font-[Inter]">
            <div className="mb-8  px-8 py-6 backdrop-blur-md">
                <h1 className="text-5xl font-extrabold tracking-wide text-sky-600 drop-shadow-sm">
                    Count: {count}
                </h1>
            </div>

            <div className="flex gap-6">
                <button
                    onClick={increment}
                    className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-emerald-600 hover:scale-105 transition-all duration-200"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:from-pink-500 hover:to-rose-600 hover:scale-105 transition-all duration-200"
                >
                    Decrement
                </button>
            </div>
        </div>

    )
}

export default Counter