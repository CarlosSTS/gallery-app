import styled from 'styled-components/native';
import {colors} from '../../common/colors';
import { fonts } from '../../common/fonts';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background-color: ${colors.rgbaDark};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.rgbaLight,
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${colors.white};
  font-family: ${fonts.subTitle};
`;