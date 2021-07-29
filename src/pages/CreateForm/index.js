import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {useSelector, connect,useDispatch } from 'react-redux'
import { Alert } from 'react-native'

import {
  setField,
  saveSerie,
  resetForm,
  handleResetForm
} from '../../store/modules/serieForm/action';

import Form from '../../components/Form';

const CreateForm = ({ setField,handleResetForm }) => {
  const { navigate } = useNavigation()
  const isFocused = useIsFocused();
  const serieForm = useSelector(state =>  state.serieForm)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!isFocused)
    return dispatch(resetForm())
  }, [isFocused]);

  async function handleSaveSerie() {
    if (serieForm.title.length <= 2) {
      return Alert.alert('Ops', 'Título com mínimo de 3 digitos')
    }

    setLoading(true)
    try {
      await dispatch(saveSerie(serieForm))
      navigate('Dashboard', { screen: 'Dashboard' })
      Alert.alert('Sucesso', `Adicionamos ${serieForm.title} na sua galeria 😄`)

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

const mapDispatchToProps = {
  setField,
  handleResetForm
}

export default connect(null, mapDispatchToProps)(CreateForm);