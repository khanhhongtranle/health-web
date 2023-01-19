import MenuButton from './components/MenuButton';
import FoodThumbnail from './components/FoodThumbnail';
import Button from '../../components/Button';
import { useEffect } from 'react';

const TopPage = (): JSX.Element => {
  useEffect(() => {
    // window.addEventListener("load", (event) => {
    //   const c = document.getElementById("myCanvas") as HTMLCanvasElement;
    //   const ctx = c.getContext("2d");
    //   if (!ctx) {
    //     return;
    //   }
    //   ctx.beginPath();
    //   ctx.arc(50,50,50,0,(3/4)*2*Math.PI);
    //   ctx.stroke();
    // });
    // return () => {
    //   window.removeEventListener("load", ()=> {});
    // }
  }, []);
  return (
    <div className="flex flex-col gap-[25px] mb-[80px]">
      <div className="-mx-[160px] grid grid-cols-5 gap-0">
        <div className="col-span-2">
          <div
            className="relative bg-cover h-[316px]"
            style={{
              backgroundImage: 'url(d01.jpg)',
              backgroundPositionY: 'center'
            }}
          >
            <div
              className="absolute top-0 h-[316px] w-full opacity-90 bg-gradient-to-r from-primary-300 to-primary-400"
              style={{ mixBlendMode: 'soft-light' }}
            ></div>
          </div>
        </div>
        <div className="col-span-3 bg-dark-600"></div>
      </div>
      <div className="flex flex-row justify-center gap-[84px]">
        <MenuButton label={'Morning'} />
        <MenuButton label={'Lunch'} />
        <MenuButton label={'Dinner'} />
        <MenuButton label={'Snack'} />
      </div>
      <div className="relative grid grid-cols-4 gap-x-[8px] gap-y-[8px] mx-auto">
        <FoodThumbnail label={'05.21.Morning'} imageUrl="m01.jpg" />
        <FoodThumbnail label={'05.21.Lunch'} imageUrl={'l03.jpg'} />
        <FoodThumbnail label={'05.21.Dinner'} imageUrl={'d01.jpg'} />
        <FoodThumbnail label={'05.21.Snack'} imageUrl={'l01.jpg'} />
        <FoodThumbnail label={'05.20.Morning'} imageUrl={'m01.jpg'} />
        <FoodThumbnail label={'05.20.Lunch'} imageUrl={'l02.jpg'} />
        <FoodThumbnail label={'05.20.Dinner'} imageUrl={'d02.jpg'} />
        <FoodThumbnail label={'05.20.Snack'} imageUrl={'s01.jpg'} />
        <div
          className="absolute top-1/2 -right-[64px] transform -translate-y-1/2
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
      <div className="flex flex-row justify-center">
        <Button label={'記録をもっと見る'} onClick={() => {}} />
      </div>
    </div>
  );
};
export default TopPage;
