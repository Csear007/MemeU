import {TabNavigator} from 'react-navigation';

import HelloWorld from './HelloWorld';
import MemeCreator from './MemeCreator';




const HomeScreenRouter = TabNavigator(
    {
        Home: {screen: HelloWorld},
        Creator: {screen: MemeCreator}
    },
    {
        tabBarOptions: {

        },
        tabBarPosition: 'bottom',
        initialRouteName: 'Home'
    }
)


export default HomeScreenRouter;