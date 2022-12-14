import {
    ComponentDiv,
    LeftDiv,
    RightDiv,
    HeaderDiv,
    ComponentHeader,
    ComponentContent,
    HeaderSpan,
    SeparateorSpan,
    DateSpan,
    DotsButton,
    ProfileImage,
} from "./NotificationItem.styled";
import ParseDateFromNow from "Features/User/Utils/ParseDateFromNow";
import { useState } from "react";

const NotificationItem = ({header, content, date}) => {
    const [showPrompt, setShowPrompt] = useState(false);
    const handleClick = ()=> {
        setShowPrompt((prev)=>!prev);
    }
    return (
        <ComponentDiv>
            <LeftDiv>
                <ProfileImage src="https://styles.redditmedia.com/t5_l3aq2/styles/profileIcon_nlatl3ukwgm41.jpg?width=64&height=64&frame=1&crop=64:64,smart&v=enabled&s=b67e54b1762b178464eddc8007cdb6e268741581"/>
            </LeftDiv>

            <RightDiv>
                <HeaderDiv>
                    <HeaderSpan>
                        <ComponentHeader>
                            {header}
                        </ComponentHeader>
                        <SeparateorSpan> . </SeparateorSpan>
                        <DateSpan>{ParseDateFromNow(date).toDateString()}</DateSpan>
                    </HeaderSpan>
                    <DotsButton onClick={handleClick}>…</DotsButton>
                    {/* <div className={showPrompt?"dropdown-active":"dropdown"}>
                        <a>click here for a scam</a>
                    </div> */}
                </HeaderDiv>
                <ComponentContent>
                    {content}
                </ComponentContent>
            </RightDiv>

        </ComponentDiv>
    );
 };
  
  export default NotificationItem;