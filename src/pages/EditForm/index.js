import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';

import { connect } from 'react-redux';

import {
  setField,
  saveSerie,
  setWholeSerie,
  handleResetForm
} from '../../store/modules/serieForm/action';

import Form from '../../components/Form';

const EditForm = ({
  serieForm,
  setField,
  saveSerie,
  setWholeSerie,
  handleResetForm
}) => {

  const { navigate } = useNavigation()
  const { params } = useRoute()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (params && params.serie) {
      return setWholeSerie(params.serie)
    }
  }, [params]);

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
    setWholeSerie={setWholeSerie}
    resetForm={handleResetForm}
    loading={loading}
  />;
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
  handleResetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);