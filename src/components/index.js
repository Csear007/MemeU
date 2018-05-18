import {TabNavigator, StackNavigator} from 'react-navigation';

import MemeFeed from './MemeFeed';
import MemeCreator from './MemeCreator';
import MemeGenerator from './MemeGenerator';


const MemeGalleryStack = StackNavigator(
    {
        Gallery: {screen: MemeCreator},
        Creator: {screen: MemeGenerator}
    },
    {
        initialRouteName: 'Gallery'
    }

)

const HomeScreenRouter = TabNavigator(
    {
        Home: {screen: MemeFeed},
        Creator: MemeGalleryStack,
    },
    {
        tabBarOptions: {

        },
        tabBarPosition: 'bottom',
        initialRouteName: 'Home'
    }
)


export default HomeScreenRouter;