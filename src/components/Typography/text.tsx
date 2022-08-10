import cx from "classnames";

import styles from "./typography.module.scss";

interface ITextComponent {
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}

const TextComponent: React.FC<ITextComponent> = ({
  className,
  children,
  ...otherProps
}) => {
  const classNames = cx(styles.paragraph, className ? className : "");
  return (
    <p className={classNames} {...otherProps}>
      {children}
    </p>
  );
};

export default TextComponent;
