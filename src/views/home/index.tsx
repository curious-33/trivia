import Layout from "layout";

import Form from "./form";
import Logo from "assets/images/logo.svg";
import styles from "./home.module.scss";

const HomeView = () => {
  return (
    <Layout.Container>
      <div className={styles.appLogoWrapper}>
        <img src={Logo} alt="app-logo" className={styles.appLogo} />
      </div>
      <Form />
    </Layout.Container>
  );
};

export default HomeView;
