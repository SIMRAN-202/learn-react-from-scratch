import React, { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const clear = () => {
    setInputValue('');
  };

  const display = (value) => {
    setInputValue((prev) => prev + value);
  };

  const calculate = () =>{
    try {
        const result = eval(inputValue)
        setInputValue(result.toString())
    } catch (error) {
        setInputValue('Error')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-blue-300 rounded-xl p-6 shadow-xl w-72">
        <div className="mb-4 bg-gray-100 text-right p-3 text-2xl rounded-md">{inputValue || '0'}</div>

        <div className="grid grid-cols-4 grid-rows-5 gap-2 text-center text-xl font-medium select-none">
          <span onClick={clear} className="bg-red-800 text-white p-3 rounded-md hover:opacity-90 cursor-pointer">C</span>
          <span onClick={() => display('/')} className="bg-blue-200 text-dark p-3 rounded-md hover:opacity-90 cursor-pointer">/</span>
          <span onClick={() => display('*')} className="bg-blue-200 text-dark p-3 rounded-md hover:opacity-90 cursor-pointer">*</span>
          <span onClick={() => display('+')} className="bg-blue-200 text-dark p-3 rounded-md hover:opacity-90 cursor-pointer row-span-2 flex items-center justify-center">+</span>

          <span onClick={() => display('7')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">7</span>
          <span onClick={() => display('8')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">8</span>
          <span onClick={() => display('9')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">9</span>

          <span onClick={() => display('4')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">4</span>
          <span onClick={() => display('5')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">5</span>
          <span onClick={() => display('6')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">6</span>

          <span onClick={() => display('-')} className="bg-blue-200 text-dark p-3 rounded-md hover:opacity-90 cursor-pointer">-</span>
          <span onClick={() => display('1')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">1</span>
          <span onClick={() => display('2')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">2</span>
          <span onClick={() => display('3')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">3</span>
          <span onClick={() => display('.')} className="bg-blue-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">.</span>
          <span onClick={() => display('0')} className="col-span-2 bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">0</span>
          <span onClick={() => display('00')} className="bg-gray-200 p-3 rounded-md hover:bg-gray-300 cursor-pointer">00</span>
          <span onClick={() => calculate('=')} className="bg-green-900 text-white p-3 rounded-md hover:opacity-90 cursor-pointer">=</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
