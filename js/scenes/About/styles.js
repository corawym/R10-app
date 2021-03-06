import { StyleSheet, Platform } from 'react-native';

import { typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  screenMargin: {
    ...Platform.select({
      ios: {
        margin: margins.marginS,
      },
      android: {
        margin: margins.marginL,
      },
    }),
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: margins.marginL,
    marginBottom: margins.marginL,
  },
  baseText: {
    fontSize: textSizes.body,
    fontFamily: typography.fontLight,
    marginBottom: margins.marginL,
    lineHeight: textSizes.title2,
  },
  aboutTitle: {
    fontSize: textSizes.title1,
    fontFamily: typography.fontRegular,
    marginBottom: margins.marginL,
  },
  logoImage: {
    width: 200,
    height: 50,
  },
  aboutIntroWrapper: {
    marginTop: margins.marginL,
  },
  footer: {
    fontSize: textSizes.tabBar,
    fontFamily: typography.fontLight,
    marginTop: margins.marginL,
  },
});

export default styles;
