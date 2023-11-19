import css from 'components/Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.p}>{message}</p>
    </div>
  );
};
