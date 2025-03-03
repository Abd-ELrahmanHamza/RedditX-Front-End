/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { useState } from "react";

import { inviteModerator } from "Features/Moderator/Services/userManagementApi";

import {
  Container,
  SearchContainer,
  SearchInput,
  AbilityContainer,
  CheckBox,
  Ability,
  Head,
  Par,
  Line,
  ButtonsContainer,
  ButtonTwo,
  GiveAccess,
} from "./InviteModerators.styled";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useParams } from "react-router-dom";

const defaultFormFields = {
  userName: "",
};

const USER_REGEX = /^[A-z0-9-_]{3,20}$/;

/**
 * InviteModerators Layout that is used in User management
 * @param {Function} setModalShowInviteModerator function to show or hide the modal of invite moderator
 * @returns {React.Component}  InviteModerators Layout that is used in User management
 */

const InviteModerators = ({ setModalShowInviteModerator }) => {
 // const communityName = "t5_imagePro235";

 const { subredditId } = useParams();

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { userName } = formFields;

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */
  const [validName, setValidName] = useState(false);

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

  /**
   * Function to handle any change on the input field
   * @param {*} event
   */

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValidName(USER_REGEX.test(userName));
    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to handle Invite user
   */
  const handleInvite = () => {
    inviteModerator(
      dataFetch,
      {
        userID: "t2_" + userName,
        type: "moderator_invite",
        communityID: "t5_"+subredditId,
      },
      auth.getToken()
    );

    setModalShowInviteModerator(false);
  };

  return (
    <>
      <Container>
        <SearchContainer>
          <SearchInput
            name="userName"
            value={userName}
            placeholder="Enter Username"
            onChange={handleChange}
          ></SearchInput>
        </SearchContainer>
        <GiveAccess>Give them access to...</GiveAccess>
        <AbilityContainer>
          <CheckBox>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="Everything"
              value="Everything"
              name="Everything"
            />
          </CheckBox>
          <Ability>
            <Head>Everything</Head>
            <Par>
              Full access including the ability to manage moderator access and
              permissions.
            </Par>
          </Ability>
        </AbilityContainer>
        <Line></Line>
        <AbilityContainer>
          <CheckBox>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="EveryThing"
              name="EveryThing"
              value="EveryThing"
            ></input>
          </CheckBox>
          <Ability>
            <Head>Manage Users</Head>
            <Par>
              Access mod notes, ban and mute users, and approve submitters*.
            </Par>
          </Ability>
        </AbilityContainer>
        <AbilityContainer>
          <CheckBox>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="EveryThing"
              name="EveryThing"
              value="EveryThing"
            ></input>
          </CheckBox>
          <Ability>
            <Head>Create Live Chats</Head>
            <Par>Create live chat posts in this community.</Par>
          </Ability>
        </AbilityContainer>
        <AbilityContainer>
          <CheckBox>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="EveryThing"
              name="EveryThing"
              value="EveryThing"
            ></input>
          </CheckBox>
          <Ability>
            <Head>Manage Settings</Head>
            <Par>
              Manage community settings, appearance, emojis, rules, and
              AutoMod*.
            </Par>
          </Ability>
        </AbilityContainer>
        <AbilityContainer>
          <CheckBox>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="EveryThing"
              name="EveryThing"
              value="EveryThing"
            ></input>
          </CheckBox>
          <Ability>
            <Head>Manage Flair</Head>
            <Par>Create and manage user and post flair.</Par>
          </Ability>
        </AbilityContainer>
        <AbilityContainer>
          <CheckBox>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="EveryThing"
              name="EveryThing"
              value="EveryThing"
            ></input>
          </CheckBox>
          <Ability>
            <Head>Manage Mod Mail</Head>
            <Par>Read and respond to modmail and mute users*.</Par>
          </Ability>
        </AbilityContainer>
        <AbilityContainer>
          <CheckBox>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="EveryThing"
              name="EveryThing"
              value="EveryThing"
            ></input>
          </CheckBox>
          <Ability>
            <Head>Manage Posts & Comments</Head>
            <Par>
              Access queues, take action on content, and manage collections and
              events.
            </Par>
          </Ability>
        </AbilityContainer>
        <AbilityContainer>
          <CheckBox>
            <input
              className="form-check-input w-5vm"
              type="checkbox"
              id="EveryThing"
              name="EveryThing"
              value="EveryThing"
            ></input>
          </CheckBox>
          <Ability>
            <Head>Manage Wiki Pages</Head>
            <Par>Create and manage wiki pages and AutoMod*.</Par>
          </Ability>
        </AbilityContainer>
        <Par>
          *Note: To manage AutoMod, mods must have access to Wiki Pages and
          Manage Settings. To mute users, mods must have access to Mod Mail and
          Manage Users.
        </Par>
        <Line></Line>
        <ButtonsContainer>
          {/* <ButtonOne
            onClick={() => {
              setModalShowLogIn(false);
            }}
          >
            Cancel
          </ButtonOne> */}
          <ButtonTwo
            disabled={!validName}
            valid={validName}
            onClick={() => {
              handleInvite();
            }}
          >
            Invite
          </ButtonTwo>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default InviteModerators;
