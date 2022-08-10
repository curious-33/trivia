import { useRef } from "react";
import styles from "./amount.module.scss";

interface IAmountComponent {
  name: string;
  onChange?: Function;
  placeholder?: string;
  error?: null;
}

const AmountComponent: React.FC<IAmountComponent> = ({
  name,
  placeholder,
  onChange,
  error,
}): JSX.Element => {
  const amountRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className={styles.amountComponent}>
      <input
        type="number"
        name={name}
        placeholder={placeholder}
        className={styles.amount}
        onChange={() => {
          if (amountRef.current && onChange) {
            onChange(amountRef.current.value);
          }
        }}
      />
      {error && error[name] && (
        <div className={styles.amountError}>{error[name]["message"]}</div>
      )}
    </div>
  );
};

export default AmountComponent;
