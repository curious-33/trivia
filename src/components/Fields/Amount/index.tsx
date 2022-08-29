import React, { useState } from "react";
import cx from "classnames";
import "./style.scss";

interface IAmountComponent {
  name: string;
  onChange?: Function;
  placeholder?: string;
  errors?: any;
  [x: string]: any;
}

const AmountComponent: React.FC<IAmountComponent> = ({
  name,
  placeholder,
  onChange,
  errors,
  ...otherProps
}): JSX.Element => {
  const [amountValue, setAmountValue] = useState<string>("");
  return (
    <div className="amountComponent">
      <input
        type="number"
        name={name}
        placeholder={placeholder}
        className={cx("amount", errors && errors[name] ? "hasError" : "")}
        value={amountValue}
        min={1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAmountValue(e.target.value);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        {...otherProps}
      />
      {errors && errors[name] && (
        <div className="errorMessage">{errors[name]["message"]}</div>
      )}
    </div>
  );
};

export default AmountComponent;
