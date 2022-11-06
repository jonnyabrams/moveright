import { useRouter } from "next/router";
import SearchCard from "../components/SearchCard";
import { SearchDataType } from "../typings";

const SearchResults = ({ searchData }: { searchData: SearchDataType[] }) => {
  const router = useRouter();
  const { type, location } = router.query;

  return (
    <div>
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            300+ properties for {type} in {location}
          </h1>

          <div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
            <p className="button">Filter 1</p>
            <p className="button">Filter 2</p>
            <p className="button">Filter 3</p>
            <p className="button">Filter 4</p>
          </div>

          <div className="flex flex-col">
            {searchData?.map(({title, price, priceType, address, agent}, index) => (
              <SearchCard location={location} title={title} price={price} priceType={priceType} address={address} agent={agent} key={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const searchData = await fetch("https://json.extendsclass.com/bin/315eab1236da").then((res) =>
    res.json()
  );

  return {
    props: {
      searchData,
    },
  };
};

export default SearchResults;
