import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash/get";

import Layout from "layout";
import { Actions, Types } from "modules/quiz";
import { IAppState } from "store/rootReducer";
import { Typography, ProgressBar, Button, Space } from "components";
import styles from "./quiz.module.scss";

const QuizView = () => {
  const dispatch = useDispatch();
  //eslint-disable-next-line
  const { id } = useParams();
  const navigate = useNavigate();

  const quizState = useSelector<IAppState>((state) => state.quiz.data);
  const quizzes = Array.isArray(quizState) ? quizState : [];
  const currentQuiz = quizzes.find((quiz) => quiz.id === Number(id));

  const handleAnswer = (answer: string) => {
    const userAnswer: Types.IStore.userResult = {
      ...currentQuiz,
      user_answer: answer,
    };
    dispatch(Actions.setUserAnswer.request(userAnswer));
    const currentQuizId = Number(get(currentQuiz, "id"));

    if (currentQuizId === quizzes.length) navigate("/quizzes/result");
    else navigate(`/quizzes/${currentQuizId + 1}`);
  };

  return (
    <Layout.Container theme="light">
      <div className={styles.pageWrapper}>
        <Typography.Heading type="h1" className={styles.quizTitle}>
          {get(currentQuiz, "category")}
        </Typography.Heading>
        <Typography.Text className={styles.quizLevel}>
          level {get(currentQuiz, "difficulty")}
        </Typography.Text>
        <ProgressBar />
        <div className={styles.quizForm}>
          <Typography.Heading type="h4" className={styles.quizQuestion}>
            {get(currentQuiz, "question")}
          </Typography.Heading>
          <div className={styles.quizFormBtns}>
            <Button
              name="True"
              fullWidth
              onClick={() => handleAnswer("True")}
            />
            <Space mt={12} mb={12} />
            <Button
              name="False"
              type="outline"
              fullWidth
              onClick={() => handleAnswer("False")}
            />
          </div>
        </div>
      </div>
    </Layout.Container>
  );
};

export default QuizView;
