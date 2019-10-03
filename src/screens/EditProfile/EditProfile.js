import React from 'react';
import { View, Text, TextInput, StatusBar, AsyncStorage, Alert } from 'react-native';
import FloatingLabel from 'react-native-floating-labels';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../../components/Button';
import { HeaderBackButton } from '../../components/HeaderBackButton';
import { styles } from './styles';

import Color from '../../config/Color'

export default class EditProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            data: {
                name: 'Lia',
                phone: '',
                gender: '2',
                address: ''
            }
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(key, text) {
      const data = this.state.data
      data[key] = text
      this.setState({ data })
    }

    onSelect = (index, value) => {
      console.log(value)
      const data = this.state.data
      data.gender = value
      this.setState({ data })
    }

    next = () => {
      Alert.alert("Successful","Your Profile has been changed!",[{text: 'OK',onPress: ()=> this.props.navigation.goBack()}])
    }

    back = () => {
      this.props.navigation.goBack()
    }

    render(){
        return(
          <View style={styles.container}>
            <StatusBar backgroundColor={Color.BLUE} barStyle="light-content" />
            <HeaderBackButton onPressBack={this.back} iconColor={Color.APP_WHITE} title="EDIT PROFILE" bgColor={Color.BLUE}/>
            <View style={styles.form}>
              <View style={styles.row}>
                <FloatingLabel
                  labelStyle={styles.labelInput}
                  inputStyle={styles.input}
                  style={styles.formInput}
                  value={this.state.data.name}
                  onChangeText={(event) => this.onChange('name', event)}>Name</FloatingLabel>
              </View>
              <View style={styles.row}>
                <FloatingLabel
                  labelStyle={styles.labelInput}
                  inputStyle={styles.input}
                  style={styles.formInput}
                  keyboardType="number-pad"
                  value={this.state.data.phone}
                  onChangeText={(event) => this.onChange('phone', event)}>Phone Number</FloatingLabel>
              </View>
              <View style={styles.row}>
                <FloatingLabel
                  labelStyle={styles.labelInput}
                  inputStyle={styles.input}
                  style={styles.formInput}
                  value={this.state.data.address}
                  onChangeText={(event) => this.onChange('address', event)}>Address</FloatingLabel>
              </View>
              <Text style={styles.label}>Gender</Text>
              <RadioGroup
                style = {styles.inline}
                selectedIndex={0}
                color={Color.LIGHT_BLUE}
                onSelect = {(index, value) => this.onSelect(index, value)}>
                <RadioButton value={'1'} >
                  <Icon name="male" color={Color.FONT_GREY} size={50} />
                  <Text style={styles.radioLabel}>Male</Text>
                </RadioButton>
                <RadioButton value={'2'}>
                  <Icon name="female" color={Color.FONT_GREY} size={50} />
                  <Text>Female</Text>
                </RadioButton>
              </RadioGroup>
              <Button text="SAVE" size="long" onPress={this.next} bgColor={Color.LIGHT_BLUE} txtColor={Color.APP_WHITE} />
            </View>
          </View>
        )
    }
}
