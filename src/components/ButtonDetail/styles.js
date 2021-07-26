import styled from 'styled-components/native';
import {colors} from '../../common/colors';
import {fonts} from '../../common/fonts';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
width: 50%;
border-radius: 4px;
margin-top: 20px;
height: 46px;
background-color: ${colors.green};

align-items: center;
justify-content: center;
`;

export const Text = styled.Text`
color: ${colors.white};
font-size: 16px;
font-family: ${fonts.subTitle};
`;
