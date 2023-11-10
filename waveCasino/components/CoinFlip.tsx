import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const CoinFlip: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const coinRef = useRef<Animatable.View>(null);

  const flipCoin = () => {
    const randomNumber = Math.random();
    const newResult = randomNumber < 0.5 ? 'Heads' : 'Tails';

    setResult(null);

    setTimeout(() => {
      setResult(newResult);
    }, 500);

    // Animation sequence
    if (coinRef.current) {
      coinRef.current.flipInY(500)
        .then(() => coinRef.current?.shake(400))
        .then(() => coinRef.current?.flipOutY(500));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={flipCoin}>
        <Animatable.View
          ref={coinRef}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            backgroundColor: 'gold',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {result !== null && <Text style={{ fontSize: 24, color: 'black' }}>{result}</Text>}
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

export default CoinFlip;
