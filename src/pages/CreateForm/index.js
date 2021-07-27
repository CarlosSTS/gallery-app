import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import {
  setField,
  saveSerie,
  resetForm,
  handleResetForm
} from '../../store/modules/serieForm/action';

import Form from '../../components/Form';

const CreateForm = ({ serieForm, setField, saveSerie, resetForm,handleResetForm }) => {
  const { navigate } = useNavigation()
  const  isFocused = useIsFocused();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!isFocused)
    return resetForm()
  }, [isFocused]);

  async function handleSaveSerie() {
    if (serieForm.title.length <= 2) {
      return Alert.alert('Ops', 'Título com mínimo de 3 digitos')
    }

    setLoading(true)
    try {
      await saveSerie(serieForm)
      navigate('Dashboard', { screen: 'Dashboard' })
      Alert.alert('Sucesso', `Salvamos ${serieForm.title} na sua galeria 😄`)

    } catch (error) {
      Alert.alert('Aviso', 'Não conseguimos salvar sua série 😢')
      // console.tron.log(error)
    } finally {
      setLoading(false)
    }
  }

  return <Form  
  serieForm={serieForm}
  setField={setField}
  saveSerie={handleSaveSerie}
  resetForm={handleResetForm}
  loading={loading}
  />
}
function mapStateToProps(state) {
  return {
    serieForm: state.serieForm
  }
}

const mapDispatchToProps = {
  setField,
  saveSerie,
  resetForm,
  handleResetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);