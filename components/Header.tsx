import { Bars3Icon, UserIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 flex justify-between bg-white p-3 md:px-10">
        {/* left */}
        <div className="h-7 w-7">
          <Bars3Icon />
        </div>

        {/* center */}
        <div className="flex items-center space-x-1">
          <span className="font-serif font-bold text-xl">moveright</span>
          <HomeIcon className="h-5 w-5 text-[#08dcb5]" />
        </div>

        {/* right */}
        <div>
          <UserIcon className="h-7 w-7 justify-end" />
        </div>
      </header>
    </div>
  );
};

export default Header;
