import { Label, Button, Space, Fields } from "components";
import { ReactComponent as CupIcon } from "assets/images/icons/cup.svg";
import { ReactComponent as StarIcon } from "assets/images/icons/star.svg";
import styles from "./home.module.scss";

const difficulty = [
  { value: 1, label: "Easy" },
  { value: 2, label: "Medium" },
  { value: 3, label: "Hard" },
];

const HomeForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form className={styles.homeForm} onSubmit={handleSubmit}>
      <Label
        name={
          <div className={styles.formLabel}>
            <CupIcon className={styles.formLabelIcon} />
            Difficulty
          </div>
        }
      >
        <Fields.Select
          name="difficulty"
          options={difficulty}
          placeholder="Select a difficulty"
        />
      </Label>
      <Space mt={25} />
      <Label
        name={
          <div className={styles.formLabel}>
            <StarIcon className={styles.formLabelIcon} />
            Amount
          </div>
        }
      >
        <Fields.Amount name="amount" placeholder="Enter amount of questions" />
      </Label>
      <Space mt={60} />
      <Button
        htmlType="submit"
        name="Let's go"
        variant="orange"
        fullWidth
        hoverEffect
      />
    </form>
  );
};

export default HomeForm;
