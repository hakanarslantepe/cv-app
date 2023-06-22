import React from "react";

const Button = ({ values, prevHandle, nextHandle, dirty, isValid }) => {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      {(values.step > 1 && (
        <button onClick={prevHandle} type="button" className="prevButton">
          Prev
        </button>
      )) || <div />}
      {(values.step === values.lastStep && (
        <button className="nextButton" type="submit">
          Submit
        </button>
      )) || (
        <button
          onClick={nextHandle}
          type="button"
          className="nextButton"
          disabled={!isValid || !dirty}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Button;
