import React from 'react';
import { Button } from './button';

export const BasicButton = () => {
  return (
    <Button buttonText={"Hello World"} />
  );
}

export const BasicSmallButton = () => {
  return (
      <Button buttonText={"Hello World"} variant={"small"} />
  );
}

export const BasicBigButton = () => {
  return (
      <Button buttonText={"Hello World"} variant={"big"} />
  );
}

export const BasicXXLButton = () => {
  return (
      <Button buttonText={"Hello World"} variant={"xxl"} />
  );
}

export const BasicXXXLButton = () => {
  return (
      <Button buttonText={"Hello World"} variant={"xxxl"} />
  );
}

export const BasicButtonIncludesIcon = () => {
  return (
      <Button buttonText={"Hello World"} variant={"small"} hasIcon={true} />
  );
}

