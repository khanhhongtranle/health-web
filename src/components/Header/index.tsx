import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import { COLUMN_PAGE_PATH, MY_RECORD_PAGE_PATH, TOP_PAGE_PATH } from '../../constant/routes';

const Header = (): JSX.Element => {
  const navigator = useNavigate();
  return (
    <div
      className={`w-full h-[64px] px-[160px] bg-dark-500 flex flex-row justify-between justify-center items-center`}
    >
      <div className="hover:cursor-pointer" onClick={() => navigator(TOP_PAGE_PATH)}>
        <svg
          width="144"
          height="64"
          viewBox="0 0 144 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.01" width="144" height="64" fill="#FF963C" />
          <g clip-path="url(#clip0_0_166)">
            <path
              d="M31.8646 27.5166H41.3418V35.3131H44.9509V16.0281H41.3418V24.1553H31.8646V16.0281H28.228V35.3131H31.8646V27.5166Z"
              fill="#FF963C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M53.6932 35.6437C55.7593 35.6437 58.1011 34.9274 59.5338 33.4396L57.3847 31.3182C56.6133 32.1173 54.988 32.5856 53.7482 32.5856C51.3789 32.5856 49.9188 31.3735 49.6983 29.6929H60.3051C60.8286 24.1002 57.9909 21.29 53.4451 21.29C49.0372 21.29 46.227 24.2655 46.227 28.3979C46.227 32.7509 49.0096 35.6437 53.6932 35.6437ZM53.5552 24.2655C55.4838 24.2655 56.8614 25.1471 57.0816 26.9103H49.7535C50.2493 25.1471 51.7371 24.2655 53.5552 24.2655H53.5552Z"
              fill="#FF963C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M68.8958 35.6984C70.4111 35.6709 72.5324 34.8993 73.3039 33.3015L73.4692 35.2852H76.6374V21.7029H73.414L73.3039 23.5763C72.5324 22.2263 70.7968 21.3723 68.9786 21.3723C65.0113 21.3447 61.898 23.7967 61.898 28.4802C61.898 33.2462 64.8736 35.7259 68.8958 35.6984L68.8958 35.6984ZM69.2815 24.3752C74.5711 24.3752 74.5711 32.6125 69.2815 32.6125C67.0499 32.6125 65.2592 31.0699 65.2592 28.4802C65.2592 25.8905 67.0499 24.3752 69.2815 24.3752Z"
              fill="#FF963C"
            />
            <rect x="79.0323" y="16.0276" width="3.33355" height="19.2575" fill="#FF963C" />
            <path
              d="M98.6182 28.3424C98.6182 26.3037 99.9955 24.6232 101.979 24.6232C103.77 24.6232 105.065 25.6702 105.065 28.1495V35.285H108.426V28.1221C108.426 24.1273 106.718 21.5101 102.861 21.5101C101.318 21.5101 99.8304 21.9784 98.6182 23.5487V16H95.257V35.285H98.6182V28.3424Z"
              fill="#FF963C"
            />
            <path
              d="M86.8417 30.4909C86.8417 33.8797 88.7702 35.5602 91.7179 35.4501C92.7374 35.4225 93.5363 35.2572 94.5006 34.8714L93.5638 32.0062C93.068 32.2543 92.4618 32.4195 91.9384 32.4195C90.8915 32.4195 90.1752 31.7859 90.1752 30.491V24.6228H93.9496V21.7301H90.2028V18.418H86.8417V21.7301H84.307V24.6228H86.8417L86.8417 30.4909Z"
              fill="#FF963C"
            />
            <path
              d="M121.449 21.3721L117.771 29.6346L114.108 21.3721H110.56L115.993 33.6289L108.36 50.7745L95.0009 39.4341L16 39.4408V42.5778L93.775 42.5792L109.533 56L125 21.3721H121.449Z"
              fill="#FF963C"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_166">
              <rect width="109" height="39.9999" fill="white" transform="translate(16 16)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-row gap-[28px] relative">
        <div
          className="flex flex-row gap-[12px] items-center hover:cursor-pointer "
          onClick={() => navigator(MY_RECORD_PAGE_PATH)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
            <path
              d="M29.5491 10.665L28.5569 9.67389C27.9562 9.07196 26.9812 9.07318 26.3793 9.67389L25.452 10.6024L28.6208 13.7711L29.5491 12.8437C30.1499 12.2419 30.1499 11.2669 29.5491 10.665H29.5491Z"
              fill="#FF963C"
            />
            <path
              d="M16.76 19.2868V22.4561H19.9294L27.7571 14.6284L24.5879 11.459L16.76 19.2868Z"
              fill="#FF963C"
            />
            <rect x="9.34717" y="9.93433" width="8.9516" height="1.49193" fill="#FF963C" />
            <rect x="9.34717" y="15.3984" width="8.9516" height="1.49193" fill="#FF963C" />
            <rect x="9.36633" y="20.8625" width="5.47042" height="1.49193" fill="#FF963C" />
            <path
              d="M22.5858 26.5985C22.5858 26.826 22.4027 27.0117 22.1775 27.0129H5.36658C5.14148 27.0117 4.9596 26.826 4.95838 26.5985V5.40259C4.9596 5.17407 5.14149 4.98828 5.36658 4.98718H22.1775C22.4027 4.98828 22.5858 5.17407 22.5858 5.40259V11.3897L24.5441 9.40253V5.40259C24.543 4.07593 23.4861 3.0011 22.1775 3H5.36658C4.05933 3.0011 3.00147 4.07593 3 5.40259V26.5985C3.00146 27.9252 4.05933 28.9989 5.36658 29H22.1775C23.4861 28.9989 24.543 28.7748 24.5441 27.4482V19.9488L22.5858 21.9359V26.5985Z"
              fill="#FF963C"
            />
          </svg>
          <span className="font-sans text-big text-white hover:text-primary-400">自分の記録</span>
        </div>
        <div className="flex flex-row gap-[12px] items-center hover:cursor-pointer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
            <g clip-path="url(#clip0_0_174)">
              <path
                d="M11.2522 14.468L10.4399 15.0223C10.9592 15.7839 11.6218 16.4266 12.3809 16.9232L12.919 16.0994C12.2666 15.6732 11.6983 15.1201 11.2522 14.468Z"
                fill="#FF963C"
              />
              <path
                d="M14.7858 5.71515C15.1978 5.62921 15.6062 5.58795 16.01 5.58795C16.3806 5.58795 16.7466 5.62213 17.1033 5.68915L17.2845 4.7229C16.8679 4.64532 16.4419 4.604 16.01 4.604C15.5403 4.604 15.0624 4.65228 14.5858 4.75116L14.567 4.75592L14.7695 5.71747L14.7858 5.71515Z"
                fill="#FF963C"
              />
              <path
                d="M12.8181 6.46692L12.2625 5.65601C11.5022 6.17615 10.8596 6.83887 10.364 7.59803L11.188 8.13587C11.6128 7.48377 12.166 6.91297 12.8181 6.46692Z"
                fill="#FF963C"
              />
              <path
                d="M10.2739 11.2434C10.2739 10.8715 10.3091 10.5043 10.3762 10.1453L9.41016 9.96411C9.33106 10.3819 9.29004 10.8092 9.29004 11.2434C9.29004 11.7142 9.33814 12.1909 9.43823 12.6687L9.44067 12.6805L10.4033 12.4792L10.4009 12.4687C10.3149 12.0568 10.2739 11.6472 10.2739 11.2434V11.2434Z"
                fill="#FF963C"
              />
              <path
                d="M17.2145 16.8911C16.8024 16.977 16.3939 17.0182 15.9903 17.0182C15.6161 17.0182 15.2464 16.983 14.8863 16.9146L14.704 17.8809C15.1229 17.9598 15.5538 18.001 15.9904 18.001C16.4598 18.001 16.9366 17.9527 17.4144 17.8539L17.4203 17.8526L17.2201 16.8899L17.2145 16.8911Z"
                fill="#FF963C"
              />
              <path
                d="M22.5614 9.83667L22.5568 9.81299L21.594 10.0166L21.5986 10.0378C21.6846 10.4486 21.7258 10.8581 21.7258 11.2618C21.7258 11.6385 21.6893 12.0093 21.621 12.3706L22.5874 12.5542C22.6674 12.1328 22.7085 11.7008 22.7085 11.2618C22.7085 10.7922 22.6616 10.3144 22.5614 9.83666V9.83667Z"
                fill="#FF963C"
              />
              <path
                d="M19.173 16.0415L19.7273 16.8536C20.4888 16.3346 21.1326 15.672 21.6292 14.9139L20.8065 14.375C20.3793 15.027 19.8262 15.5956 19.173 16.0415L19.173 16.0415Z"
                fill="#FF963C"
              />
              <path
                d="M20.7421 8.02496L21.5531 7.46936C21.0317 6.70905 20.3678 6.06641 19.6086 5.57202L19.072 6.39593C19.7252 6.82086 20.2949 7.3728 20.7421 8.02496Z"
                fill="#FF963C"
              />
              <path
                d="M19.3721 10.1399L17.0415 9.80139L15.9995 7.68994L14.9575 9.80139L12.627 10.1399L14.3132 11.7837L13.9153 14.1044L15.9995 13.0087L18.0837 14.1044L17.6858 11.7837L19.3721 10.1399Z"
                fill="#FF963C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.1128 11.5726C26.1128 8.65613 24.979 6.00561 23.1521 4.09534C22.1625 3.06079 20.9657 2.23926 19.6339 1.70374C18.5046 1.2483 17.2798 1 16.001 1C14.7119 1 13.4746 1.25293 12.3387 1.71558C11.0171 2.2522 9.83167 3.06787 8.84888 4.09534C7.02173 6.00562 5.88794 8.65613 5.88794 11.5726C5.88794 14.4879 7.02173 17.1361 8.84888 19.0463C10.676 20.9589 13.2112 22.144 16.001 22.144C18.7895 22.144 21.3248 20.9589 23.1521 19.0463C24.979 17.1361 26.1128 14.4879 26.1128 11.5726ZM16.001 20.1774C13.7246 20.1774 11.6735 19.217 10.1796 17.6575C8.68896 16.0957 7.76928 13.9524 7.76928 11.5726C7.76928 9.19287 8.68896 7.04602 10.1796 5.48767C11.1533 4.47192 12.3623 3.70935 13.719 3.3009C14.4416 3.08557 15.2084 2.96789 16.001 2.96789C16.7811 2.96789 17.5365 3.07958 18.2513 3.29382C19.6193 3.69751 20.8406 4.46496 21.8213 5.48767C23.3119 7.04602 24.2316 9.19287 24.2316 11.5726C24.2316 13.9524 23.3119 16.0957 21.8213 17.6575C20.3273 19.217 18.2773 20.1774 16.001 20.1774H16.001Z"
                fill="#FF963C"
              />
              <path
                d="M8.73693 20.2417C8.5841 20.118 8.42992 19.9956 8.28161 19.8638L8.28051 19.8674L8.26867 19.8579L4.60461 27.7047L4.5 27.986L4.63892 28.206C4.73902 28.3591 4.90125 28.4498 5.08265 28.4498H5.16847L8.67006 27.3611L10.0552 30.6754C10.1413 30.8707 10.327 31.0002 10.5426 31.0002C10.7473 31.0002 10.9334 30.8802 11.0192 30.6942L13.8534 24.6258L14.6901 22.8428L14.6867 22.8415L14.6925 22.8274C12.4611 22.5096 10.4225 21.5869 8.73695 20.2417L8.73693 20.2417Z"
                fill="#FF963C"
              />
              <path
                d="M24.5542 21.6375L23.7314 19.8685L23.728 19.8709L23.7222 19.8579C22.0745 21.3091 20.0334 22.3248 17.7903 22.7356C17.6323 22.7639 17.4761 22.7957 17.3159 22.8168L17.3171 22.8203L17.303 22.8239L20.9763 30.6942C21.062 30.8814 21.248 31.0002 21.4529 31.0002C21.6685 31.0002 21.8542 30.8707 21.9402 30.6754L23.3254 27.3611L26.7598 28.4262L26.8408 28.4498H26.9128C27.094 28.4498 27.2563 28.3591 27.3564 28.2061L27.5002 27.939L24.5542 21.6375Z"
                fill="#FF963C"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_174">
                <rect width="23.0002" height="30.0003" fill="white" transform="translate(4.5 1)" />
              </clipPath>
            </defs>
          </svg>

          <span className="font-sans text-big text-white hover:text-primary-400">チャレンジ</span>
        </div>
        <div
          onClick={() => navigator(COLUMN_PAGE_PATH)}
          className="flex flex-row gap-[12px] items-center hover:cursor-pointer"
        >
          <div className="relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.5 25.2975H16.0722L8.07178 31V25.2975H3.5V3H28.5V25.2975H28.5ZM26.2142 5.27186H5.78577V23.0256H10.3576V26.5755L15.3374 23.0256H26.2142V5.27186ZM17.3634 13.391V19.9249H14.7335V13.391H17.3634ZM16.048 11.4314C16.9555 11.4314 17.6913 10.6998 17.6913 9.79798C17.6913 8.896 16.9555 8.16444 16.048 8.16444C15.1405 8.16444 14.4044 8.89601 14.4044 9.79798C14.4044 10.6998 15.1405 11.4314 16.048 11.4314Z"
                fill="#FF963C"
              />
            </svg>
            <div
              className="h-[16px] w-[16px] bg-primary-500 text-white rounded-full text-[10px]
                  flex flex-row justify-center absolute top-0 -right-[8px]"
            >
              <span>1</span>
            </div>
          </div>

          <span className="font-sans text-big text-white hover:text-primary-400">お知らせ</span>
        </div>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button as={Fragment}>
                {open ? (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
                    <path d="M7 7L26 26" stroke="#FF963C" stroke-width="3" />
                    <path d="M7 26L26 7" stroke="#FF963C" stroke-width="3" />
                  </svg>
                ) : (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
                    <path d="M3 8H29" stroke="#FF963C" stroke-width="3" />
                    <path d="M3 16H29" stroke="#FF963C" stroke-width="3" />
                    <path d="M3 24H29" stroke="#FF963C" stroke-width="3" />
                  </svg>
                )}
              </Menu.Button>
              <div className="absolute top-[48px] right-0 w-[280px] z-40">
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items>
                    <Menu.Item>
                      <div
                        className="bg-gray-400 py-[22px] pl-[32px] text-white font-sans text-big2
                    border border-b-[1px] border-b-dark-600
                    hover:cursor-pointer"
                      >
                        自分の記録
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        className="bg-gray-400 py-[22px] pl-[32px] text-white font-sans text-big2
                    border border-t-[1px] border-t-white border-b-[1px] border-b-dark-600
                    hover:cursor-pointer"
                      >
                        体重グラフ
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        className="bg-gray-400 py-[22px] pl-[32px] text-white font-sans text-big2
                    border border-t-[1px] border-t-white border-b-[1px] border-b-dark-600
                    hover:cursor-pointer"
                      >
                        目標
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        className="bg-gray-400 py-[22px] pl-[32px] text-white font-sans text-big2
                    border border-t-[1px] border-t-white border-b-[1px] border-b-dark-600
                    hover:cursor-pointer"
                      >
                        選択中のコース
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        className="bg-gray-400 py-[22px] pl-[32px] text-white font-sans text-big2
                    border border-t-[1px] border-t-white border-b-[1px] border-b-dark-600
                    hover:cursor-pointer"
                      >
                        コラム一覧
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        className="bg-gray-400 py-[22px] pl-[32px] text-white font-sans text-big2
                    border border-t-[1px] border-t-white border-b-[1px] border-b-dark-600
                    hover:cursor-pointer"
                      >
                        設定
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </div>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};
export default Header;
