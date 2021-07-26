import styled from 'styled-components/native'
import { colors } from '../../common/colors'
import { fonts } from '../../common/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const ImagePhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${colors.rgbaDark};
`;

export const Greetings = styled.Text`
font-size: 24px;
color: ${colors.white};
font-family: ${fonts.title};
`;

export const UserName = styled.Text`
font-size: 24px;
font-family: ${fonts.subTitle};
color: ${colors.white};
`;

export const AddPhoto = styled(MaterialIcons).attrs({
  name: 'add-a-photo',
  color: colors.rgbaLight,
  size: 24,
})`
position: absolute;
right: 0;
padding: 0 20px;
margin-top: 30%;
`;