import styled from 'styled-components/native';
import {StyleSheet} from 'react-native'
import {fonts} from '../../common/fonts';

export const Container = styled.View`
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const Label = styled.Text`
  flex: 1;
  font-weight: bold; 
  font-size: 18px;
  padding-bottom: 8px;
  text-decoration: underline;
  font-family: ${fonts.subTitle};
`;

export const Content = styled.Text`
  font-size: 16px;
  flex: 3;
  text-align: justify;
  font-family: ${fonts.title};
`;

 const styles = StyleSheet.create({
  collapsed : {
    maxHeight: 65,
  },
  expanded: {
    flex: 1,
  }
});
export default styles;
