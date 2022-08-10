import React from "react";
import styles from "./select.module.scss";

interface ISelectOptions {
  value: string | number | readonly string[] | undefined;
  label: string;
}

interface ISelectComponent {
  name: string;
  options: ISelectOptions[];
  placeholder?: string;
  onChange?: Function;
}

const SelectComponent: React.FC<ISelectComponent> = ({
  name,
  options,
  placeholder,
  onChange,
}): JSX.Element => {
  if (options.length > 0)
    return (
      <select
        name={name}
        className={styles.selectComponent}
        placeholder={placeholder}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          if (onChange) onChange(event.target.value);
        }}
      >
        {options.map((option: ISelectOptions, index: number) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );

  return <></>;
};

export default SelectComponent;
