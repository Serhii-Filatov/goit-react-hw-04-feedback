import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnBlock}>
      {options.map(option => {
        return (
          <button
            className={css.btn}
            key={option}
            onClick={() => {
              onLeaveFeedback(option.toLowerCase());
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
