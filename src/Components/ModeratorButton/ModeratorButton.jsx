// imports
import React from "react";
import { MdOutlineRemoveModerator } from "react-icons/md";
import { ButtonModerator } from "./ModeratorButton.styled";
import Dropdown from "react-bootstrap/Dropdown";
import { TbBoxModel2 } from "react-icons/tb";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

/**
 * Component to display the dropdown button with dropdown results
 *
 * @returns {React.Component}
 */
const ModeratorButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <OverlayTrigger
        key={"bottom"}
        placement={"bottom"}
        overlay={<Tooltip id={`tooltip-bottom`}>Moderator</Tooltip>}
      >
        <ButtonModerator id={"moderator-button"}>
          <Dropdown.Toggle as={MdOutlineRemoveModerator} />
          <Dropdown.Menu id={"moderator-menu"}>
            <Dropdown.Item href="#">
              <span>
                <TbBoxModel2 />
              </span>
              <span onClick={() => navigate("/queues")}>Mod Queue</span>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <span>
                <FiMail />
              </span>
              <span>Modmail</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </ButtonModerator>
      </OverlayTrigger>
    </>
  );
};

export default ModeratorButton;
