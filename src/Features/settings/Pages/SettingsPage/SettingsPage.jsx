import { NavLink } from "react-router-dom";
import {
  ContainerSettings,
  InnerContainerSettings,
  SettingsNav,
  Title,
} from "./SettingsPage.styled";

const SettingsPage = () => {
  return (
    <ContainerSettings>
      <InnerContainerSettings>
        <Title>User settings</Title>
        <SettingsNav>
          <NavLink to={"/"}>Account</NavLink>
          <NavLink to={"/settings/Profile"}>Profile</NavLink>
          <NavLink to={"/settings/privacy"}>Safety & Privacy</NavLink>
          <NavLink to={"/settings/feed"}>Feed Settings</NavLink>
          <NavLink to={"/settings/emails"}>Emails</NavLink>
        </SettingsNav>
      </InnerContainerSettings>
    </ContainerSettings>
  );
};

export default SettingsPage;
