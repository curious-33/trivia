import Logo from "assets/images/logo.svg";
import styles from "./home.module.scss";

const HomeLogo = () => {
  return (
    <div className={styles.appLogoWrapper}>
      <img src={Logo} alt="app-logo" className={styles.appLogo} />
    </div>
  );
};

export default HomeLogo;
