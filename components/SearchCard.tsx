import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SearchDataType } from "../typings";

interface IProps extends SearchDataType {
  location: string | string[] | undefined;
}

const SearchCard = ({
  location,
  title,
  price,
  priceType,
  address,
  agent,
}: IProps) => {
  return (
    <div className="flex px-2 pr-4 transition duration-200 ease-out border-b cursor-pointer py-7 hover:opacity-80 hover:shadow-lg first:border-t">
      <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
        <Image
          src="/house.webp"
          layout="fill"
          objectFit="cover"
          alt="Property"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>
            {address}, {location}
          </p>
          <HeartIcon className="cursor-pointer h-7" />
        </div>

        <h4 className="text-xl">{title}</h4>

        {/* horizontal line */}
        <div className="w-10 pt-2 border-b" />

        <p className="flex-grow pt-2 text-sm text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          iure odit culpa quae doloremque quis, vel assumenda ipsum amet est.
          Expedita repellendus ut in adipisci natus non? Sequi, velit
          consequuntur.
        </p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <span>{agent}</span>
            <img
              className="h-10"
              src="/agent-logo.webp"
              alt="Placeholder agent logo"
            />
          </p>

          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{priceType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
