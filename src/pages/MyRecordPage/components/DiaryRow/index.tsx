import { IDiary } from '../../../../constant/interfaces';

interface IProps {
  data: IDiary;
}
const DiaryRow = (props: IProps) => {
  return (
    <div className="h-[231px] w-[231px] border border-[2px] border-gray-500 p-[16px] text-dark-500">
      <p>{props.data.date}</p>
      <p>{props.data.time}</p>
      <p className="text-small2">{props.data.title}</p>
      <p className="text-small2">{props.data.content}</p>
    </div>
  );
};
export default DiaryRow;
