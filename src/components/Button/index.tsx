interface IProps {
  label: string;
  onClick: () => void;
}
const Button = (props: IProps) => {
  return (
    <button
      onClick={props.onClick}
      className="hover:cursor-pointer font-sans text-[18px] bg-gradient-to-r from-primary-300 to-primary-400 text-white py-[14px] px-[50px] rounded"
    >
      {props.label}
    </button>
  );
};
export default Button;
