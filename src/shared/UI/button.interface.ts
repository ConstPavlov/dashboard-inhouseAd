import React from 'react';

export interface IButton {
  styleBtn?: string;
  children: React.ReactNode;
  color?: string;
  clickFn?: () => void;
}
