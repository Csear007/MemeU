import React, {Component} from 'react';
import {Text, FlatList, Dimensions} from 'react-native';
import { Icon, Card} from 'react-native-elements';
import { Image, Tile, View, Button} from '@shoutem/ui';





class MemeFeed extends Component {

    constructor(){
        super();
    }


    render(){

        const fake_data = [
            {title: 'meme1', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme2', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme3', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme4', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme5', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme6', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme7', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme8', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme9', source: require('../assets/images/jesus-meme.jpg')},
            {title: 'meme10', source: require('../assets/images/jesus-meme.jpg')},
        ];

        let screen_width = Dimensions.get('window').width;
        let screen_height = Dimensions.get('window').height;
            
        return (
            <View>
                <FlatList 
                    data={fake_data}
                    renderItem={({item}) => 
                        <Card
                           style= {{width: screen_width}}
                           title={item.title}
                            >
                            <Image 
                                styleName='large-square'
                                source={item.source}
                            />
                            <View styleName="horizontal flexible">
                                <Button styleName="border full-width">
                                    <Icon name="thumb-up" />
                                </Button>
                                <Button styleName="border full-width">
                                    <Icon name="thumb-down" />
                                </Button>
                            </View>
                        </Card>
                        }

                    refreshing={false}

                    onRefresh={() => console.log('this is refreshing')}
                />
            </View>
        )
    }


}


export default MemeFeed;