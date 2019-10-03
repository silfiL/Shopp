import React from 'react'
import { View, FlatList, Text, StatusBar, TouchableOpacity, AsyncStorage, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { HeaderBackButton } from '../../components/HeaderBackButton'
import { ListItemWithButton } from '../../components/ListItemWithButton'
import { styles } from './styles'

import Color from '../../config/Color'

export default class Wishlist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: '1',
        name: 'Blender Portable',
        category: "Kitchenware",
        price: "Rp 190.000,-"
      },{
        id: '2',
        name: 'Sapu ABC',
        category: "Houseware",
        price: "Rp 30.000,-"
      }]
    }
  }

  _onLongPress = (id) => {
    this.props.navigation.navigate('ViewMeal',{id})
  };

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={() => this.onSelectMeal(item)}>
      <ListItemWithButton
        id={item.id}
        name={item.name}
        category={item.category}
        price={item.price}
        buttonPress={() => this._onLongPress(item.id)}/>
    </TouchableOpacity>
  );

  
  onSelectMeal(item) {
    const self = this
    Alert.alert("Add Meal", `Do you want to eat ${item.name}?`, [
      {text: 'NO', style: 'cancel'},
      {text: 'YES', onPress: () => self.onAddMeal(item.id)}
    ])
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={Color.BLUE} barStyle="light-content" />
        <HeaderBackButton showIcon={false} title="WISHLIST" bgColor={Color.BLUE} iconColor={Color.APP_WHITE}/>
        {this.state.data.length==0 ?
        <View style={styles.centerCont}>
            <Icon name="heart" size={80} color={Color.FONT_GREY} />
            <Text style={styles.text}>Currently you have no wishlist.</Text>
        </View>:
        <FlatList
          data={this.state.data}
          keyExtractor={item=>item.id}
          renderItem={this._renderItem}
        />
        }
      </View>
    )
  }
}
