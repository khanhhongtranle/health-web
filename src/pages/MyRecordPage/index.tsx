import Record from './components/Record';
import { useEffect, useState } from 'react';
import { IDiary, IExercise } from '../../constant/interfaces';
import ExerciseAPI from '../../api/exercises';
import ExerciseRow from './components/ExerciseRow';
import DiaryAPI from '../../api/diary';
import DiaryRow from './components/DiaryRow';
import Button from '../../components/Button';

const MyRecordPage = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [diary, setDiary] = useState<IDiary[]>([]);
  const fetchExercises = async () => {
    try {
      const response = await ExerciseAPI.get();
      setExercises(response);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchDiary = async () => {
    try {
      const response = await DiaryAPI.get();
      setDiary(response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchExercises();
    fetchDiary();
  }, []);
  return (
    <div className="flex flex-col gap-[56px] my-[56px]">
      <div className="flex flex-row justify-between">
        <Record title={'BODY RECORD'} subTitle={'自分のカラダの記録'} image={'MyRecommend-1.jpg'} />
        <Record title={'MY EXERCISE'} subTitle={'自分の運動の記録'} image={'MyRecommend-2.jpg'} />
        <Record title={'MY DIARY'} subTitle={'自分の日記'} image={'MyRecommend-3.jpg'} />
      </div>
      <div className="relative bg-dark-500 text-white py-[16px] px-[24px]">
        <div className="flex flex-row gap-[16px] items-center">
          <p className="font-inter text-default">
            BODY <br /> RECORD
          </p>
          <span className="font-inter text-large">2021.05.21</span>
        </div>
        <div className="flex flex-row gap-[16px] mt-[20px]">
          <button className="bg-white rounded-[12px] text-primary-300 font-sans text-default px-[20px] py-[2px] hover:text-white hover:bg-primary-300">
            日
          </button>
          <button className="bg-white rounded-[12px] text-primary-300 font-sans text-default px-[20px] py-[2px] hover:text-white hover:bg-primary-300">
            週
          </button>
          <button className="bg-white rounded-[12px] text-primary-300 font-sans text-default px-[20px] py-[2px] hover:text-white hover:bg-primary-300">
            月
          </button>
          <button className="text-white rounded-[12px] bg-primary-300 font-sans text-default px-[20px] py-[2px] hover:text-white hover:bg-primary-300">
            年
          </button>
        </div>
        <div
          className="absolute bottom-0 -right-[64px]
                 rounded-full h-[48px] w-[48px] border border-[1px] border-gray-400
                 flex flex-row justify-center items-center hover:cursor-pointer"
        >
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5853 9.04198L8.00023 2.65788L1.41519 9.04198L0.539001 8.19253L8.00024 0.958984L15.4615 8.19253L14.5853 9.04198Z"
              fill="#777777"
            />
          </svg>
        </div>
      </div>
      <div className="bg-dark-500 text-white py-[16px] px-[24px]">
        <div className="flex flex-row gap-[16px] items-center">
          <p className="font-inter text-default">
            MY <br /> EXERCISE
          </p>
          <span className="font-inter text-large">2021.05.21</span>
        </div>
        <div className="mt-[5px] grid grid-cols-2 gap-y-4 gap-x-6">
          {exercises.map((value, index) => (
            <ExerciseRow key={index} data={value} />
          ))}
        </div>
      </div>
      <div>
        <span className="font-inter uppercase text-large">my diary</span>
        <div className="mt-2 grid grid-cols-4 gap-[12px]">
          {diary.map((value, index) => (
            <DiaryRow key={index} data={value} />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Button label={'自分の日記をもっと見る'} onClick={() => {}} />
      </div>
    </div>
  );
};
export default MyRecordPage;
