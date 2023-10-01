type Props = {
  children: Array<JSX.Element> | JSX.Element;
};

const Flex = ({ children }: Props) => {
  return <div className="lg:flex lg:flex-row px-5 pb-10">{children}</div>;
};

export default Flex;
