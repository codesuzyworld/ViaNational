type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="w-full flex flex-col justify-center items-center">{children}</div>;
};

export default Container;
