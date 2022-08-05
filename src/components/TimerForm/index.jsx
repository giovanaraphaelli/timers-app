import styles from './TimerForm.module.css';

const TimerForm = ({ setTimers }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const newTimer = Object.fromEntries(new FormData(form));

    newTimer.id = Date.now();

    newTimer.duration = parseInt(newTimer.duration);

    setTimers((timers) => [...timers, newTimer]);

    form.reset();
  };
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        className={styles.input}
        defaultValue="Teste"
      />
      <input
        type="number"
        name="duration"
        placeholder="Duração (segundos)"
        className={styles.input}
        min="1"
        defaultValue={5}
      />
      <input type="submit" className={styles.submitButton} value="+" />
    </form>
  );
};

export default TimerForm;
