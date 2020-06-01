import styled from "styled-components";
import { colors, darkColors } from "../../styleVariables.js";

const Wrapper = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) =>
    props.darkMode === true ? colors.lemon : darkColors.deepBlue};
  transition: 1.5s ease-in-out;
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
    bottom: -5px;
    height: 2px;
    width: 0%;
    content: "";
    left: 0;
    background-color: #98ce00;
    transition: 0.2s ease-in;
  }

  :hover:after {
    width: 100%;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export { Wrapper, Title, Menu, LeftSide, MenuElement };
