import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TextInput, ImageBackground, Tile, Screen, Button, Icon, Overlay, Subtitle, Heading, Title, View} from '@shoutem/ui';
import {captureRef} from 'react-native-view-shot';


class MemeGenerator extends Component {
    constructor(props){
        super(props);

        this.state= {
            top_text: "",
            bottom_text: ""
        };
    }



    render(){
        const {navigation} = this.props;
        return (
            <Screen>
                <TextInput 
                    placeholder={"top caption text"}
                    onChangeText={(text) => this.setState({top_text: text})}
                    value={this.state.top_text}
                />

                <ImageBackground
                    
                    styleName='large-wide'
                    source={{ uri: navigation.getParam('image_source')}}
                > 
                    <Tile styleName="text-centric">
                        <View styleName="vertical fill-parent space-between">
                            <Title styleName="v-start" style={{color: "white", fontSize: 20, fontFamily: 'Roboto', textAlign: "center"}}>{this.state.top_text}</Title>
                            <Title styleName="v-end" style={{color: "white", fontSize: 20, fontFamily: 'Roboto', textAlign: "center"}}>{this.state.bottom_text}</Title>
                        </View>
                    </Tile>
                </ImageBackground>
                <TextInput 
                    placeholder={"bottom caption text"}
                    onChangeText={(text) => this.setState({bottom_text: text})}
                    value={this.state.bottom_text}
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