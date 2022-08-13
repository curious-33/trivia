import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import get from "lodash/get";

import Layout from "layout";
import { Types } from "modules/quiz";
import { IAppState } from "store/rootReducer";
import { Button } from "components";
import ResultHeader from "./header";
import Question from "./question";
import { ReactComponent as CloseIcon } from "assets/images/icons/incorrect.svg";
import styles from "./result.module.scss";

const ResultView = () => {
  const navigate = useNavigate();
  const quizResult = useSelector<IAppState>((state) => state.quiz.result);
  const result =
    Array.isArray(quizResult) && quizResult.length > 0 ? quizResult : [];

  const handleClose = () => {
    navigate("/quizzes");
  };
  return (
    <Layout.Container>
      <div className={styles.pageWrapper}>
        <div className={styles.closeBtn} onClick={handleClose}>
          <CloseIcon />
        </div>
        <div className={styles.result}>
          <ResultHeader result={result} />
          {result.map((singleResult: Types.IStore.userResult, index) => (
            <Question
              key={get(singleResult, "id")}
              singleResult={singleResult}
            />
          ))}
          <div className={styles.playBtn}>
            <Button
              name="Play again"
              variant="orange"
              onClick={handleClose}
              hoverEffect
            />
          </div>
        </div>
      </div>
    </Layout.Container>
  );
};

export default ResultView;
