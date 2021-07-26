import { Dimensions, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';

export const Container = styled.View`
  width: 50%; 
  padding: 5px;
  height: ${Dimensions.get('window').width / 2};
`;

export const Card = styled(RectButton)`
  flex: 1;
  border-width: 1px;
`;

export const Image = styled.Image.attrs({
  aspectRatio: 1,
  resizeMode: 'cover'
})`
background-color: ${colors.transparent};
`;

export const Wrapper = styled.View`
background-color: ${colors.black};
position: absolute;
bottom: 0;
opacity: 0.8;
width: 100%;
height: 50px;
padding: 10px 3px;
align-items: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
color: ${colors.white};
font-size: 16px;
font-weight: bold;
font-family: ${fonts.subTitle};
`;

const styles = StyleSheet.create({
  first: {
    paddingLeft: 10
  },
  last: {
    paddingRight: 10
  },
  imageOff: {
    flex: 1,
  }
});

export default styles;