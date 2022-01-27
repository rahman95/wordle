import css from "./Keyboard.module.css";

const Keyboard = ({}) => {
  return (
    <section className={css.keyboard}>
      <span>QWERTYUIOP</span>
      <span>ASDFGHJKL</span>
      <span>ZXCVBNM</span>
    </section>
  );
};

export default Keyboard;
