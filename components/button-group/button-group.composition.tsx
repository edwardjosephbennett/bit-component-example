import React from 'react';
import { ButtonGroup } from './button-group';
import {Button} from "@edwardjosephbennett/bit-component-demo.button";

export const BasicButtonGroupStacked = () => {
  return (
    <ButtonGroup direction={"stacked"}>
      <Button buttonText={"Button One"} variant={"small"} />
      <Button buttonText={"Button Two"} variant={"small"} />
    </ButtonGroup>
  );
}

export const BasicButtonGroupRow = () => {
  return (
    <ButtonGroup direction={"row"}>
      <Button buttonText={"Button One"} variant={"small"} />
      <Button buttonText={"Button Two"} variant={"small"} />
    </ButtonGroup>
  );
}
