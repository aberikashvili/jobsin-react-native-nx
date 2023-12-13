import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';

type CustomBottomSheetProps = {
  isVisible: boolean;
  height: number;
  onClose: () => void;
  children: React.ReactNode;
};

export const Bottom: React.FC<CustomBottomSheetProps> = ({
  isVisible,
  height,
  onClose,
  children,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.7}
      style={{ margin: 0, justifyContent: 'flex-end' }}
    >
      <View
        style={{
          backgroundColor: 'white',
          height,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 16,
        }}
      >
        <Pressable onPress={onClose}>
          <Text style={{ textAlign: 'right', fontSize: 18, color: 'blue' }}>
            Close
          </Text>
        </Pressable>
        {children}
      </View>
    </Modal>
  );
};

export default Bottom;
