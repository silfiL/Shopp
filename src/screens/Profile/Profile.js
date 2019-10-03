import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, AsyncStorage, Image, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Button } from '../../components/Button';
import Modal from 'react-native-modalbox'
import { styles } from './styles'
import AIcon from 'react-native-vector-icons/AntDesign'

import Color from '../../config/Color'

export default class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      user: {
        name: "Lia",
        gender: 2,
        email: "hellolia@gmail.com",
        address: "",
        phone: ""
      }
    }

  }

  editProfile = () => {
    this.props.navigation.navigate('EditProfile')
  }

  changePass = () => {
    this.props.navigation.navigate('ChangePassword')
  }

  logout = () => {
    this.setState({isOpen:!this.state.isOpen})
  }

  goToBase = async () => {
    await AsyncStorage.setItem('token', '')
    this.props.navigation.navigate('Base')
    this.setState({isOpen:false})
  }

  renderSource = (gender) => {
    if (gender == 1)
      return require('../../assets/img/male.png')
    else
      return require('../../assets/img/female.png')
  }

  render(){
    return(
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: .1}} end={{x: .1, y: 1}} colors={[Color.BLUE,Color.LIGHT_BLUE]} style={styles.coloredCont}>
            {/*<TouchableOpacity style={{alignSelf:'flex-end'}} onPress={this.editProfile}>
                <MIcon name="edit" size={24} color={Color.APP_WHITE} />
            </TouchableOpacity>*/}
            {(this.state.user.gender === 'male')
              ? <Image style={styles.image} source={require('../../assets/img/male.png')} />
              : <Image style={styles.image} source={require('../../assets/img/female.png')} />}
            <Text style={styles.name}>{this.state.user.name}</Text>
        </LinearGradient>
        <View style={styles.longRowButton} >
          <Text style={styles.longRowTextBold}>Email Address</Text>
          <Text style={styles.longRowText}>{this.state.user.email}</Text>
        </View>
        <View style={styles.longRowButton} >
          <Text style={styles.longRowTextBold}>Phone Number</Text>
          <Text style={styles.longRowText}>{this.state.user.phone==""?"-":this.state.user.phone}</Text>
        </View>
        <View style={styles.longRowButton} >
          <Text style={styles.longRowTextBold}>Address</Text>
          <Text style={styles.longRowText}>{this.state.user.address==""?"No Address":this.state.user.address}</Text>
        </View>
        <TouchableHighlight onPress={this.editProfile} underlayColor={Color.LIGHTER_GREY}>
          <View style={styles.longRowButton} >
            <Text style={styles.longRowTextBold}>Edit Profile</Text>
            <AIcon name="right" size={20} color={Color.FONT_GREY} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.changePass} underlayColor={Color.LIGHTER_GREY}>
          <View style={styles.longRowButton} >
            <Text style={styles.longRowTextBold}>Change Password</Text>
            <AIcon name="right" size={20} color={Color.FONT_GREY} />
          </View>
        </TouchableHighlight>
        <View style={styles.buttonCont}>
          <Button text="LOG OUT" txtColor={Color.APP_WHITE} bgColor={Color.LIGHT_BLUE} size="long" onPress={this.logout} />
        </View>
        <Modal style={styles.extraSmallModal} position="center" isOpen={this.state.isOpen} backdropPressToClose={false} swipeToClose={false}>
            <View style={styles.headerModal}>
              <Text style={styles.modalTitle}>LOG OUT</Text>
              <TouchableOpacity onPress={this.logout}>
                <AIcon name="close" size={20} color={Color.FONT_GREY} />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Are you sure you want to log out your account?</Text>
            <View style={styles.blankRow} >
              <View style={styles.blank}/>
              <View style={styles.modalButtonRow}>
                <TouchableOpacity onPress={()=>this.setState({isOpen:false})}>
                  <Text style={styles.modalButton}>NO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToBase}>
                  <Text style={styles.modalButton}>YES</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
      </View>
    )
  }
}
