import {
  OddItems,
  ListBtns,
  Btns,
  BtnsLinks,
  Subject,
  SubjectText,
  Msg,
  Tagline,
  Author,
  MessageDetails,
  TimeTag,
  AreYouSure,
  BtnWarning,
  Visted,
} from "./MessageItem.styled";
import ReportModal from "../ReportModal/ReportModal";
import markUnread from "../../Utils/MarkUnread";
import readed from "../../Utils/Read";


/**
 * Component that contains the ordinary message item
 *
 * @Component
 * @param {Function} changeMessage - Function that changes the contents of the current message
 * @param {string} aurthor - Message Sender
 * @param {string} title - Message Title
 * @param {Date} time - Time the message was sent
 * @param {string} msg - The Message Text
 * @param {boolean} admin - Whether the message was sent by an admin
 * @param {boolean} read - Whether the message was read or not
 * @param {boolean} deleted - Whether the message was deleted or not
 * @param {boolean} block - Whether the message was sent by a blocked user
 * @param {number} id - Id of the message
 * @returns {React.Component}
 */
const NormalMessageAll = ({
  changeMessage,
  aurthor,
  title,
  time,
  msg,
  admin,
  read,
  id,
  deleted,
  block,
}) => {
  

  function toggleDeleteWarning(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, delete: !prevState.delete }
          : prevState;
      });
    });
  }
  function toggleBlockWarning(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, block: !prevState.block }
          : prevState;
      });
    });
  }

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          readed(id, changeMessage, read);
        }}
      >
        <Subject>
          <SubjectText>{title}:</SubjectText>
        </Subject>
        <Tagline>
          from <Author className={admin ? "admin" : ""}>{aurthor}</Author>
          <TimeTag className={admin ? "active" : ""}>
            <time dateTime="20/10/2022">{time} </time>
          </TimeTag>
        </Tagline>
        <Visted className={read ? "" : "read-before"}>
          <Msg>{msg}</Msg>
          <ListBtns>
            <Btns>
              <BtnsLinks>Permalink</BtnsLinks>
            </Btns>
            <Btns>
              <BtnsLinks
                className={deleted ? "active" : ""}
                onClick={() => {
                  toggleDeleteWarning(id);
                }}
              >
                Delete
              </BtnsLinks>
              <AreYouSure className={deleted ? "active" : ""}>
                <BtnWarning> Are You Sure </BtnWarning>
                <BtnsLinks>Yes</BtnsLinks>
                <BtnWarning> / </BtnWarning>
                <BtnsLinks
                  onClick={() => {
                    toggleDeleteWarning(id);
                  }}
                >
                  No
                </BtnsLinks>
              </AreYouSure>
            </Btns>

            {!admin && (
              <Btns>
                <BtnsLinks>
                  <ReportModal />
                </BtnsLinks>
              </Btns>
            )}
            {!admin && (
              <Btns>
                <BtnsLinks
                  className={block ? "active" : ""}
                  onClick={() => {
                    toggleBlockWarning(id);
                  }}
                >
                  Block User
                </BtnsLinks>
                <AreYouSure className={block ? "active" : ""}>
                  <BtnWarning> Are You Sure </BtnWarning>
                  <BtnsLinks>Yes</BtnsLinks>
                  <BtnWarning> / </BtnWarning>
                  <BtnsLinks
                    onClick={() => {
                      toggleBlockWarning(id);
                    }}
                  >
                    No
                  </BtnsLinks>
                </AreYouSure>
              </Btns>
            )}
            {read && (
              <Btns>
                <BtnsLinks
                  onClick={(e) => {
                    e.stopPropagation();
                    markUnread(id, changeMessage, read);
                  }}
                >
                  Mark Unread
                </BtnsLinks>
              </Btns>
            )}
            <Btns>
              <BtnsLinks>Reply</BtnsLinks>
            </Btns>
          </ListBtns>
        </Visted>
      </MessageDetails>
    </OddItems>
  );
};

export default NormalMessageAll;
