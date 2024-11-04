import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        if (value === "=") {
            try {
                setResult(eval(input)); // Note: Using eval for simplicity; be cautious with it in real applications.
                setInput("");
            } catch (error) {
                setResult("Error");
                setInput("");
            }
        } else if (value === "C") {
            setInput("");
            setResult("");
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="button-container">
                {["7", "8", "9", "/"].map((button) => (
                    <button key={button} onClick={() => handleButtonClick(button)}>{button}</button>
                ))}
                {["4", "5", "6", "*"].map((button) => (
                    <button key={button} onClick={() => handleButtonClick(button)}>{button}</button>
                ))}
                {["1", "2", "3", "-"].map((button) => (
                    <button key={button} onClick={() => handleButtonClick(button)}>{button}</button>
                ))}
                {["0", "C", "=", "+"].map((button) => (
                    <button key={button} onClick={() => handleButtonClick(button)}>{button}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;