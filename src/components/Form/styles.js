import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../Input';
import ButtonDetail from '../ButtonDetail';
import { colors } from '../../common/colors';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  `;

export const FormContainer = styled.View`
align-self: stretch;
margin-top: 50px;
`;

export const FormInput = styled(Input)`
margin-bottom: 10px;
`;

export const SubmitButton = styled(ButtonDetail)`
margin-top: 5px;
width: 100%;
background-color: ${colors.blue};
`;

export const ErasedButton = styled(ButtonDetail)`
align-self:center;
background-color: ${colors.transparent};
`;