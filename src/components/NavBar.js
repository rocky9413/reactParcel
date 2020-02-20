import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./Misc/colors";

const NavBar = () => {
  const Spin = keyframes`
    to {
        transform: rotate(360deg);
    }
    `;

  return (
    <header
      css={css`
        background-color: ${colors.light};
        padding: 15px;
        position: sticky;
        top: 0;
        z-index: 10;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          display: inline-block;
          animation: 1.5s ${Spin} linear infinite;
          font-size: 45px;
          &:hover {
            text-decoration: underline;
          }
        `}
        aria-label="logo"
        role="img"
      >
        🐕
      </span>
    </header>
  );
};

export default NavBar;
