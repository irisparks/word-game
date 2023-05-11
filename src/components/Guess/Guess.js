import React from "react";
import { range } from "../../utils";
//cell component
function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;

  return <span className={className}>{letter}</span>;
}
//adding answer prop
function Guess({ value, answer }) {
  
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          //if there is a result, get result[num].letter;
          letter={value ? value[num].letter : undefined}
          status={value ? value[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
