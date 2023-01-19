import Header from '../Header';
import Footer from '../Footer';

interface IProps {
  children: any;
}
const Layout = (props: IProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="layout relative flex flex-col min-h-[calc(100vh-64px-128px)] px-[160px] mx-auto">
        {props.children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
