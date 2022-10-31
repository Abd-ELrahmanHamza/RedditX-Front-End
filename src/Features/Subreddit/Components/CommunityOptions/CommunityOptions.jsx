import { useState } from "react";
import Form from "react-bootstrap/Form";
import { BsEye } from "react-icons/bs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import {
  CommunityTheme,
  Container,
  OptionsButtons,
  StyledForm
} from "./CommunityOptions.styled";

const CommunityOptions = () => {
  const [down, setDown] = useState(true);
  const [toggle, setToggel] = useState(true);
  function clickHandler() {
    setDown((prev) => !prev);
  }

  function toggleHandler() {
    setToggel((prev) => !prev);
  }

  function Switch() {
    return (
      <StyledForm>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={toggle}
          onChange={toggleHandler}
        />
      </StyledForm>
    );
  }

  return (
    <Container>
      <OptionsButtons onClick={clickHandler}>
        community options
        {down && (
          <span className="icon">
            <RiArrowDownSLine />
          </span>
        )}
        {!down && (
          <span className="icon">
            <RiArrowUpSLine />
          </span>
        )}
      </OptionsButtons>
      {!down && (
        <CommunityTheme>
          <label>
            <span className="icon">
              <BsEye />
            </span>
            Community theme
          </label>
          <Switch />
        </CommunityTheme>
      )}
    </Container>
  );
};

export default CommunityOptions;
