import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TextInput, Image, Tile, Screen, Button, Icon} from '@shoutem/ui';


class MemeGenerator extends Component {
    constructor(props){
        super(props);
    }



    render(){
        const {navigation} = this.props;
        return (
            <Screen>
                <TextInput 
                    placeholder={"top caption text"}
                />
                <Tile>
                    <Image
                        styleName='large-wide'
                        source={{ uri: navigation.getParam('image_source')}}
                    />
                </Tile>
                <TextInput 
                    placeholder={"bottom caption text"}
                />
                <Button styleName="full-width">
                    <Icon name="plus-button" />
                    <Text style={{ color: 'black'}}>Create Your Dank Meme</Text>
                </Button>
            </Screen>
        );
    }
}


export default MemeGenerator;