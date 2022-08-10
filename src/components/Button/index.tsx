import cx from "classnames";

import "./style.scss";

interface IButtonComponent {
  htmlType?: "reset" | "submit" | "button";
  type?: "default" | "outline";
  variant?: "primary" | "orange";
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const ButtonComponent: React.FC<IButtonComponent> = ({
  htmlType = "button",
  type = "default",
  variant = "primary",
  name,
  onClick,
  children,
}): JSX.Element => {
  return (
    <button
      type={htmlType}
      className={cx("buttonComponent", `btn-${type}`, `btn-${variant}`)}
      onClick={onClick}
    >
      {name ? name : children}
    </button>
  );
};

export default ButtonComponent;
