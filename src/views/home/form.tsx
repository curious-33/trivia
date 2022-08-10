import { Label, Button, Space } from "components";
import { ReactComponent as CupIcon } from "assets/images/icons/cup.svg";
import { ReactComponent as StarIcon } from "assets/images/icons/star.svg";
import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";

const HomeForm = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.homeForm}>
      <Label
        name={
          <div className={styles.formLabel}>
            <CupIcon className={styles.formLabelIcon} />
            Difficulty
          </div>
        }
      >
        SelectComponent
      </Label>
      <Label
        name={
          <div className={styles.formLabel}>
            <StarIcon className={styles.formLabelIcon} />
            Amount
          </div>
        }
      >
        NumberComponent
      </Label>
      <Space mt={10} />
      <Button
        name="Let's go"
        variant="orange"
        onClick={() => navigate("/home")}
      />
    </div>
  );
};

export default HomeForm;
