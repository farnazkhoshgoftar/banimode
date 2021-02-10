import "./button.css";
const Button = (props) => {
  return (
    <button href="#" className={`buttonStyle ${props.buttonCustomStyle}`} onClick={props.onClick}>
      {props.textButton}
    </button>
  );
};
export default Button;
