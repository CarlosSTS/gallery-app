import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';

export const Container = styled(RectButton)`
  height: 46px;
  border-radius: 4px;
  background-color: ${colors.blue};

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.subTitle};
`;