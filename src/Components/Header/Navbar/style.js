import styled from "styled-components";
import { colors, darkColors } from "../../styleVariables.js";

const Wrapper = styled.div`
  padding: 20px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 600px) {
    padding: 20px 0 20px 0;
  }
`;

const Title = styled.h3`
  display: block;
  margin: 0;
  color: ${(props) => (props.darkMode ? colors.lemon : darkColors.deepBlue)};
  transition: 1.5s ease-in-out;
  background-color: transparent;
  cursor: pointer;
  text-shadow: ${(props) =>
    props.darkMode === true
      ? `0px 0px ${props.value}px rgba(152, 206, 0, 1)`
      : "none"};
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  padding-left: 20px;
  color: ${colors.blueGreen};
  padding-right: 20px;
`;

const MenuElement = styled.h4`
  margin-right: 15px;
  position: relative;
  cursor: pointer;
  color: ${(props) => (props.active === true ? colors.blueGreen : "#0280904a")};

  opacity: ${(props) =>
    props.active === true ? colors.blueGreen : colors.middleGreen};

  :after {
    position: absolute;
    bottom: 0;
    height: ${(props) => (props.active === true ? "100%" : "0%")};
    width: 3px;
    content: "";
    left: -5px;
    background-color: ${colors.lemon};
  }

  :hover:after {
    height: 100%;
    background-color: ${(props) =>
      props.active === true ? colors.lemon : colors.yellow};
  }
`;

const Button = styled.div`
  position: relative;
  color: ${(props) => (props.active === true ? colors.blueGreen : "#0280904a")};
  opacity: ${(props) =>
    props.active === true ? colors.blueGreen : colors.middleGreen};
  cursor: pointer;
  padding-right: 20px;

  :after {
    position: absolute;
    bottom: 0;
    height: ${(props) => (props.active === true ? "100%" : "0%")};
    width: 3px;
    content: "";
    left: -5px;
    background-color: #98ce00;
  }

  :hover:after {
    height: 100%;
    background-color: ${(props) =>
      props.active === true ? colors.lemon : colors.yellow};
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const ResponsiveTitle = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export {
  Wrapper,
  Title,
  Menu,
  LeftSide,
  MenuElement,
  RightSide,
  Button,
  ResponsiveTitle,
};
