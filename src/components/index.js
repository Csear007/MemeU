import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

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

const HomeScreenRouter = DrawerNavigator(
    {
        Home: {screen: MemeFeed},
        Creator: MemeGalleryStack,
    },
    {
        initialRouteName: 'Home'
    }
)


export default HomeScreenRouter;