import { useNavigate } from "react-router-dom";

import Layout from "layout";
import { Button } from "components";
import Form from "./form";
import Logo from "./logo";
import styles from "./home.module.scss";

const HomeView = () => {
  const navigate = useNavigate();
  return (
    <Layout.Container>
      <div className={styles.pageWrapper}>
        <Logo />
        <Form />
        <Button
          name="Previous page"
          type="outline"
          onClick={() => navigate("/result")}
        />
        <Button
          name="Next page"
          type="outline"
          onClick={() => navigate("/quizzes/1")}
        />
      </div>
    </Layout.Container>
  );
};

export default HomeView;
