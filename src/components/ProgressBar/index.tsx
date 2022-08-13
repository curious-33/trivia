import styles from "./progressbar.module.scss";

const ProgressBarComponent = ({ total, done }: { total: any; done: any }) => {
  const _total = Array.isArray(total) ? total : [];
  const _done = Array.isArray(done) ? done : [];

  const totalLength = _total.length;
  const doneLength = _done.length;
  return (
    <div className={styles.progressBarComponent}>
      <div className={styles.progressText}>
        <span>{doneLength}</span>/{totalLength}
      </div>
      <div className={styles.progress}>
        <span
          className={styles.progressCompleted}
          style={{
            width: `${Math.round((doneLength * 100) / totalLength)}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBarComponent;
