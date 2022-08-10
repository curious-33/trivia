import cx from "classnames";

import styles from "./typography.module.scss";

interface IHeadingComponent {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  size?: number | string;
  children: React.ReactNode;
}

const HeadingComponent: React.FC<IHeadingComponent> = ({
  type = "h2",
  size,
  className,
  children,
}) => {
  if (type === "h1") {
    const classNames = cx(styles.h1, className ? className : "");
    return (
      <h1 className={classNames} style={{ fontSize: `${size}px` }}>
        {children}
      </h1>
    );
  } else if (type === "h2") {
    const classNames = cx(styles.h2, className ? className : "");
    return (
      <h2 className={classNames} style={{ fontSize: `${size}px` }}>
        {children}
      </h2>
    );
  } else if (type === "h3") {
    const classNames = cx(styles.h3, className ? className : "");
    return (
      <h3 className={classNames} style={{ fontSize: `${size}px` }}>
        {children}
      </h3>
    );
  } else if (type === "h4") {
    const classNames = cx(styles.h4, className ? className : "");
    return (
      <h4 className={classNames} style={{ fontSize: `${size}px` }}>
        {children}
      </h4>
    );
  } else if (type === "h5") {
    const classNames = cx(styles.h5, className ? className : "");
    return (
      <h5 className={classNames} style={{ fontSize: `${size}px` }}>
        {children}
      </h5>
    );
  } else if (type === "h6") {
    const classNames = cx(styles.h6, className ? className : "");
    return (
      <h6 className={classNames} style={{ fontSize: `${size}px` }}>
        {children}
      </h6>
    );
  }

  return null;
};

export default HeadingComponent;
