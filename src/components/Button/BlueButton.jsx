import styled from "styled-components";
import { Button } from "./Button";

export const BlueButton = styled(Button)`
  color: rgb(255, 255, 255);
  border-color: rgba(0, 0, 0, 0);
  background-color: ${(props) => props.theme.colors.blue};
`;
