import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components/native';
import {colors} from '../../common/colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 0 15px;
  height: 100px;
  background-color: ${colors.rgbaDark};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  name:'image-plus',
  size:50,
})`
color:${colors.rgbaLight};
`;

export const Image = styled.Image.attrs({
})`
width: 110%;
height: 100%;
`;