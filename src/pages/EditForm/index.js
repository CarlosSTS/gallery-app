import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';

import {useDispatch,useSelector, connect } from 'react-redux';

import {
  setField,
  saveSerie,
  setWholeSerie,
  handleResetForm
} from '../../store/modules/serieForm/action';

import Form from '../../components/Form';

const EditForm = ({ setField, handleResetForm }) => {

  const { navigate } = useNavigation()
  const { params } = useRoute();
  const serieForm = useSelector(state =>  state.serieForm)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (params && params.serie) {
      return dispatch(setWholeSerie(params.serie))
    }
  }, [params]);

  async function handleSaveSerie() {
    if (serieForm.title.length <= 2) {
      return Alert.alert('Ops', 'Título com mínimo de 3 digitos')
    }

    setLoading(true)
    try {
      await dispatch(saveSerie(serieForm))
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
    setWholeSerie={setWholeSerie}
    resetForm={handleResetForm}
    loading={loading}
  />;
}

const mapDispatchToProps = {
  setField,
  handleResetForm
}

export default connect(null, mapDispatchToProps)(EditForm);