import React, { useEffect, useState } from "react";
import "./BackgroundLetters.css";

export default function BackgroundLetters({ containerClass }) {
  const [lettersArray, setLettersArray] = useState([]);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const colors = ["#000000", "#222222", "#444444", "#FF0000", "#0000FF", "#008000"];
    const temp = [];

    for (let i = 0; i < 100; i++) {
      temp.push({
        char: letters.charAt(Math.floor(Math.random() * letters.length)),
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 10 + Math.random() * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.15 + Math.random() * 0.25
      });
    }

    setLettersArray(temp);
  }, []);

  return (
    <div className={`letter-container ${containerClass}`}>
      {lettersArray.map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{
            top: `${letter.top}%`,
            left: `${letter.left}%`,
            fontSize: `${letter.size}px`,
            opacity: letter.opacity,
            color: letter.color
          }}
        >
          {letter.char}
        </span>
      ))}
    </div>
  );
}