import styled from 'styled-components/native';
import { colors } from '../../common/colors';
import {fonts} from '../../common/fonts';

export const Container = styled.View`
    flex-direction: row;
    padding-top: 3px;
    padding-bottom: 3px;
    border-width: 1px;
    border-color: ${colors.blue};
`;

export const Label = styled.Text`
  flex: 1;
  font-weight: bold; 
  font-size: 18px;
  padding-left: 5px;
  font-family: ${fonts.subTitle};
`;

export const Content = styled.Text`
  flex: 3;
  font-size: ${props => (props.content.length > 20 ? 15 : 18)}px;
  padding-left: 5px;
  font-family: ${fonts.title};
  color: ${props => (props.color ? colors.white: colors.black)};
`;
