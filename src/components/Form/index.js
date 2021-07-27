import React,{useRef} from 'react';

import {
  Container,
  FormInput,
  SubmitButton,
  ErasedButton,
  FormContainer
} from './styles';

import Background from '../Background'
import SelectImage from '../SelectImage';
import SelectPicker from '../SelectPicker';
import SelectSlider from '../SelectSlider';

const Form = ({loading, serieForm,setField, saveSerie, resetForm }) => {

  const descriptionRef = useRef();
  const pickerRef = useRef();

  return (
    <Background>
      <Container>
        <FormContainer>
          <FormInput
            icon='drive-file-rename-outline'
            placeholder="Nome da série"
            returnKeyType='next'
            autoCorrect={false}
            maxLength={35}
            value={serieForm.title}
            onChangeText={value => setField('title', value)}
            onSubmitEditing={() => pickerRef.current.focus()}
          />

          <SelectImage
            value={serieForm.img}
            onValueChange={value => setField('img', value)}
          />

          <SelectSlider
            value={serieForm.rate}
            onValueChange={value => setField('rate', value)}
          />

          <SelectPicker
            onFocus={pickerRef}
            ref={pickerRef}
            onBlur={() => descriptionRef.current.focus()}
            value={serieForm.gender}
            onValueChange={value => setField('gender', value)}
          />

          <FormInput
            numberOfLines={4}
            ref={descriptionRef}
            icon='edit'
            placeholder="Descrição"
            returnKeyType='send'
            value={serieForm.description}
            onChangeText={value => setField('description', value)}
            onSubmitEditing={saveSerie}
          />

          <SubmitButton loading={loading}
            onPress={saveSerie}>
            Salvar
          </SubmitButton>
          <ErasedButton
            onPress={resetForm}>Limpar formulário
            </ErasedButton>
        </FormContainer>

      </Container>
    </Background>
  )
}

export default Form;