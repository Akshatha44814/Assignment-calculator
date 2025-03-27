import { useState } from "react";
import "./CalculatorElement.css";

const CalculatorPage = () => {
  const [result, setResult] = useState("");
  const [calculate, setCalculate] = useState("");
  const [error, setError] = useState(false);
  const [negativeNumbers, setNegativeNumbers] = useState([]);

  const inputMethod = (e) => {
    setCalculate(e.target.value);
    const inputValue = e.target.value.split("");
    if (inputValue.includes("-")) {
      setError(true);
      const res = e.target.value.match(/-?\d+/g).filter((a) => {
        if (a.includes("-")) {
          return true;
        } else {
          return false;
        }
      });
      setNegativeNumbers(res.join(","));
    } else {
      setError(false);
    }
  };
  const calculateSum = () => {
    const inputValue = calculate.split("");
    const findNumber =
      inputValue.length > 0 &&
      inputValue.filter((a) => {
        if (!isNaN(parseInt(a))) {
          return true;
        } else {
          return false;
        }
      });
    const resultOutput =
      findNumber.length > 0
        ? findNumber?.reduce((c, d) => {
            return parseInt(c) + parseInt(d);
          })
        : 0;
    setResult(resultOutput);
  };
  return (
    <div className="conatinerPage">
      <div>
        <input
          type="text"
          className="input"
          placeholder="E.G.,//;\n1;2;3 or 1,2,3"
          onChange={(e) => inputMethod(e)}
        />
      </div>

      <button
        className="calculate"
        onClick={(e) => {
          calculateSum();
        }}
        disabled={error}
      >
        Calculate
      </button>
      {error ? (
        <span className="content colorContent">
          Negative numbers not allowed :{negativeNumbers}
        </span>
      ) : (
        <div className="resultInput">
          <input
            type="text"
            className="input"
            value={`${result}`}
            placeholder="Result Output"
            disabled
          />
        </div>
      )}
    </div>
  );
};
export default CalculatorPage;
