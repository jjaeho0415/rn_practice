import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/globalType';
import colors from '@/styles/colors';
import SelectLocationHeader from '@/components/SelectLocationHeader';

// props 안받고 navigation만 사용하고 싶을때는 NativeStackNavigationProp
type Navigation = NativeStackNavigationProp<RootStackParamList, "Home">;

const CARD_GAP = 16;
const screenWidth = Dimensions.get('window').width;
const cardSize = (screenWidth - CARD_GAP * 3) / 2;

const logoIcon = require('../../assets/logo/logoImage.png');
const accIcon = require('../../assets/icons/category/accIcon.png');
const breederIcon = require('../../assets/icons/category/breederIcon.png');
const rainbowIcon = require('../../assets/icons/category/rainbowIcon.png');
const consultIcon = require('../../assets/icons/category/consultIcon.png');

type CardRoute = Exclude<keyof RootStackParamList, 'Home'>;

type cardType = {
  label: string[];
  icon: React.JSX.Element;
  backgroundColor: string;
  borderColor: string;
  route: CardRoute;
  categoryName: string;
}

const HomeScreen = () => {
  const navigation = useNavigation<Navigation>();

  const cards:cardType[] = [
    {
      label: ['내 주변 장묘업체', '찾아보기'],
      icon: <Image source={rainbowIcon} style={styles.cardIcon} />,
      backgroundColor: colors['p-brown'],
      borderColor: '#443129',
      route: 'Burial',
      categoryName: '장묘',
    },
    {
      label: ['추억할 수 있는', '악세사리 만들기'],
      icon: <Image source={accIcon} style={styles.cardIcon} />,
      backgroundColor: '#DA7F4D',
      borderColor: '#B95B28',
      route: 'Accessory',
      categoryName: '악세사리',
    },
    {
      label: ['새로운 만남을 위해', '브리더와 상담하기'],
      icon: <Image source={breederIcon} style={styles.cardIcon} />,
      backgroundColor: '#F5AB49',
      borderColor: '#DF9C46',
      route: 'Breeder',
      categoryName: '브리더',
    },
    {
      label: ['펫로스 증후군', '전문 상담하기'],
      icon: <Image source={consultIcon} style={styles.cardIcon} />,
      backgroundColor: '#9BB069',
      borderColor: '#89A34C',
      route: 'Consult',
      categoryName: "상담"
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={logoIcon} style={{ width: 81, height: 30 }} />
      </View>
      <SelectLocationHeader />

      <View style={styles.grid}>
        {cards.map((card, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              styles.card,
              {
                backgroundColor: card.backgroundColor,
                borderColor: card.borderColor,
              },
            ]}
            onPress={() =>
              navigation.navigate(card.route, {categoryName: card.categoryName})
            }>
            {card.label.map((line, i) => (
              <Text key={i} style={styles.cardText}>
                {line}
              </Text>
            ))}
            <View style={styles.cardIcon}>{card.icon}</View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 16,
    flex: 1,
    backgroundColor: colors.white,
  },
  logoContainer: {
    padding: 16,
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 0.5,
    padding: 15,
    width: cardSize,
    height: cardSize,
    borderRadius: 16,
    marginBottom: CARD_GAP,
    position: 'relative',
  },
  cardIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default HomeScreen;
