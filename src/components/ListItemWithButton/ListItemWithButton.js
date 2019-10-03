import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//styles
import { styles } from './styles';

import Color from '../../config/Color'

export default class ListItemWithButton extends React.Component {
  render() {
    return (
        <View style={styles.row}>
          <View>
            <Image source={this.props.source} style={styles.img} />
          </View> 
          <View>
            <Text style={styles.firstLine}>{this.props.name}</Text>
            <Text style={styles.secondLine}>{this.props.category}</Text>
            <Text style={styles.thirdLine}>{this.props.price}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.props.buttonPress} style={styles.button}>
              <Icon name="trash" size={24} color={Color.BLUE} />
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

