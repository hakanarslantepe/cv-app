import React from "react";
import { steps } from "../data/data";
import classNames from "classnames";

const Header = ({ values, stepHandle }) => {
  return (
    <>
      <header className="grid grid-cols-2 md:grid-cols-3 gap-x-2.5 border border-zinc-400 rounded-md mb-4">
        {steps.map((step) => (
          <button
            key={step.id}
            type="button"
            className="flex flex-col items-center justify-center py-2.5"
            disabled={values.step < step.step}
            onClick={() => stepHandle(step.step)}
          >
            <div
              className={classNames(
                "w-8 h-8 mb-2.5 rounded-full flex items-center justify-center",
                {
                  "bg-blue-400 text-blue-900": values.step === step.step,
                  "bg-[#ff4e00] text-orange-900": values.step > step.step,
                  "bg-zinc-400 text-zinc-900": values.step < step.step,
                }
              )}
            >
              {step.step}
            </div>
            <div
              className={classNames("text-l uppercase", {
                "text-blue-600": values.step === step.step,
                "text-[#ff4e00]": values.step > step.step,
                "text-zinc-400": values.step < step.step,
              })}
            >
              {step.title}
            </div>
          </button>
        ))}
      </header>
      <header className="">
        <h3 className="text-lg font-medium text-[#ff4e00] uppercase">
          Step:{values.step}
        </h3>
      </header>
    </>
  );
};

export default Header;
