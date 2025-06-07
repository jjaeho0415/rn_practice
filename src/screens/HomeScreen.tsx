import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LogoTitle from '../components/LogoTitle';
import useAuthStore from '../../store/useAuthStore';

// props 안받고 navigation만 사용하고 싶을때는 NativeStackNavigationProp
type Navigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const [count, setCount] = React.useState<number>(0);
  const { login, logout } = useAuthStore();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title='Update Count!'
          onPress={() => setCount(count => count + 1)}
        />
      ),
      headerStyle: { backgroundColor: 'tomato' },
      headerTitle: () => <LogoTitle />,
    });
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <Text>안녕하세요. HomeScreen 테스터입니다.</Text>
      <Text>Count: {count}</Text>
      <Button
        title='프로필 페이지로 이동'
        onPress={() => navigation.navigate('Profile', { userId: '정재호' })}
      />
      <Button title='로그인' onPress={() => login('mock-token')} />
      <Button title='로그아웃' onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
