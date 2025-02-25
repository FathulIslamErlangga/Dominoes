"use client";
import { useState } from "react";

const useDominoesHooks = () => {
  const initialCard = [
    [1, 2],
    [1, 1],
    [4, 1],
    [3, 3],
    [6, 1],
    [5, 1],
    [3, 2],
    [2, 3],
    [3, 1],
    [5, 1],
  ];
  const [cards, setCards] = useState(initialCard);
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const filterCard = cards.filter((card) => card[0] === card[1]);

  const sortCardDomino = (sort: "asc" | "desc") => {
    const sortValue = [...cards].sort((a, b) => {
      const sortA = a[0] + a[1];
      const sortB = b[0] + b[1];
      return sort === "asc" ? sortA - sortB : sortB - sortA;
    });
    setCards(sortValue);
  };

  const removeNumberDomino = (total: number) => {
    const number = cards.filter(([a, b]) => a + b !== total);
    setCards(number);
  };

  const flipDomino = () => {
    setCards(cards.map(([a, b]) => [b, a]));
  };
  const resetValueDomino = () => {
    setCards(initialCard);
  };

  const inputValueNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const numberValue = Number(value);

    if (isNaN(numberValue)) {
      setError("Inputan hanya boleh angka");
      console.log("Error:", error);

      setTimeout(() => {
        setError("Inputan hanya boleh angka");
      }, 2000);
    } else {
      setError("");
      setInput(value);
    }
  };

  const handleRemove = () => {
    const total = Number(input);
    removeNumberDomino(total);
    setInput("");
  };
  const handleRemoveDuplicate = () => {
    const uniqueCards = cards.reduce((acc: number[][], [a, b]: number[]) => {
      const exists = acc.some(
        ([x, y]) => (x === a && y === b) || (x === b && y === a)
      );
      return exists ? acc : [...acc, [a, b]];
    }, []);
    setCards(uniqueCards);
  };
  return {
    cards,
    filterCard,
    input,
    error,
    sortCardDomino,
    handleRemove,
    inputValueNumber,
    flipDomino,
    resetValueDomino,
    handleRemoveDuplicate,
  };
};

export default useDominoesHooks;
