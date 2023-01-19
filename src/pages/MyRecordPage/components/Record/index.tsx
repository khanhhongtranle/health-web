interface IProps {
  title: string;
  subTitle: string;
  image: string;
}
const Record = (props: IProps) => {
  return (
    <div className="relative border border-primary-300 border-[24px]">
      <div
        className="relative h-[240px] w-[240px] bg-cover"
        style={{
          backgroundImage: `url(${props.image as string})`,
          filter: 'grayscale(100%)',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-0 h-[240px] w-[240px] bg-dark-500 opacity-75"></div>
      </div>
      <div className="flex flex-col w-full items-center gap-[11px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <p className="font-inter text-huge text-primary-300 font-normal uppercase">{props.title}</p>
        <p className="bg-primary-500 text-white font-sans text-default py-[1px] px-[10px]">
          {props.subTitle}
        </p>
      </div>
    </div>
  );
};
export default Record;
