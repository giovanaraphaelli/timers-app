import { useRef } from 'react';
import styles from './TimerForm.module.css';

const TimerForm = ({ setTimers }) => {
  const nameInputRef = useRef(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const newTimer = Object.fromEntries(new FormData(form));

    newTimer.id = Date.now();

    newTimer.duration = parseInt(newTimer.duration);

    setTimers((timers) => [...timers, newTimer]);

    form.reset();
    nameInputRef.current.focus();
  };
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        ref={nameInputRef}
        type="text"
        name="name"
        placeholder="Nome"
        className={styles.input}
      />
      <input
        type="number"
        name="duration"
        placeholder="Duração (segundos)"
        className={styles.input}
        min="1"
      />
      <input type="submit" className={styles.submitButton} value="+" />
    </form>
  );
};

export default TimerForm;
