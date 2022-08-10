import styles from "./container.module.scss";

interface ILayoutContainer {
  theme?: "light" | "dark";
  children: React.ReactNode;
}

const LayoutContainer: React.FC<ILayoutContainer> = ({
  theme = "dark",
  children,
}) => {
  return (
    <div
      className={[
        styles.appContainer,
        theme === "dark" ? styles.darkTheme : styles.lightTheme,
      ].join(" ")}
    >
      <main className={styles.pageContainer}>{children}</main>
    </div>
  );
};

export default LayoutContainer;
