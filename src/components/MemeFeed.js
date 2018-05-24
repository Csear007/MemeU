import React, {Component} from 'react';
import {Text, FlatList, Dimensions} from 'react-native';
import { Icon, Card} from 'react-native-elements';
import { Image, Tile, View, Button, NavigationBar, Title} from '@shoutem/ui';
import firebase from 'react-native-firebase';




class MemeFeed extends Component {

    constructor(props){
        super(props);


        this.state = {
            authenticated: false,
            data: [{key: "1", title: 'still waiting', image: ""}]
        }

    
    }

    componentDidMount(){

        this.login();
        this.fetchFireBaseData();

    }



    login(){
        if(this.state.authenticated !== true){
            firebase.auth().signInAndRetrieveDataWithEmailAndPassword('cesarsalazar09@gmail.com', 'test123')
            .then((value) => this.setState({authenticated: true}),
            (error) => console.log(error));
        }
    }

    fetchFireBaseData(){

        firebase.firestore().collection('memes')
            .get()
            .then((querysnapshot) => this.populateList(querysnapshot));
    }

    populateList(querysnapshot){
        dataReceived = [];
        querysnapshot.forEach(element => {
            dataReceived.push(element.data());
        });

        console.log(dataReceived);

        this.setState({data: dataReceived});
        
    }


    render(){

        // const fake_data = [
        //     {key: "1", title: 'meme1', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "2", title: 'meme2', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "3", title: 'meme3', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "4", title: 'meme4', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "5", title: 'meme5', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "6", title: 'meme6', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "7", title: 'meme7', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "8", title: 'meme8', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "9", title: 'meme9', source: require('../assets/images/jesus-meme.jpg')},
        //     {key: "10", title: 'meme10', source: require('../assets/images/jesus-meme.jpg')},
        // ];

        // let screen_width = Dimensions.get('window').width;
        // let screen_height = Dimensions.get('window').height;
            
        return (
            // {console.log(this.props.navigation)}
            <View>
                {/* <NavigationBar 
                    leftComponent={<Button><Icon name="menu"/></Button>}
                    centerComponent={<Title>MemeU</Title>}
                /> */}
                <FlatList 
                    ListHeaderComponent={
                        <View style={{flexDirection: 'row', backgroundColor: 'white', justifyContent: 'flex-start'}}>
                            <Button><Icon name="menu"/></Button>
                            <Title style={{textAlign: 'center'}}>MemeU</Title>
                        </View>
                        // <NavigationBar 
                        //     leftComponent={<Button><Icon name="menu"/></Button>}
                        //     centerComponent={<Title>MemeU</Title>}
                        // />
                    }
                    stickyHeaderIndices={[0]}
                    data={this.state.data}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => 
                        <Card
                        //    style= {{width: screen_width}}
                           title={item.title}
                            >
                            <Image 
                                styleName='large-square'
                                source={item.image}
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

                    onRefresh={() => this.fetchFireBaseData()}
                />
            </View>
        )
    }


}


export default MemeFeed;