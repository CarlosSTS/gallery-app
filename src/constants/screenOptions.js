import { fonts } from '../common/fonts'
import { colors } from '../common/colors'

const screenOptions = {
  headerTitleAlign: "center",
  headerBackTitleVisible: false,
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.initial,
    borderBottomWidth: 1,
    borderBottomColor: colors.green,
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontFamily: fonts.title
  },
  cardStyle: {
    backgroundColor: colors.transparent
  }
}

export default screenOptions;