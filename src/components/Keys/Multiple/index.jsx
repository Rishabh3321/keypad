import React from "react";

function MultipleKey({ data, onClickHandler }) {
  return (
    <div className="p-2">
      <div
        onClick={() => onClickHandler(data.id)}
        className="select-none w-full h-20 border-2 font-mono font-bold text-lg text-orange-800 border-orange-900 rounded-3xl flex justify-center items-center cursor-pointer flex-col leading-none"
      >
        <div>{data.value}</div>
        <div className="mt-1 text-2xl">{data.longPressValue}</div>
      </div>
    </div>
  );
}

export default MultipleKey;
