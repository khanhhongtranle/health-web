import './index.css';
interface IProps {
  title: string;
  date: string;
  time: string;
  tags: string[];
  imageUrl: string;
}
const Column = (props: IProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-[8px] w-[234px]">
      <div
        className={`relative h-[144px] w-full bg-cover hover:cursor-pointer`}
        style={{
          backgroundImage: `url(${props.imageUrl as string})`
        }}
      >
        <span className="absolute bottom-0 left-0 bg-primary-300 text-white font-inter flex flex-row justify-between px-[8px] py-[3px] w-[144px] text-default">
          <p>{props.date}</p>
          <p>{props.time}</p>
        </span>
      </div>
      <p className="column-title font-sans text-dark-500 text-default hover:cursor-pointer">
        {props.title}
      </p>
      <div className="flex flex-row gap-[3px]">
        {props.tags.map((value, index) => (
          <span key={index} className="font-sans text-small text-primary-400">
            # {value}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Column;
