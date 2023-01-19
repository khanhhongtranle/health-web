interface IProps {
  label: string;
  imageUrl: string;
}
const FoodThumbnail = (props: IProps): JSX.Element => {
  return (
    <div
      className={`relative h-[234px] w-[234px] bg-cover`}
      style={{
        backgroundImage: `url(${props.imageUrl as string})`,
        backgroundPosition: 'center'
      }}
    >
      <span className="absolute bottom-0 left-0 bg-primary-300 text-white font-inter p-[7px] text-semilarge">
        {props.label}
      </span>
    </div>
  );
};
export default FoodThumbnail;
