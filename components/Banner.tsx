import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center p-3 bg-[#120249]">
      <h1 className="text-[#08dcb5] font-bold text-lg md:text-2xl">
        Find your happy
      </h1>
      <p className="text-white text-xs md:text-lg">
        Search properties for sale and to rent in the UK
      </p>
      <div className="flex space-x-2 p-3">
        <button onClick={() => router.push('/search-sale')} className="bg-[#08dcb5] h-10 w-60 font-bold rounded cursor-pointer">
          For Sale
        </button>
        <button onClick={() => router.push('/search-rent')} className="bg-[#08dcb5] h-10 w-60 font-bold rounded cursor-pointer">
          To Rent
        </button>
      </div>
    </div>
  );
};

export default Banner;
