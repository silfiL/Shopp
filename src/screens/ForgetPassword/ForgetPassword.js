import React from 'react'
import { View, Text, TextInput, StatusBar, Alert, Linking } from 'react-native'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { HeaderBackButton } from '../../components/HeaderBackButton'
import { Footer } from '../../components/Footer'
import { styles } from './styles'

import Color from '../../config/Color'
import Size from '../../config/Size'

export default class ForgetPassword extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }

    this.onChange = this.onChange.bind(this)
  }

  back = () => {
    this.props.navigation.goBack()
  }

  onChange(email) {
    this.setState({ email })
  }

  sendReset = () => {
    this.props.navigation.navigate("ResetPassword",{email:this.state.email})
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={Color.APP_WHITE} barStyle="dark-content" />
        <HeaderBackButton onPressBack={this.back} iconColor={Color.GREEN}/>
        <View style={{marginTop:Size.HEIGHT1}}>
          <Title size="small" titleColor={Color.BLUE}/>
        </View>
        <View style={styles.form}>
            <View style={styles.roundedContainer}>
              <Text style={styles.label}>Please write down your email below</Text>
              <TextInput value={this.state.email}
                onChangeText={val=>this.setState({email:val})}
                placeholder="Email Address"
                keyboardType="email-address"
                style={styles.input}
              />
            </View>
            <Button text="SEND RESET LINK" size="long" onPress={this.sendReset} bgColor={Color.LIGHT_BLUE} txtColor={Color.APP_WHITE} />
        </View>
        <Footer color={Color.BLUE}/>
      </View>
    )
  }
}
