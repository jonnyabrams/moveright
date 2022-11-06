interface IProps {
  title: string;
  icon: JSX.Element;
}

const HomeBodyCard = ({ title, icon }: IProps) => {
  return <div className="bg-white w-[90%] h-20 mt-2 rounded p-3 flex items-center cursor-pointer">{icon}{title}</div>;
};

export default HomeBodyCard;
