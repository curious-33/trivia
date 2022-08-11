import cx from "classnames";
import "./style.scss";
interface ISelectOptions {
  value: string | number | readonly string[] | undefined;
  label: string;
}

type TDefaultValue = string | number | readonly string[] | undefined;

interface ISelectComponent {
  name: string;
  options: ISelectOptions[];
  placeholder?: string;
  defaultValue?: TDefaultValue;
  onChange?: Function;
  errors?: any;
  [x: string]: any;
}

const SelectComponent: React.FC<ISelectComponent> = ({
  name,
  options,
  placeholder,
  defaultValue,
  onChange,
  errors,
  ...otherProps
}): JSX.Element => {
  if (options.length > 0)
    return (
      <div className="selectContainer">
        <select
          name={name}
          className={cx(
            "selectComponent",
            errors && errors[name] ? "hasError" : ""
          )}
          defaultValue={defaultValue ? defaultValue : ""}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            if (onChange) onChange(event.target.value);
          }}
          {...otherProps}
        >
          <option disabled={true} value="">
            {placeholder}
          </option>
          {options.map((option: ISelectOptions, index: number) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors && errors[name] && (
          <div className="errorMessage">{errors[name]["message"]}</div>
        )}
      </div>
    );

  return <></>;
};

export default SelectComponent;
