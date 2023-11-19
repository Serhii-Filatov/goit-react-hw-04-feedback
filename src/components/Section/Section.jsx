import css from 'components/Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.h2}>{title}</h2>
      {children}
    </section>
  );
};
