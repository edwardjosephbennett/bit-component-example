import React, { ReactNode } from 'react';

import { ButtonGroup } from "@edwardjosephbennett/bit-component-demo.button-group";
import { Button } from "@edwardjosephbennett/bit-component-demo.button";

import "./header.scss";

export function Header() {
  return (
    <header id="header" data-testid="header">
      <div className="top-bar">
        <div className="container">
          <ul className="top-bar__nav">
            <li><a href="/">Login</a></li>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">01234 5678</a></li>
          </ul>
        </div>
      </div>
      <div className="header container">
        <a href="/">Logo</a>

          <ButtonGroup direction={"row"}>
              <Button buttonText={"Basket"} variant={"big"} />
              <Button buttonText={"Special Offers"} variant={"xxl"} />
          </ButtonGroup>
      </div>
      <nav className="nav">
        <div className="container">
          <ul>
            <nav className="nav__list">
              <li className="nav__item">Nav Item One</li>
              <li className="nav__item">Nav Item Two</li>
              <li className="nav__item">Nav Item Three</li>
              <li className="nav__item">Nav Item Four</li>
            </nav>
          </ul>
        </div>
      </nav>

    </header>
  );
}
