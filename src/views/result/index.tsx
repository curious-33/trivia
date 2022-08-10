import { useNavigate } from "react-router-dom";

import Layout from "layout";
import { Button } from "components";
import styles from "./result.module.scss";

const ResultView = () => {
  const navigate = useNavigate();
  return (
    <Layout.Container>
      <div className={styles.pageWrapper}>
        <Button
          name="Previous page"
          type="outline"
          onClick={() => navigate("/quizzes/1")}
        />
        <Button name="Next page" type="outline" onClick={() => navigate("/")} />
      </div>
    </Layout.Container>
  );
};

export default ResultView;
