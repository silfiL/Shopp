import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native'
import FloatingLabel from 'react-native-floating-labels'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { HeaderBackButton } from '../../components/HeaderBackButton'
import { Footer } from '../../components/Footer'
import { styles } from './styles'

import Color from '../../config/Color'
import Size from '../../config/Size'

export default class Login extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      data: {
        email: '',
        password: '',
      },
    }

    this.onChange = this.onChange.bind(this)
  }

  async onChange(key, text) {
    const data = this.state.data
    data[key] = text
    this.setState({ data })
  }

  back = () => {
    this.props.navigation.goBack()
  }

  goToHome = async () => {
    this.props.navigation.navigate("Homepage")
  }

  forget = () => {
    this.props.navigation.navigate('ForgetPassword')
  }

  render(){
    return(
     <LinearGradient start={{x: 0, y: .1}} end={{x: .1, y: 1}} colors={[Color.BLUE,Color.LIGHT_BLUE]} style={styles.container}>
        <StatusBar backgroundColor={Color.BLUE} barStyle="light-content"/>
        <HeaderBackButton onPressBack={this.back} iconColor={Color.APP_WHITE}/>
        <View style={{marginTop:Size.HEIGHT1}}>
          <Title size="small"/>
        </View>
        <View style={styles.form}>
          <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
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
          
            {/*<Field
              required
              component={FloatingInputField}
              validations={[ required ]}
              name="password"
              value={this.state.data.password}
              onChangeText={(val) => this.onChange("password",val)}
              customStyle={styles.formInput}
              password={true}
              inputStyle={styles.input}
              labelStyle={styles.labelInput}
              placeholder="Password"
            />*/}
          <TouchableOpacity onPress={this.forget} style={styles.forget}>
              <Text style={styles.forgetText}>Forget Password?</Text>
            </TouchableOpacity>
            <Button text="LOGIN" size="long" onPress={this.goToHome} bgColor={Color.APP_WHITE} txtColor={Color.LIGHT_BLUE} />
        </View>
        <Footer />
      </LinearGradient>
    )
  }
}
