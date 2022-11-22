// import Components
import {
  Container,
  ModalBodyContainer,
  DraftEditorContainer,
  UserName,
  UserNameContainer,
  CommentsContainer,
  PostContent,
  AsidePostChild,
  AsidePost,
} from "./Post.styled";
import NavigationPost from "Features/Post/Components/NavigationPost/NavigationPost";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import RulesWidget from "Features/Post/Components/RulesWidget/RulesWidget";
import AboutPost from "Features/Post/Components/AboutPost/AboutPost";
import ModeratorWidget from "Features/Post/Components/ModeratorWidget/ModeratorWidget";
import ScrollButton from "Features/Post/Components/ScrollButton/ScrollButton";
// import RelatedCommunities from "Features/Post/Components/RelatedCommunities/RelatedCommunities";
import CommentDraftEditor from "Features/Post/Components/CommentDarftEditor/CommentDarftEditor";
import { useState, useEffect } from "react";
import Comment from "Features/Post/Components/Comment/Comment";
import { useNavigate } from "react-router-dom";
// import TopCommunities from "../../Components/TopCommunities/TopCommunities";

/**
 *
 * Component that displays post with comments , likes displayed on show modal
 * @param show
 * @param setShow
 * @return {React.Component}
 */
const Post = ({ show, setShow }) => {
  // State for files in drat editor
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  // State for text in draft editor
  const [text, setText] = useState("");
  // State for handle show of modal window
  const [handleShowModal, setHandleShowModal] = useState(true);

  const comments = [
    {
      id: 1,
      username: "u/username",
      time: "1 hour ago",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit, voluptates laudantium mollitia aperiam nisi iste blanditiis amet doloribus dolorum libero exercitationem pariatur unde nostrum. Ab voluptatum architecto quis inventore.",
      replies: [
        {
          id: 1,
          username: "u/username",
          time: "1 hour ago",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit, voluptates laudantium mollitia aperiam nisi iste blanditiis amet doloribus dolorum libero exercitationem pariatur unde nostrum. Ab voluptatum architecto quis inventore.",
          replies: [
            {
              id: 1,
              username: "u/username",
              time: "1 hour ago",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit, voluptates laudantium mollitia aperiam nisi iste blanditiis amet doloribus dolorum libero exercitationem pariatur unde nostrum. Ab voluptatum architecto quis inventore.",
            },
          ],
        },
        {
          id: 1,
          username: "u/username",
          time: "1 hour ago",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit, voluptates laudantium mollitia aperiam nisi iste blanditiis amet doloribus dolorum libero exercitationem pariatur unde nostrum. Ab voluptatum architecto quis inventore.",
        },
        {
          id: 1,
          username: "u/username",
          time: "1 hour ago",
          body: "lorem ipsum dolor sit amet",
        },
        {
          id: 1,
          username: "u/username",
          time: "1 hour ago",
          body: "lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 1,
      username: "u/username",
      time: "1 hour ago",
      body: "lorem ipsum dolor sit amet",
    },
  ];
  return (
    <Container show={handleShowModal} backdrop={"true"}>
      <NavigationPost setHandleShowModal={setHandleShowModal} />
      <ModalBodyContainer>
        <PostContent>
          <PostShape />
          <UserNameContainer>
            Comment as <UserName>Abdelrahman_Hamza</UserName>
          </UserNameContainer>
          <DraftEditorContainer>
            <CommentDraftEditor
              files={files}
              setFiles={setFiles}
              text={text}
              setText={setText}
            />
          </DraftEditorContainer>
          <CommentsContainer>
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </CommentsContainer>
        </PostContent>
        <AsidePost>
          <AsidePostChild>
            <AboutPost />
            <RulesWidget />
            {/*<RelatedCommunities/>*/}
            {/*<TopCommunities/>*/}
            <ModeratorWidget />
            <ScrollButton />
          </AsidePostChild>
        </AsidePost>
      </ModalBodyContainer>
    </Container>
  );
};

export default Post;
