import { useState } from "react";
import {
  BtnContainer,
  Button,
  PeopleDescription,
  PeopleInfo,
  PeopleMainInfo,
  PeopleKarma,
  PeopleTitle,
  Container,
  Flex,
  Img,
} from "./PeopleItem.styled.js";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import PeopleImage from "../../Assets/People_Image.jpg";
import useFetchFunction from "Hooks/useFetchFunction.js";
import followPeople from "Features/Search/Services/followPeople.js";
/**
 * Component that contains the PeopleItem and manage the state of the button Follow.
 *
 * @Component
 * @param {String} avatar - The image of the PeopleCardItem
 * @param {String} userID - The ID of the PeopleCardItem
 * @param {String} about - The Description of the PeopleCardItem
 * @param {number} totalKarmas - The totalKarmas of the PeopleCardItem
 * @param {String} username - The name of the PeopleCardItem
 * @param {object} isFollow -  it is object indicating whether the user is following this user
 * @returns {React.Component}
 */
const PeopleItem = ({
  avatar,
  userID,
  about,
  totalKarmas,
  username,
  isFollow,
}) => {
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();
  const [isJoinedstate, setisJoined] = useState(false);

  // // initialState for the following operations
  // const initialState = `${isFollow !== undefined ? "Following" : "Follow"}`;
  // the state of the buuton
  const [btnContent, setBtnContent] = useState(
    isFollow !== undefined ? "Following" : "Follow"
  );

  /**
   * it is the function that handle the state of the button when click on it.
   *
   * @param {Object} e it is an object which i can preventDefault and not redirect to the link
   */
  function clickHandler(e) {
    e.preventDefault();
    if (btnContent === "Follow") {
      setBtnContent("Following");
    } else {
      setBtnContent("Follow");
    }
    let btnState;
    if (btnContent === "Follow") {
      btnState = true;
    } else {
      btnState = false;
    }
    let dataObj = {
      action: btnState ? "Follow" : "unFollow",
      userName: `${username.slice(1)}`,
    };
    followPeople(fetchFunction, dataObj);
  }
  /**
   * it is the function that handle the state of the button when mouseEnter on it.
   *
   */
  function mouseEnterHandler() {
    if (btnContent === "Following") {
      setBtnContent("Unfollow");
    }
  }
  /**
   * it is the function that handle the state of the button when MouseLeave on it.
   *
   */
  function MouseLeaveHandler() {
    if (btnContent === "Unfollow") {
      setBtnContent("Following");
    }
  }
  var abbreviate = require("number-abbreviate");
  console.log(avatar);
  return (
    <Container href="#" title="people">
      <Flex>
        {avatar && (
          <Img
            crossOrigin="anonymous"
            src={`https://api.redditswe22.tech/users/files/${avatar}`}
            alt="People Icon"
          />
        )}
        <PeopleInfo>
          <PeopleMainInfo>
            <PeopleTitle className="user-name">
              {username.substring(3)}
            </PeopleTitle>
            <PeopleKarma>
              <span>•</span>
              {abbreviate(totalKarmas, 1)} Karma
            </PeopleKarma>
          </PeopleMainInfo>
          <PeopleDescription>{about}</PeopleDescription>
        </PeopleInfo>
        <BtnContainer>
          <Button
            onClick={clickHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={MouseLeaveHandler}
            className="follow"
          >
            {btnContent}
          </Button>
        </BtnContainer>
      </Flex>
    </Container>
  );
};

export default PeopleItem;
