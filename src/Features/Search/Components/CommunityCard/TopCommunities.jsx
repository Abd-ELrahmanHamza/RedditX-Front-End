import { CommunityContainer } from "./TopCommunities.styled";
import { Link } from "react-router-dom";
import CommunityCardItem from "../CommunityCardItem/CommunityCardItem";

/**
 * Component that contains the Community Card Elements.
 *
 * @Component
 * @param {object} CommunityList -  contains the Community list elements
 * @param {object} CommunitiesSub2 -  contains the Community list elements that user subscribe
 * @returns {React.Component}
 */
const TopCommunities = ({ CommunityList, CommunitiesSub2 }) => {
  // console.log(CommunityList.results);

  if (CommunityList.results) {
    const arr = CommunityList.results;
    const communitiesNumber = CommunityList.results.length;

    return (
      <CommunityContainer>
        <p className="title">Communities</p>
        {communitiesNumber !== 0 &&
          CommunityList.results.slice(0, 5).map((Community) => (
            <CommunityCardItem
              communityIcon={Community.icon}
              key={Community._id}
              communityID={Community._id}
              communityDescription={Community.description}
              membersCount={Community.membersCnt}
              communityName={Community._id}
              isJoined={CommunitiesSub2.find((element) => {
                return element.id === Community._id;
              })}
            />
          ))}
        {communitiesNumber === 0 && <p className="NoResults">No results</p>}
        {communitiesNumber !== 0 && (
          <Link to="/search/communities">
            <p className="more" id="see-more">
              See more communities
            </p>
          </Link>
        )}
      </CommunityContainer>
    );
  }
};

export default TopCommunities;
