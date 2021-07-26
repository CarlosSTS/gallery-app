import React, { useState, useRef, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import {
  setField,
  saveSerie,
  setWholeSerie,
  resetForm
} from '../../store/modules/serieForm/action';

import Background from '../../components/Background'
import SelectImage from '../../components/SelectImage';
import SelectPicker from '../../components/SelectPicker';
import SelectSlider from '../../components/SelectSlider';

import {
  Container,
  FormContainer,
  FormInput,
  SubmitButton
} from './styles';

const Form = ({ serieForm, setField, saveSerie, setWholeSerie, resetForm }) => {
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const descriptionRef = useRef();
  const pickerRef = useRef();
  const [loading, setLoading] = useState(false)

  // Ajeitar aqui
  useEffect(() => {
    if (params && params.serie) {
      return setWholeSerie(params.serie)
    }
    return resetForm()
  }, [params]);

  async function handleSaveSerie() {
    if(serieForm.title.length <= 2) {
     return Alert.alert('Ops', 'Título com mínimo de 3 digitos')
    }
    
    setLoading(true)
    try {
      await saveSerie(serieForm)
      navigate('Dashboard', { screen: 'Dashboard' })
      Alert.alert('Sucesso', `Salvamos ${serieForm.title} a sua galeria`)

    } catch (error) {
      Alert.alert('Aviso', 'Não conseguimos salvar sua série')
      // console.tron.log(error)
    } finally {
      setLoading(false)
    }
  }

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
            onSubmitEditing={handleSaveSerie}
          />

          <SubmitButton loading={loading}
            onPress={handleSaveSerie}>
            Salvar
          </SubmitButton>

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
  setField,
  saveSerie,
  setWholeSerie,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);