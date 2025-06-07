declare global {
  type RootStackParamList = {
    Home: undefined;
    Profile: {userId?: string};
  };
}

export {};
