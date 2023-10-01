type Props = {
  children: Array<JSX.Element> | JSX.Element;
};

const Layout = ({ children }: Props) => {
  return <main className="w-full">{children}</main>;
};

export default Layout;
