import styles from "./button.module.scss";

// primary secondary success warning danger
function Button({ color, onClick, children, ...props }) {
  return (
    <>
      <button className={`${styles.button} ${styles[`button_${color}`]}`} onClick={onClick} {...props}>
        {children}
      </button>
    </>
  );
}

export default Button;
