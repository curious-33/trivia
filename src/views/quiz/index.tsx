import { useNavigate } from "react-router-dom";

import Layout from "layout";
import { Typography, ProgressBar, Button, Space } from "components";
import styles from "./quiz.module.scss";

const QuizView = () => {
  const navigate = useNavigate();
  return (
    <Layout.Container theme="light">
      <div className={styles.pageWrapper}>
        <Typography.Heading type="h1" className={styles.quizTitle}>
          Entertainment: Videogames
        </Typography.Heading>
        <Typography.Text className={styles.quizLevel}>level 1</Typography.Text>
        <ProgressBar />

        <div className={styles.quizForm}>
          <Typography.Heading type="h4" className={styles.quizQuestion}>
            The retail disc of Tony Hawk’s Pro Skater 5 only comes with the
            tutorial
          </Typography.Heading>
          <div className={styles.quizFormBtns}>
            <Button name="True" fullWidth />
            <Space mt={15} mb={15} />
            <Button name="False" type="outline" fullWidth />
          </div>
        </div>
        <Button
          name="Previous page"
          type="outline"
          onClick={() => navigate("/")}
        />
        <Button
          name="Next page"
          type="outline"
          onClick={() => navigate("/result")}
        />
      </div>
    </Layout.Container>
  );
};

export default QuizView;
