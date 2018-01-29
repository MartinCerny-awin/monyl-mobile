// @flow
import React from 'react';
import { ProgressViewIOS } from 'react-native';
import color from 'color';

type Props = {
  progress: number,
  color: string,
};

const ProgressBar = (props: Props) => (
  <ProgressViewIOS
    {...props}
    progress={props.progress ? props.progress / 100 : 0.5}
    progressTintColor={props.color ? props.color : '#FFF'}
    trackTintColor={color(props.color)
      .lighten(1)
      .hex()}
  />
);

export default ProgressBar;
