import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.ul}>
      <li className={css.li}>
        <span>Good: {good}</span>
      </li>
      <li className={css.li}>
        <span>Neutral: {neutral}</span>
      </li>
      <li className={css.li}>
        <span>Bad: {bad}</span>
      </li>
      <li className={css.li}>
        <span>Total: {total}</span>
      </li>
      <li className={css.li}>
        <span>Positive Feedback: {positivePercentage}%</span>
      </li>
    </ul>
  );
};
