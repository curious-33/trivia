import get from "lodash/get";

import { ReactComponent as UserIcon } from "assets/images/icons/user.svg";
import { ReactComponent as StarIcon } from "assets/images/icons/star1.svg";
import styles from "./result.module.scss";

import { Types } from "modules/quiz";

interface IResultHeaderProps {
  result: Types.IStore.userResult[];
}

const ResultHeader: React.FC<IResultHeaderProps> = ({ result }) => {
  const correctAnswers = result.filter(
    (item) => item.user_answer === item.correct_answer
  );
  const wrongAnswers = result.filter(
    (item) => item.user_answer !== item.correct_answer
  );
  const sortedResult = [...correctAnswers, ...wrongAnswers];
  return (
    <div className={styles.resultHeader}>
      <div>
        <div className={styles.resultHeaderTop}>
          <div className={styles.userIcon}>
            <UserIcon />
          </div>
          <div className={styles.scoreText}>
            You scored{" "}
            <span className={styles.correctAnswerAmount}>
              {correctAnswers.length}
            </span>
            / {result.length}
          </div>
        </div>
        <div className={styles.resultHeaderBottom}>
          {sortedResult.sort().map((item) => {
            const isCorrect = item.user_answer === item.correct_answer;
            return (
              <StarIcon
                key={get(item, "id")}
                className={[
                  styles.starIcon,
                  isCorrect && styles.filledStar,
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultHeader;
