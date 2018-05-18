import React, {Component} from 'react';
import { Text} from 'react-native';
import {DropDownMenu, NavigationBar, ListView, Screen, GridRow, Card, Subtitle, View, Caption, Image} from '@shoutem/ui';



class MemeCreator extends Component {

    constructor(){
        super();
        this.state = {
            categories: [
              {
                category: "Animals",
                images:
                  {
                    model: "Monkeys",
                    
                    url: "https://i.ytimg.com/vi/xpTNe7hYRAM/maxresdefault.jpg",
                    description: "A fine meme of monkeys"
                  }
              },
              {
                category: "Celebrities",
                images: {
                  model: "Dicaprio",
                  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5aLVm0cOojrUiXNPKw6PFr1Dp_DP6Y1xTxddpjtWow-fmGo8",
                  description: "A fine meme of dicaprio"
                }
              },
              {
                category: "Advice",
                images: {
                  model: "Correct Meme",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ34bMdzxAZKjhlzBhMIjHqN4EAza0dPJ4l1pe-U96JfnfZ8X",
                  description: " A fine advice meme"
                }
              },
              {
                category: "Cartoons",
                images: {
                  model: "Fry Confused",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBC0A1NFW5I0oBC89cj992xaTIeELpURPUlIO38VXHtod80vD7g",
                  description: "A fine meme of fry"
                }
              },
              {
                category: "Rage",
                images: {
                  model: "FUUUUUU",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ97l72mStWoFtrvIBMGicQgSCQO0s4dgb9MBRJ_Qd1xou6zeZbA",
                  description: "does more need to be said?"
                }
              },
              {
                category: "New",
                images: {
                  model: "Memes Ahead",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtAExKUsJnRveovMKznW9CgnG2F31GC_CDeH2zj3u75-ITBiR",
                  description: "He's too ahead of everyone"
                }
              },
            ],
          }
    }




    renderGridRow(rowData, sectionId, index){
        const cellviews = rowData.map( ({ images})  => { return(
            <Card styleName="flexible">
                <Image
                    styleName="medium-wide"
                    source={{ uri: images.url  }}
                />
                <View styleName="content">
                    <Subtitle numberOfLines={3}>{images.model}</Subtitle>
                    <View styleName="horizontal">
                    <Caption styleName="collapsible" numberOfLines={2}>{images.description}</Caption>
                    </View>
                </View>
            </Card>

        )});


        return (
            <GridRow columns={1}> 
              {cellviews}
            </GridRow>
        );
    }


    render(){

        const selectedCategory = this.state.selectedCategory || this.state.categories[0];

        const groupedData = GridRow.groupByRows(this.state.categories, 3);
        return (
            <Screen>
               <NavigationBar
                    title="Meme Creator"
                    styleName="inline"
                />
                <DropDownMenu 
                    styleName='horizontal'
                    options={this.state.categories}
                    selectedOption={selectedCategory ? selectedCategory : this.state.categories[0]}
                    onOptionSelected={(category) => this.setState({ selectedCategory: category })}
                    titleProperty='category'
                    valueProperty='categories.images'
                />
                <ListView 
                    data={groupedData}
                    renderRow={this.renderGridRow}
                />
                
            </Screen>
        );
    }
    
}


export default MemeCreator;






