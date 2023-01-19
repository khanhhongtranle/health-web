const Footer = (): JSX.Element => {
  return (
    <div
      className={`w-full h-[128px] px-[160px] bg-dark-500 flex flex-row items-center gap-[45px]`}
    >
      <span className="text-white text-small hover:cursor-pointer">会員登録</span>
      <span className="text-white text-small hover:cursor-pointer">運営会社</span>
      <span className="text-white text-small hover:cursor-pointer">利用規約</span>
      <span className="text-white text-small hover:cursor-pointer">個人情報の取扱について</span>
      <span className="text-white text-small hover:cursor-pointer">特定商取引法に基づく表記</span>
      <span className="text-white text-small hover:cursor-pointer">お問い合わせ</span>
    </div>
  );
};
export default Footer;
