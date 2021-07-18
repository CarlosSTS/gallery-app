import styled from 'styled-components/native';
import {colors} from '../../common/colors';

export const Container = styled.View`
  height: 50px;
  background-color: ${colors.rgbaDark};
  border-radius: 4px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 10px;
`;

export const Title = styled.Text`
font-size: 13px;
color: ${colors.white};
`;

export const Info = styled.View`
flex-direction: row;
justify-content: space-between;
`;