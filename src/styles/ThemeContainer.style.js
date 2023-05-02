import styled from "styled-components";

export const ThemeContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  transition: all 0.25s ease;
`;
