import React, { useRef } from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

type BottomSheetProps = {
  children: React.ReactNode;
};

export const BottomSheet = ({ children }: BottomSheetProps) => {
  const bottomSheetRef = useRef<Modalize>(null);

  const openBottomSheet = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };

  return (
    <>
      <TouchableOpacity onPress={openBottomSheet}>
        <Text>Open BottomSheet</Text>
      </TouchableOpacity>

      <Modalize ref={bottomSheetRef}>{children}</Modalize>
    </>
  );
};

export default BottomSheet;
