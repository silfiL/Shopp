import React from 'react'
import { View, Text, Alert, StatusBar } from 'react-native'
import FloatingLabel from 'react-native-floating-labels';
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { HeaderBackButton } from '../../components/HeaderBackButton'
import { Footer } from '../../components/Footer'
import { styles } from './styles'

import Color from '../../config/Color'
import Size from '../../config/Size'

export default class ResetPassword extends React.Component{
  state = {
    data: {
      email: '',
      password: '',
      re_password: '',
    },
  }

  onChange = (key, text) => {
    if (key === 'email') return;
    const data = this.state.data
    data[key] = text
    this.setState({ data })
  }

  back = () => {
    this.props.navigation.goBack()
  }

  save = async () => {
    Alert.alert("Successful","Your password is reset.",[
        {text: 'OK',onPress: ()=> this.props.navigation.navigate("Base")}])
  }

  componentDidMount(){
    let { data } = this.state
    data.email = this.props.navigation.state.params.email
    this.setState({ data })
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={Color.APP_WHITE} barStyle="dark-content"/>
        <HeaderBackButton onPressBack={this.back} iconColor={Color.BLUE}/>
        <View style={{marginTop:Size.HEIGHT1*0.5}}>
          <Title size="small" titleColor={Color.BLUE}/>
        </View>
        <View style={styles.form}>          
            <FloatingLabel
                labelStyle={styles.labelInput}
                inputStyle={styles.input}
                style={styles.formInput}>Enter Email Address</FloatingLabel>
            <FloatingLabel
                labelStyle={styles.labelInput}
                inputStyle={styles.input}
                password={true}
                style={styles.formInput}>Enter New Password</FloatingLabel>
            <FloatingLabel
                labelStyle={styles.labelInput}
                inputStyle={styles.input}
                password={true}
                style={[styles.formInput,styles.below]}>Re-enter New Password</FloatingLabel> 
            <Button text="SAVE" size="long" onPress={this.save} bgColor={Color.LIGHT_BLUE} txtColor={Color.APP_WHITE} />
        </View>
        <Footer color={Color.BLUE}/>
      </View>
    )
  }
}
