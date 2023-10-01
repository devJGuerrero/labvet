type Props = {
  size?: string;
  children: Array<JSX.Element> | JSX.Element;
};

const Column = ({ size, children }: Props) => {
  return <div className={size}>{children}</div>;
};

export default Column;
