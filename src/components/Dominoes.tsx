"use client";
import useDominoesHooks from "@/hooks/dominoes.hooks";
import React from "react";

const Dominoes = () => {
  const {
    filterCard,
    cards,
    error,
    input,
    sortCardDomino,
    handleRemove,
    inputValueNumber,
    flipDomino,
    resetValueDomino,
    handleRemoveDuplicate,
  } = useDominoesHooks();
  return (
    <div className="mx-auto  flex flex-col w-[50%] gap-6 mt-10">
      <div className="bg-gray-100 rounded-md shadow-md  p-5">
        <h1 className="font-semibold text-lg font-mono">Source</h1>
        <span>{cards.map((card) => `[${card[0]},${card[1]}] `)}</span>
      </div>
      <div className="bg-gray-100 rounded-md shadow-md p-5">
        <h1 className="font-semibold text-lg font-mono">Double Number</h1>
        <span>{filterCard.map((card) => `[${card[0]},${card[1]}]`)}</span>
      </div>
      <div className="flex gap-2">
        {cards.map(([a, b], i) => (
          <div
            key={i}
            className="border-2 border-gray-600 p-[5px] max-w-6 text-sm"
          >
            <h2>{a}</h2>
            <div className="border-2 border-gray-600 my-2" />
            <h2>{b}</h2>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          className="bg-blue-500 rounded-md border-none p-2 max-w-32 text-white"
          onClick={() => sortCardDomino("asc")}
        >
          Sort (ASC)
        </button>
        <button
          className="bg-blue-500 rounded-md border-none p-2 max-w-32 text-white"
          onClick={() => sortCardDomino("desc")}
        >
          Sort (DESC)
        </button>
        <button
          className="bg-blue-500 rounded-md border-none p-2 max-w-32 text-white flip"
          onClick={flipDomino}
        >
          Flip
        </button>
        <button
          className="bg-blue-500 rounded-md border-none p-2 max-w-32 text-white"
          onClick={handleRemoveDuplicate}
        >
          Remove Dup
        </button>
        <button
          className="bg-blue-500 rounded-md border-none p-2 max-w-32 text-white"
          onClick={resetValueDomino}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col">
        <h1 className="text-sm text-red-500 font-mono">{error}</h1>

        <input
          type="text"
          placeholder="Input Number"
          className="p-2 rounded-md border-2 mr-5"
          value={input}
          onChange={inputValueNumber}
        />
      </div>
      <button
        className="bg-blue-500 rounded-md border-none p-2 max-w-32 text-white"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default Dominoes;
