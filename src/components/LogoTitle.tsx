import {Image} from 'react-native';
import React from 'react';

const LogoTitle = () => {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('assets/images/gom.png')}
    />
  );
};

export default LogoTitle;
