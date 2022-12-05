import SettingsChange from "../../Components/SettingChange/SettingChange";
import CountryChange from "../../Components/CountrySetting/CountrySetting";

const AccountPage = () => {
  return (
    <>
      <SettingsChange header={"Email address"} content={"muhammadwalidmido@gmail.com not verified!"} />
      
      <SettingsChange header={"Change password"} content={"Password must be at least 8 characters long"} />

      <CountryChange header={"Country"} content={"This is your primary location."}></CountryChange>

    </>
  );
};

export default AccountPage;
