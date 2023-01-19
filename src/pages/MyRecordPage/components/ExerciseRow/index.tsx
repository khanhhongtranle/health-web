import { IExercise } from '../../../../constant/interfaces';

interface IProps {
  data: IExercise;
}
const ExerciseRow = (props: IProps) => {
  return (
    <div className="border-b border-b-1 border-b-gray-400">
      <div className="flex flex-row justify-between">
        <p className="font-sans text-default">
          <span>● </span>
          {props.data.title}
        </p>
        <div className="font-inter text-primary-300 text-big2">{props.data.time}</div>
      </div>
      <div className="text-primary-300 font-inter ml-[13px] -mt-[10px]">{props.data.kcal}</div>
    </div>
  );
};
export default ExerciseRow;
