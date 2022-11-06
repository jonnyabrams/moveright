import { useRouter } from "next/router";

const SearchResults = () => {
  const router = useRouter();
  const {type, location} = router.query;

  return <div>{type} {location}</div>;
};

export default SearchResults;
