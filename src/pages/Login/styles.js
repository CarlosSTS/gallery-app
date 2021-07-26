import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { colors } from '../../common/colors';
import { fonts } from '../../common/fonts';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  `;

export const Version = styled.Text`
font-size: 16px;
margin-top: 40px;
color: ${colors.white};
font-family: ${fonts.subTitle};
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  `;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  `;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  `;