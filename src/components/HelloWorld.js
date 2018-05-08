import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';



class HelloWorld extends Component {

    constructor(){
        super();
    }


    render(){

        const fake_data = [
            {title: 'meme1'},
            {title: 'meme2'},
            {title: 'meme3'},
            {title: 'meme4'},
            {title: 'meme5'},
            {title: 'meme6'},
            {title: 'meme7'},
            {title: 'meme8'},
            {title: 'meme9'},
            {title: 'meme10'}
        ];
            
        return (
            <View>
                <FlatList 
                    data={fake_data}
                    renderItem={({item}) => 
                        <View>
                            <Text>{item.title}</Text>
                            <Image 
                                style={{ width: 50, height: 50}}
                                source={require('../assets/images/jesus-meme.jpg')}/>
                        </View>
                        }
                />
            </View>
        )
    }


}


export default HelloWorld;