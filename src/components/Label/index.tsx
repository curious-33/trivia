import styles from "./label.module.scss";

interface ILabelComponent {
  name: React.ReactNode | string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
}

const LabelComponent: React.FC<ILabelComponent> = ({
  name,
  htmlFor,
  required = false,
  children,
}): JSX.Element => {
  return (
    <div className={styles.labelComponent}>
      <label className={styles.label} htmlFor={htmlFor}>
        <div className={styles.labelNameWrapper}>
          {name && <div className={styles.labelName}>{name}</div>}
        </div>
      </label>
      {children}
    </div>
  );
};

export default LabelComponent;
