import React from 'react'
import { View, Text, StatusBar, AsyncStorage, Linking, Alert } from 'react-native'
import FloatingLabel from 'react-native-floating-labels'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { HeaderBackButton } from '../../components/HeaderBackButton'
import { Footer } from '../../components/Footer'
import { styles } from './styles'

import Color from '../../config/Color'

export default class SignUp extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      data: {
        name: '',
        email: '',
        password: '',
        re_password: '',
      },
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(key, text) {
    const data = this.state.data
    data[key] = text
    this.setState({ data })
  }

  back = () => {
    this.props.navigation.goBack()
  }

  goToHome = () => {
    this.props.navigation.navigate("Homepage")
  }

  render(){
    return(
      <LinearGradient start={{x: 0, y: .1}} end={{x: .1, y: 1}} colors={[Color.BLUE,Color.LIGHT_BLUE]} style={styles.container}>
        <StatusBar backgroundColor={Color.BLUE} barStyle="light-content" />
        <HeaderBackButton onPressBack={this.back} iconColor={Color.APP_WHITE}/>
        <Title size="small"/>
        <View style={styles.form}>
          <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            onChangeText={(val) => this.onChange("name",val)}
            style={styles.formInput}
            value={this.state.data.name}>Name</FloatingLabel>
          <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            keyboardType="email-address"
            onChangeText={(val) => this.onChange("email",val)}
            style={styles.formInput}
            value={this.state.data.email}>Email Address</FloatingLabel>
          <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            password={true}
            onChangeText={(val) => this.onChange("password",val)}
            style={styles.formInput}
            value={this.state.data.password}>Password</FloatingLabel>
          <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            password={true}
            onChangeText={(val) => this.onChange("re_password",val)}
            style={styles.formInput}
            value={this.state.data.re_password}>Re-Password</FloatingLabel> 
          <View style={styles.below}>
            <Button text="SIGN UP" size="long" onPress={this.goToHome} bgColor={Color.APP_WHITE} txtColor={Color.LIGHT_GREEN} />
          </View>
        </View>
        <Footer />
      </LinearGradient>
    )
  }
}
