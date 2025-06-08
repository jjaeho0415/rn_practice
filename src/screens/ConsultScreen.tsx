import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/globalType';
import colors from '@/styles/colors';
import SelectLocationHeader from '@/components/SelectLocationHeader';

type Props = NativeStackScreenProps<RootStackParamList, 'Consult'>;

type sortOption = '거리순' | '인기순' | '추천순' | '최저가순';
const backArrowIcon = require('../../assets/icons/arrow/backArrow.png');

const ConsultScreen = ({ navigation, route }: Props) => {
  const categoryName = route.params.categoryName;
  const [sortOption, setSortOption] = useState<sortOption>('인기순');
  const [isSortOptionModalOpen, setIsSortOptionModalOpen] =
    useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={backArrowIcon}
            style={{ width: 22, height: 22, marginRight: 16 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: colors['p-black'],
              fontWeight: 'bold',
            }}>
            {categoryName}
          </Text>
        </TouchableOpacity>
      ),
      headerTitle: '',
      headerShown: true,
    });
  }, [navigation, categoryName]);

  return (
    <View>
      <SelectLocationHeader />
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.sortOptionButton}>
          <Text style={styles.sortOptionButtonText}>{sortOption}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  sortOptionButton: {
    width: 56,
    height: 30,
    backgroundColor: colors['p-black'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
  },
  sortOptionButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ConsultScreen;
