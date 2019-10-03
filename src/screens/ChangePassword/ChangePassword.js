import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, AsyncStorage, Alert } from 'react-native'
import FloatingLabel from 'react-native-floating-labels';
import { Button } from '../../components/Button'
import { HeaderBackButton } from '../../components/HeaderBackButton'
import { Footer } from '../../components/Footer'
import { styles } from './styles'

import Color from '../../config/Color'
import Size from '../../config/Size'

export default class ChangePassword extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      data: {
        password: '',
        re_password: '',
        old_password: ''
      },
      errMessage: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  back = () => {
    this.props.navigation.goBack()
  }

  onChange(key, text) {
    const data = this.state.data
    data[key] = text
    this.setState({ data })
  }

  doNothing = async () => {
    Alert.alert('Success','User Profile updated !',[{text:'OK',onPress: ()=>this.props.navigation.goBack()}])
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={Color.BLUE} barStyle="light-content" />
        <HeaderBackButton onPressBack={this.back} iconColor={Color.APP_WHITE} title="CHANGE PASSWORD" bgColor={Color.BLUE}/>
        <View style={styles.form}>
            <FloatingLabel
                labelStyle={styles.labelInput}
                inputStyle={styles.input}
                password={true}
                style={styles.formInput}
                value={this.state.data.old_password}
                onChangeText={(event) => this.onChange('old_password', event)}>Current Pasword</FloatingLabel>
            <FloatingLabel
                labelStyle={styles.labelInput}
                inputStyle={styles.input}
                password={true}
                style={styles.formInput}
                value={this.state.data.password}
                onChangeText={(event) => this.onChange('password', event)}>New Password</FloatingLabel>
            <FloatingLabel
                labelStyle={styles.labelInput}
                inputStyle={styles.input}
                password={true}
                style={styles.formInput}
                value={this.state.data.re_password}
                onChangeText={(event) => this.onChange('re_password', event)}>Confirm New Password</FloatingLabel>
            <View style={styles.below}>
              <Button text="SAVE" size="long" onPress={this.doNothing} bgColor={Color.LIGHT_BLUE} txtColor={Color.APP_WHITE} />
            </View>
        </View>
        <Footer color={Color.BLUE}/>
      </View>
    )
  }
}
