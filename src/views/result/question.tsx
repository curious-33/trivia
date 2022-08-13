import get from "lodash/get";

import { Types } from "modules/quiz";

import { ReactComponent as WrongIcon } from "assets/images/icons/incorrect.svg";
import { ReactComponent as CorrectIcon } from "assets/images/icons/correct.svg";
import styles from "./result.module.scss";

interface IQuestionProps {
  singleResult: Types.IStore.userResult;
}

const Question: React.FC<IQuestionProps> = ({ singleResult }) => {
  const isCorrect = singleResult.user_answer === singleResult.correct_answer;
  return (
    <div
      className={[
        styles.question,
        isCorrect ? styles.correct : styles.wrong,
      ].join(" ")}
    >
      <p className={styles.questionText}>{get(singleResult, "question")}</p>
      <span className={styles.questionIcon}>
        {isCorrect ? <CorrectIcon /> : <WrongIcon />}
      </span>
    </div>
  );
};

export default Question;
