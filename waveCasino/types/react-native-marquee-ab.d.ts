declare module 'react-native-marquee-ab' {
    import React from 'react';
    import { ViewStyle } from 'react-native';
  
    interface MarqueeProps {
      style?: ViewStyle;
      duration?: number;
      marqueeOnStart?: boolean;
      children?: React.ReactNode;
    }
  
    const Marquee: React.FC<MarqueeProps>;
  
    export default Marquee;
  }