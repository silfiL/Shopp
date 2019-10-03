import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome'
import Base from './screens/Base';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import History from './screens/History';
import Profile from './screens/Profile';
import AddFood from './screens/AddFood';
import SearchFood from './screens/SearchFood';
import RecentFood from './screens/RecentFood';
import CategoryList from './screens/CategoryList';
import ViewCategory from './screens/ViewCategory';
import Meal from './screens/Meal';
import CreateMeal from './screens/CreateMeal';
import ViewMeal from './screens/ViewMeal';
import AddInMeal from './screens/AddInMeal';
import EditProfile from './screens/EditProfile';
import ChangePassword from './screens/ChangePassword';
import Home from './screens/Home';
import Wishlist from './screens/Wishlist';

import Color from './config/Color';
import SearchFoodMeal from "./screens/SearchFoodMeal";

Date.prototype.datetimeformat = function(option = "") {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  let year = this.getFullYear()
  let month = months[this.getMonth()]
  let day = days[this.getDay()]
  let date = (this.getDate() < 10) ? '0' + this.getDate() : this.getDate()
  let hour = (this.getHours() < 10) ? '0' + this.getHours() : this.getHours()
  let minute = (this.getMinutes() < 10) ? '0' + this.getMinutes() : this.getMinutes()
  // let second = (this.getSeconds() < 10) ? '0' + this.getSeconds() : this.getSeconds()
  let ampm = 'AM'

  if (hour >= 12) {
    hour = hour - 12
    ampm = 'PM'
  }

  if (hour === 0)
    hour = 12

  if (option === "date") return `${day}, ${date} ${month} ${year}`
  if (option === "time") return `${hour}.${minute} ${ampm}`
  return `${date} ${month} ${year} ${hour}:${minute}`
}

const HomepageTab = createMaterialBottomTabNavigator({
  Home: { screen: Home,
      navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
        activeColor: Color.APP_WHITE,
        inactiveColor: Color.BLUE,
        barStyle: { backgroundColor: Color.LIGHT_BLUE },
        tabBarOnPress: ({defaultHandler}) => {
          defaultHandler()
          StatusBar.setBarStyle('light-content');
          StatusBar.setBackgroundColor(Color.BLUE, true);
          StatusBar.setTranslucent(false);
        }
      }
    },
  Wishlist: { screen: Wishlist,
      navigationOptions: {
        tabBarLabel:"Wishlist",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" size={25} color={tintColor} />
        ),
        activeColor: Color.APP_WHITE,
        inactiveColor: Color.BLUE,
        barStyle: { backgroundColor: Color.LIGHT_BLUE },
        tabBarOnPress: ({defaultHandler}) => {
          defaultHandler()
          StatusBar.setBarStyle('light-content');
          StatusBar.setBackgroundColor(Color.BLUE, true);
          StatusBar.setTranslucent(false);
        }
      }
    },
  Cart: { screen: History,
    navigationOptions: {
      tabBarLabel:"Cart",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="shopping-cart" size={25} color={tintColor} />
      ),
      activeColor: Color.APP_WHITE,
      inactiveColor: Color.BLUE,
      barStyle: { backgroundColor: Color.LIGHT_BLUE },
      tabBarOnPress: ({defaultHandler}) => {
        defaultHandler()
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(Color.BLUE, true);
        StatusBar.setTranslucent(false);
      }
    }
  },
  Transaction: { screen: Home,
      navigationOptions: {
        tabBarLabel:"Transaction",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="exchange" size={25} color={tintColor} />
        ),
        activeColor: Color.APP_WHITE,
        inactiveColor: Color.BLUE,
        barStyle: { backgroundColor: Color.LIGHT_BLUE },
        tabBarOnPress: ({defaultHandler}) => {
          defaultHandler()
          StatusBar.setBarStyle('light-content');
          StatusBar.setBackgroundColor(Color.BLUE, true);
          StatusBar.setTranslucent(false);
        }
      }
  },
  Profile: { screen: Profile,
      navigationOptions: {
        tabBarLabel:"Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={25} color={tintColor} />
        ),
        tabBarOnPress: ({defaultHandler}) => {
          defaultHandler()
          StatusBar.setBarStyle('light-content');
          StatusBar.setBackgroundColor(Color.BLUE, true);
          StatusBar.setTranslucent(false);
        }
      }
    },
}, {
  initialRouteName: 'Home',
  activeColor: Color.APP_WHITE,
  inactiveColor: Color.BLUE,
  barStyle: { backgroundColor: Color.LIGHT_BLUE },
});

const guessStack = createStackNavigator({
  Base: Base,
  Login: Login,
  SignUp: SignUp,
  ForgetPassword: ForgetPassword,
  ResetPassword: ResetPassword,
}, {
  initialRouteName: 'Base',
  headerMode: 'none'
})

const rootStack = createStackNavigator({
  AddFood: AddFood,
  SearchFood: SearchFood,
  RecentFood: RecentFood,
  CategoryList: CategoryList,
  ViewCategory: ViewCategory,
  Meal: Meal,
  CreateMeal: CreateMeal,
  ViewMeal: ViewMeal,
  SearchFoodMeal: SearchFoodMeal,
  AddInMeal: AddInMeal,
  EditProfile: EditProfile,
  ChangePassword: ChangePassword,
  Homepage: HomepageTab,
}, {
  initialRouteName: 'Homepage',
  headerMode: 'none'
});

const initApp = createSwitchNavigator({
  App3: guessStack,
  App4: rootStack
}, {
  initialRouteName: 'App3',
  headerMode: 'none'
})

const AppContainer = createAppContainer(initApp);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
