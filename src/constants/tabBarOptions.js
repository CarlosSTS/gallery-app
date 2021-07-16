import { Platform } from "react-native";
import { fonts } from "../common/fonts";
import { colors } from "../common/colors";

const tabBarOptions = {
  style: {
    elevation: 0,
    shadowOpacity: 0,
    height: Platform.OS === 'ios' ? 90 : 64,
    backgroundColor: colors.transparent,
    paddingBottom: 4,
    borderTopWidth: 1,
    borderTopColor: colors.rgbaDark
  },
  iconStyle: {
    flex: 0,
    height: 40,
    width: 0,
  },
  labelStyle: {
    height: 20,
    fontSize: 14,
    fontFamily: fonts.title,
  },
  // inactiveBackgroundColor: colors.white90,
  // activeBackgroundColor:  colors.off,
  inactiveTintColor: colors.rgbaDark,
  activeTintColor: colors.white,
  keyboardHidesTabBar: true
}

export default tabBarOptions;