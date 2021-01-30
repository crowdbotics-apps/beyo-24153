import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps198683Navigator from '../features/Maps198683/navigator';
import Settings198661Navigator from '../features/Settings198661/navigator';
import Settings198646Navigator from '../features/Settings198646/navigator';
import NotificationList198645Navigator from '../features/NotificationList198645/navigator';
import Maps198644Navigator from '../features/Maps198644/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps198683: { screen: Maps198683Navigator },
Settings198661: { screen: Settings198661Navigator },
Settings198646: { screen: Settings198646Navigator },
NotificationList198645: { screen: NotificationList198645Navigator },
Maps198644: { screen: Maps198644Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
