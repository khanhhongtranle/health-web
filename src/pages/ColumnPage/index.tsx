import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import BlogAPI from '../../api/blogs';
import { IBlog } from '../../constant/interfaces';
import Column from './components/Column';

const ColumnPage = (): JSX.Element => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await BlogAPI.get();
      setBlogs(response);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-0 my-[64px]">
      <div className="flex flex-row justify-between">
        <div className="bg-dark-600 h-[144px] w-[216px] text-center py-[24px] hover:cursor-pointer">
          <p className="font-inter text-large text-primary-300">RECOMMENDED COLUMN</p>
          <p className="text-white">______</p>
          <p className="font-sans text-white text-big2">オススメ</p>
        </div>
        <div className="bg-dark-600 h-[144px] w-[216px] text-center py-[24px] hover:cursor-pointer">
          <p className="font-inter text-large text-primary-300">RECOMMENDED DIET</p>
          <p className="text-white">______</p>
          <p className="font-sans text-white text-big2">ダイエット</p>
        </div>
        <div className="bg-dark-600 h-[144px] w-[216px] text-center py-[24px] hover:cursor-pointer">
          <p className="font-inter text-large text-primary-300">RECOMMENDED BEAUTY</p>
          <p className="text-white">______</p>
          <p className="font-sans text-white text-big2">美容</p>
        </div>
        <div className="bg-dark-600 h-[144px] w-[216px] text-center py-[24px]">
          <p className="font-inter text-large text-primary-300">RECOMMENDED HEALTH</p>
          <p className="text-white">______</p>
          <p className="font-sans text-white text-big2">健康</p>
        </div>
      </div>
      {loading ? (
        <span className="text-white font-inter text-large">Loading...</span>
      ) : blogs.length > 0 ? (
        <div className="relative mt-[56px] grid grid-cols-4 gap-x-[8px] gap-y-[18px] mx-auto">
          {blogs.map((value, index) => (
            <Column
              key={value.id}
              title={value.title}
              date={value.date}
              time={value.time}
              tags={value.tags}
              imageUrl={value.image}
            />
          ))}
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
      ) : (
        <span className="text-white font-inter text-large">Empty</span>
      )}
      <div className="mt-[26px] flex flex-row justify-center">
        <Button label={'コラムをもっと見る'} onClick={() => {}} />
      </div>
    </div>
  );
};
export default ColumnPage;
