import React from "react";
import styled from "styled-components";

const Card = ({ children, className }: any) => {
  return (
    <div className={className}>
      <div className={"app-card"}>{children}</div>
    </div>
  );
};

const StyledCard = styled(Card)`
  border-radius: ${({ noBorder }) => (noBorder ? "" : "0.375rem")}
  position: relative;
  background-color: #fff;
  border: ${({ noBorder }) => (noBorder ? "" : "1px solid #ddd;")} 
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  padding: 25px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export default StyledCard;
