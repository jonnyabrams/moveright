import { useRouter } from "next/router";
import { useState } from "react";

interface IProps {
  title: string;
}

const Search = ({ title }: IProps) => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search-results",
      query: {
        type: title,
        location: searchInput,
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-3 bg-[#120249]">
      <h1 className="text-white font-bold text-lg md:text-2xl">
        UK property for {title}
      </h1>
      <p className="text-[#08dcb5] text-xs md:text-lg">
        Search by place name
      </p>
      <div className="flex space-x-2 p-3 w-[80%]">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="placeholder:text-xs placeholder:p-3 flex-4 p-2 rounded flex-grow outline-none"
          type="text"
          placeholder="e.g. 'York'"
        />
        <button
          onClick={search}
          className="bg-[#08dcb5] h-10 font-bold rounded cursor-pointer flex-1 text-xs p-1 md:text-lg"
        >
          Start Search
        </button>
      </div>
    </div>
  );
};

export default Search;
