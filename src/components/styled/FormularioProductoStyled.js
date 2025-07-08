import styled from "styled-components";
import { Button } from "react-bootstrap";

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  padding: 32px 24px 24px 24px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

export const StyledSmall = styled.small`
  display: block;
  margin-top: 4px;
  margin-bottom: 12px;
  color: #888;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 12px;
`;
