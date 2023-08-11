import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.div}>
      <input
        htmlFor={label}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
