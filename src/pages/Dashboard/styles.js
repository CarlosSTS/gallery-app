import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';

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

export const ListHeader = styled.View`
margin-top: 5px;
`;

export const ListFooter = styled.View`
margin-bottom: 5px;
`;

export const UserBookIcon = styled(MaterialCommunityIcons).attrs({
   size:100,
   name:"library",
})`
margin-top: 5px;
color: ${colors.off}
`;

export const ContainerOff = styled.View`
flex:1;
justify-content:center;
align-items:center;
background-color: ${colors.transparent};
`;

export const NameOff = styled.Text`
color: ${colors.off};
font-size: 20px;
margin: 20px;
font-family: ${fonts.title};
`;
