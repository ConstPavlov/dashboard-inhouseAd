import React from 'react';
import classNames from 'classnames';
import { IButton } from './button.interface';
import styles from './Button.module.scss';

export const Button: React.FC<IButton> = ({
  children,
  styleBtn,
  color,
  clickFn,
  ...rest
}) => {
  return (
    <div
      {...rest}
      onClick={clickFn}
      style={{ backgroundColor: color }}
      className={classNames(styles.button, {
        [styleBtn ? styleBtn : '']: !!styleBtn,
      })}
    >
      {children}
    </div>
  );
};
