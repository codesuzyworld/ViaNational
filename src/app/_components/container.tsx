type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="w-full mx-1 px-4 flex flex-col justify-center items-center">{children}</div>;
};

export default Container;
