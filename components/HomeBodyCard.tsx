interface IProps {
  title: string;
  icon: JSX.Element;
  text?: string;
}

const HomeBodyCard = ({ title, icon, text }: IProps) => {
  return (
    <div className="bg-white w-[90%] h-20 mt-2 rounded p-3 items-center cursor-pointer">
      <div className="flex">
        {icon}
        {title}
      </div>
      {text && <div className="text-xs ml-7 text-[#04806b]">
        {text}
      </div>}
    </div>
  );
};

export default HomeBodyCard;
