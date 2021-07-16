import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../common/colors';

export const Container = styled.View`
  flex: 1;
  padding-top:  10px;  
`;

export const SeriesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
  onEndReachedThreshold:0.2,
})`
`;
export const Form = styled.View`
padding: 0 10px;
flex-direction: row;
padding-bottom: 10px;
`;

export const SubmitButton = styled(RectButton)`
justify-content:center;
align-items:center;
background-color: ${colors.blue};
border-radius: 4px;
margin-left: 10px;
padding: 0 16px;
`;

export const ListHeader = styled.View`
margin-top: 5px;
`;

export const ListFooter = styled.View`
margin-bottom: 5px;
`;