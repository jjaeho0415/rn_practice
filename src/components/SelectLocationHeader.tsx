import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '@/styles/colors';
import useLocationStore from '../../store/useLocationStore';

const SelectLocationHeader = () => {
  const { address } = useLocationStore();

  return (
    <View style={styles.headerContainer}>
      <Text style={{ color: colors.white, fontWeight: 'bold', fontSize: 14 }}>
        {!address ? '현재 위치를 설정해주세요.' : address}
      </Text>
      <TouchableOpacity style={styles.selectLocationButton}>
        <Text style={styles.selectLocationButtonText}>내 위치 설정</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors['p-brown'],
    paddingHorizontal: 16,
  },
  selectLocationButton: {
    width: 77,
    height: 22,
    borderRadius: 4,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectLocationButtonText: {
    color: colors['p-brown'],
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default SelectLocationHeader;
