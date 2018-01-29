// @flow
import React from 'react';
import { ProgressBarAndroid } from 'react-native';

type Props = {
  progress: number,
  color: string,
};

const ProgressBar = (props: Props) => (
  <ProgressBarAndroid
    {...props}
    styleAttr="Horizontal"
    indeterminate={false}
    progress={props.progress ? props.progress / 100 : 0.5}
    color={props.color ? props.color : '#FFF'}
  />
);

export default ProgressBar;
