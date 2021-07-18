import React, { useState, useRef } from 'react';
import { connect } from 'react-redux'

import { setField } from '../../store/modules/serieForm/action';

import Background from '../../components/Background'
import SelectImage from '../../components/SelectImage';
import SelectPicker from '../../components/SelectPicker';
import SelectSlider from '../../components/SelectSlider';

import { Container, FormContainer, FormInput, SubmitButton } from './styles';

const Form = ({ serieForm, setField }) => {
  const descriptionRef = useRef();
  const pickerRef = useRef();
  const [loading, setLoading] = useState(false)

  return (
    <Background>
      <Container>
        <FormContainer>
          <FormInput
            icon='drive-file-rename-outline'
            autoCapitalize='none'
            placeholder="Nome da série"
            returnKeyType='next'
            value={serieForm.title}
            onChangeText={value => setField('title', value)}
            //onSubmitEditing={() => pickerRef.current.focus()}
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
            ref={pickerRef}
            onBlur={() => descriptionRef.current.focus()}
            value={serieForm.gender}
            onValueChange={value => setField('gender', value)}
          />

          <FormInput
            numberOfLines={4}
            ref={descriptionRef}
            icon='edit'
            autoCapitalize='none'
            placeholder="Descrição"
            returnKeyType='send'
            value={serieForm.description}
            onChangeText={value => setField('description', value)}
            onSubmitEditing={() => console.log(serieForm)}
          />

          <SubmitButton loading={loading} onPress={() => console.log(serieForm)}>Salvar</SubmitButton>
        </FormContainer>

      </Container>
    </Background>
  )
}
function mapStateToProps(state) {
  return {
    serieForm: state.serieForm
  }
}

const mapDispatchToProps = {
  setField
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);