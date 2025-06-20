import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "delete" | "pay" | "plus" | "minus" | "next" | "back";
  full?: boolean;
  $active?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;

    ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${(props) =>
    props.variant == "plus" &&
    css`
      background-color: #208D4E;
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;

      &:hover {
        background-color: #186b3c;
      }
    `}

  ${(props) =>
  props.variant === "minus" &&
  css`
    background-color: ${props.$active ? "#208D4E" : "#CECECE"};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    &:hover {
      background-color: ${props.$active ? "#186b3c" : "#b5b5b5"};
    }
  `}


  ${(props) =>
    props.variant == "delete" &&
    css`
      background-color: #208D4E;
      color: white;
      width: 110px;
      height: 43px;
      float: right;
      border-radius: 30px;
      user-select: none;

      &:hover {
        background-color: #15803d;
      }
    `}

  ${(props) =>
      props.variant == "pay" &&
      css`
        background-color: #249D57;
        color: white;
        width: 200px;
        height: 50px;
        float: right;
        border-radius: 15px;
        font-size: 18px;

        &:hover {
          background-color: #15803d;
        }
    `}

  ${(props) =>
      props.variant == "next" &&
      css`
        background-color: #208D4E ;
        color: white;
        width: 450px;
        height: 50px;
        float: right;
        border-radius: 15px;          
        font-size: 18px;

        &:hover {
          background-color: #15803d;
        }
      `}

  ${(props) =>
      props.variant == "back" &&
      css`
        background-color: #D0D0D0;
        color: black;
        width: 450px;
        height: 50px;
        float: left;
        border-radius: 15px;
        font-size: 18px;

      `}

  ${(props) =>
    props.full &&
    css`
      width: 100%;
      font-size: 1.125rem;
      padding: 0.5rem;
      border-radius: 1rem;
    `}
`;

const Button: React.FC<ButtonProps> = ({ variant, full, ...props }) => {
  return <StyledButton variant={variant} full={full} {...props} />;
};

export default Button;