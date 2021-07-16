import { fonts } from '../common/fonts'
import { colors } from '../common/colors'

const screenOptions = {
  headerTitleAlign: "left",
  headerBackTitleVisible: false,
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.initial,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
  },
  headerTitleStyle: {
    fontFamily: fonts.title,
    fontSize: 16,
  },
  cardStyle: {
    backgroundColor: colors.transparent
  }
}

export default screenOptions;