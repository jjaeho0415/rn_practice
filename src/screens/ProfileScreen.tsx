import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// props 받고 navigation을 사용하고 싶을때 NativeStackScreenProps 사용
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ navigation, route }: Props) => {
  const {userId} = route.params || {};
  return (
    <View style={styles.mainContainer}>
      <Text>안녕하세요, {userId ?? '사용자'}님</Text>
      <Button
        title="프로필 페이지로 이동하기"
        onPress={() => navigation.push('Profile', {userId: '정재호'})}
      />
      <Button title="뒤로 이동하기" onPress={() => navigation.goBack()} />
      <Button
        title="처음 화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
