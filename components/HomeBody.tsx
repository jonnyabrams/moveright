import { CurrencyPoundIcon, TagIcon, SunIcon, BuildingOfficeIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import HomeBodyCard from "./HomeBodyCard";
import RecentSearches from "./RecentSearches";

const HomeBody = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center space-y-2 p-6 md:text-lg">
      <HomeBodyCard title="My saved properties" icon={<HeartIcon className="h-5 mr-2 text-red-600" />} />
      <HomeBodyCard title="My saved searched & alerts" icon={<StarIcon className="h-5 mr-2 text-yellow-500" />} />
      <HomeBodyCard title="Sold prices search" icon={<CurrencyPoundIcon className="h-5 mr-2 text-[#08dcb5]" />} />
      <HomeBodyCard title="Request agent valuation" icon={<TagIcon className="h-5 mr-2 text-green-600" />} />
      <HomeBodyCard title="Overseas properties" icon={<SunIcon className="h-7 mr-2 text-yellow-500" />} />
      <HomeBodyCard title="Commercial property for sale" icon={<BuildingOfficeIcon className="h-5 mr-2" />} />
      <HomeBodyCard title="Commercial property for rent" icon={<BuildingOffice2Icon className="h-5 mr-2 text-gray-400" />} />

      <RecentSearches />
    </div>
  );
};

export default HomeBody;
