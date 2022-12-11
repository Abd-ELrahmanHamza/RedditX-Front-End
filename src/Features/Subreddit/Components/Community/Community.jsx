import React, { useState, useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import joinCommunity from "Features/Subreddit/Services/joinCommunity";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

import {
  CommunityItem,
  CommunityA,
  CommunityIndex,
  CommunityImg,
  TitleParagraph,
  CommunityCard,
  ForPadding,
  HoverItem,
  ImgTitle,
  HoverImg,
  HoverTitle,
  MembersOnline,
  Members,
  HoverDescription,
  HoverH4,
  HoverP,
  HoverButton,
  Arrow,
  HoverDiv,
} from "./Community.styled";

/**
 * Component that contains the community items of the community leaderboard page
 *
 * @Component
 * @param {boolean} isJoined - Boolean showing whether the user joined that community or not
 * @param {string} img - Subreddit Image
 * @param {string} title - Subreddit Title
 * @param {string} description - Subreddit Description to show in hover box
 * @param {number} index - Subreddit index among fetched data to index the list
 * @param {number} members - Subreddit Member count
 * @returns {React.Component}
 */
 const Community = ({isJoined, img, title, description, index, members}) => {

  const auth = useAuth();
  const [isJoinedstate, setIsJoined] = useState(
    isJoined !== undefined ? true : false
  );
  
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();

  

  useEffect(() => {
    setIsJoined(isJoined);
  }, [isJoined]); 

  function changeButton() {
    let dataObject = {
      action: isJoinedstate ? "unsub" : "sub",
      sr_name: "t5_imagePro235"
      // sr_name: `t5_${title}`,
    }
    joinCommunity(fetchFunction, dataObject, auth);
    
    setIsJoined((prevJoined) => !prevJoined);
  }
  const isRising = isJoinedstate;
  return (
    
    <CommunityItem>
      <HoverDiv>
        <CommunityA to={`/subreddit/*`}>
          <CommunityIndex>{index}</CommunityIndex>
          <Arrow up={isRising? "true": "false"}></Arrow>
          <CommunityImg
            src={require(`../../Assets/images/${img}`)}
            alt="logo"
          ></CommunityImg>
          <TitleParagraph>{title}</TitleParagraph>
          
        </CommunityA>
        <CommunityCard className="hover-card">
          <ForPadding>
            <HoverItem>
              <ImgTitle>
                <HoverImg src={require(`../../Assets/images/${img}`)} />
                <HoverTitle to={'/subreddit/*'}>{title}</HoverTitle>
              </ImgTitle>
              <MembersOnline>
                <Members>
                  <HoverH4>{members}</HoverH4>
                  <HoverP>Members</HoverP>
                </Members>
              </MembersOnline>
              <HoverDescription>{description}</HoverDescription>
              <HoverButton>View Community</HoverButton>
            </HoverItem>
          </ForPadding>
        </CommunityCard>
        
      </HoverDiv>
      <button
        className={isJoinedstate ? "joined-btn" : "join-btn"}
        onClick={changeButton}
      >
        <span>{isJoinedstate ? "Joined" : "Join"}</span>
      </button>
    </CommunityItem>
  );
};
export default Community;
