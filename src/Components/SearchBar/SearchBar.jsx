// imports
import React, { useState } from "react";
import {
  StyledSearchButton,
  StyledSearchIcon,
  StyledSearcherInput,
  ClearBtn,
} from "./SearchBar.styled";
import { useLocation, useNavigate, useParams } from "react-router-dom/dist";
import BodySearch from "Components/SearchDropDown/SearchDropDown";
import { SearchDropDown } from "Components/SearchDropDown/SearchDropDown";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect } from "react";
import fetchCommunities from "Features/Search/Services/fetchCommunities";
import fetchPeople from "Features/Search/Services/fetchPeople";
import { CiCircleRemove } from "react-icons/ci";

/**
 * Component that displays the search results for a given search term.
 *
 * @returns {React.Component}
 */

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showTrending, setShowTrending] = useState(false);

  const auth = useAuth();

  // fetch communities
  let [communityList, errorCommunity, loadingCommunity, fetchCommunity] =
    useFetchFunction();

  // fetch People
  let [PeopleList, errorPeople, loadingPeople, FB] = useFetchFunction();

  let communityResults = [];
  let peopleResults = [];
  let cntAndIcon = [];
  let avatar = [];
  useEffect(() => {
    fetchCommunities(fetchCommunity, auth, query);
    fetchPeople(FB, auth, query);
  }, [query]);

  if (communityList && communityList.length !== 0) {
    for (let i = 0; i < communityList.results.length; i++) {
      cntAndIcon.push([
        communityList.results[i].members.length,
        communityList.results[i].icon,
      ]);
      communityResults.push(communityList.results[i]._id);
    }
  }
  if (PeopleList && PeopleList.length !== 0) {
    for (let i = 0; i < PeopleList.results.length; i++) {
      peopleResults.push(PeopleList.results[i]._id);
      avatar.push(PeopleList.results[i].avatar);
    }
  }

  const onChangeText = (event, searchItems) => {
    setQuery(event.target.value);
    if (event.target.value.length > 0) {
      setShowResults(true);
      setShowTrending(false);
    } else setShowResults(false);
    communityResults = searchItems
      .filter((item) => {
        const searchTerm = query.toLowerCase();
        const foundItem = item.toLowerCase();
        return (
          searchTerm &&
          foundItem.startsWith(searchTerm) &&
          foundItem !== searchTerm
        );
      })
      .slice(0, 10);

    peopleResults = searchItems
      .filter((item) => {
        const searchTerm = query.toLowerCase();
        const foundItem = item.toLowerCase();
        return (
          searchTerm &&
          foundItem.startsWith(searchTerm) &&
          foundItem !== searchTerm
        );
      })
      .slice(0, 10);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const submitSearch = (event) => {
    if (event.which === 13) {
      navigate({
        pathname: "/search/posts",
        search: `?query=${event.target.value}${
          location.pathname.search("subreddit") !== -1
            ? `&destination=${id}`
            : ""
        }`,
      });
    }
  };

  return (
    <StyledSearchButton>
      <StyledSearchIcon size={22} />
      <StyledSearcherInput
        id={"search-input"}
        type="text"
        placeholder={"Search Reddit"}
        value={query}
        onChange={onChangeText}
        onKeyDown={submitSearch}
        onClick={() => setShowTrending(true)}
      />
      <ClearBtn
        textValue={query.length}
        onClick={() => {
          setQuery("");
          setShowResults(false);
        }}
      >
        <CiCircleRemove size={22} />
      </ClearBtn>
      <SearchDropDown showTrending={query.length === 0 && showTrending} />
      <BodySearch
        searchItemsCommunities={communityResults}
        searchItemsPeople={peopleResults}
        query={query}
        setQuery={setQuery}
        showResults={showResults}
        cntAndIcon={cntAndIcon}
        avatars={avatar}
        setShowResults={setShowResults}
      />
    </StyledSearchButton>
  );
};

export default SearchBar;
