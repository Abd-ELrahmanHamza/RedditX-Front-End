import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

const fontFamily = "'IBM Plex Sans', sans-serif;";
const transition = "400ms ease all";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0px auto 0;
  position: relative;
  display: ${(p) => (p.userNameScreen ? "none" : "block")};
  width: 280px;
`;

export const AuthContainerDiv = styled.span`
  display: ${(p) => (p.userNameScreen ? "none" : "block")};
`;

export const Privacy = styled.span`
  color: ${({ theme }) => theme.color.link};
`;
export const AuthHeader = styled.h2`
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  max-width: 280px;
  text-transform: none;
`;
export const AuthParagraph = styled.div`
  color: ${({ theme }) => theme.color.authParagraphColor};
  font-family: Noto Sans, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ErrorParagraph = styled.p`
  color: ${({ theme }) => theme.color.errorColor};
  display: ${(p) => (p.valid ? "none" : "block")};
  margin-top: ${(p) => (p.valid ? "-30px" : "0")};
  font-size: 12px;
  transition: all 0.2s ease-in-out;
  padding: 0 0 0 20px;
`;

export const UserNameInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInWithGoogle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;


  margin: 20px 0 5px 0;

 
  button {
    width: 100%;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.color.borderColor};
    border-radius: 100px;
    padding: 0 10px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: ${transition};

    &:hover{
      background-color: #f8f8ff;
    }
  }

  span {
    font-size: 14px;
  }

  }
`;

export const SignInWithFacebook = styled.div`
display: flex;
  justify-content: center;
  width: 100%;


  margin: 20px 0 5px 0;

  
 
  button {
    width: 100%;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.color.borderColor};
    border-radius: 100px;
    padding: 0 10px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: ${transition};


    svg {
      color: ${({ theme }) => theme.color.signInWithFacebookColor} !important;
      
    }

    &:hover{
      background-color: #f8f8ff;
    }
  }

  span {
    font-size: 14px;
  }

  
  }
`;

export const OrHeader = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.orHeaderColor};
  line-height: 0.1em;
  margin: 30px 0;
  line-height: 0 !important;
  color: ${({ theme }) => theme.color.orHeaderColor};
  font-size: 12px !important;

  span {
    background: ${({ theme }) => theme.color.baseButtonColor};
    padding: 0 10px;
  }
`;
export const Forget = styled.span`
  font-size: 12px;

  button {
    padding: 0;
    font-weight: 700;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    color: ${({ theme }) => theme.color.link};
    font-family: ${fontFamily};
  }
`;
export const MyReCAPTCHA = styled(ReCAPTCHA)`
  body {
    background-color: red;

    #rc-anchor-alert {
      color: transparent !important;
    }

    .rc-anchor-alert {
      color: transparent !important;
    }
  }
`;
export const ReCAPTCHAContainer = styled.div`
  transform: translateX(-3%) scale(0.9);
  margin: 10px 0;
  display: ${(p) => (p.validEmail ? "block" : "none")};
`;
