import Layout from "layout";
import Form from "./form";
import Logo from "./logo";
import styles from "./home.module.scss";

const HomeView = () => {
  return (
    <Layout.Container>
      <div className={styles.pageWrapper}>
        <Logo />
        <Form />
      </div>
    </Layout.Container>
  );
};

export default HomeView;
