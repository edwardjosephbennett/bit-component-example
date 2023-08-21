import React, { ReactNode } from 'react';
import { Button } from "@edwardjosephbennett/bit-component-demo.button";
import "./button-group.scss";

export type ButtonGroupProps = {
   /**
    * a node to be rendered in the special component.
    */
    direction: "stacked" | "row"
    children: ReactNode;
};

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <div className={"button-group"} data-direction={props.direction}>
        {props.children}
    </div>
  );
}
