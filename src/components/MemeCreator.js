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
                images: [
                  {
                    model: "Monkeys",
                    
                    url: "https://i.ytimg.com/vi/xpTNe7hYRAM/maxresdefault.jpg",
                    description: "A fine meme of monkeys"
                  },
                  {
                    model: "Koala",
                    url: "https://media1.popsugar-assets.com/files/thumbor/rSKEuyJ3tz2FWbHwo6Ol2QMv_Ic/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/06/25/926/n/1922243/779d4338d269e30a_meme87/i/Silly-Animal-Memes.jpg",
                    description: "A fine meme of koala"
                  },
                  {
                    model: "Graduating Dog",
                    
                    url: "https://cmeimg-a.akamaihd.net/640/cme/cuteness_data/s3fs-public/1472575225465animals-memes-college-students-MAIN.jpg",
                    description: "A fine meme of graduating doggo"
                  },
                  {
                    model: "Rejected Owl",
                    
                    url: "https://i.pinimg.com/originals/2f/b8/61/2fb861b5899ed2baee9f29fafcd5a966.jpg",
                    description: "A fine meme of owl"
                  },
                  {
                    model: "Alpacapillar",
                    
                    url: "http://1.bp.blogspot.com/-awuQ7P0Ba1Y/UdaI-EMD9KI/AAAAAAAABrI/jAEEonnl6tI/s1600/funny-animal-memes-3-1-01-1-3-4-6-7-8-9-3-2-1-4-3-2.png",
                    description: "A fine meme of alpaca"
                  },
                  {
                    model: "Fury Furry",
                    
                    url: "http://cdn3-www.mandatory.com/assets/uploads/2017/04/8.jpg",
                    description: "A fine meme of rage cuteness"
                  }
                ]
              },
              {
                category: "Celebrities",
                images: [ 
                  {
                    model: "Dicaprio",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5aLVm0cOojrUiXNPKw6PFr1Dp_DP6Y1xTxddpjtWow-fmGo8",
                    description: "A fine meme of dicaprio"
                  },
                  {
                    model: "Dicaprio",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5aLVm0cOojrUiXNPKw6PFr1Dp_DP6Y1xTxddpjtWow-fmGo8",
                    description: "A fine meme of dicaprio"
                  },
                  {
                    model: "Dicaprio",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5aLVm0cOojrUiXNPKw6PFr1Dp_DP6Y1xTxddpjtWow-fmGo8",
                    description: "A fine meme of dicaprio"
                  },
                  {
                    model: "Dicaprio",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5aLVm0cOojrUiXNPKw6PFr1Dp_DP6Y1xTxddpjtWow-fmGo8",
                    description: "A fine meme of dicaprio"
                  },
                  {
                    model: "Dicaprio",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5aLVm0cOojrUiXNPKw6PFr1Dp_DP6Y1xTxddpjtWow-fmGo8",
                    description: "A fine meme of dicaprio"
                  },
                  {
                    model: "Dicaprio",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5aLVm0cOojrUiXNPKw6PFr1Dp_DP6Y1xTxddpjtWow-fmGo8",
                    description: "A fine meme of dicaprio"
                  },
                ]
              },
              {
                category: "Advice",
                images: [
                  {
                    model: "Correct Meme",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ34bMdzxAZKjhlzBhMIjHqN4EAza0dPJ4l1pe-U96JfnfZ8X",
                    description: " A fine advice meme"
                  },
                  {
                    model: "Correct Meme",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ34bMdzxAZKjhlzBhMIjHqN4EAza0dPJ4l1pe-U96JfnfZ8X",
                    description: " A fine advice meme"
                  },
                  {
                    model: "Correct Meme",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ34bMdzxAZKjhlzBhMIjHqN4EAza0dPJ4l1pe-U96JfnfZ8X",
                    description: " A fine advice meme"
                  },
                  {
                    model: "Correct Meme",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ34bMdzxAZKjhlzBhMIjHqN4EAza0dPJ4l1pe-U96JfnfZ8X",
                    description: " A fine advice meme"
                  },
                  {
                    model: "Correct Meme",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ34bMdzxAZKjhlzBhMIjHqN4EAza0dPJ4l1pe-U96JfnfZ8X",
                    description: " A fine advice meme"
                  },
                  {
                    model: "Correct Meme",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ34bMdzxAZKjhlzBhMIjHqN4EAza0dPJ4l1pe-U96JfnfZ8X",
                    description: " A fine advice meme"
                  },
                ]
              },
              {
                category: "Cartoons",
                images:[
                  {
                    model: "Fry Confused",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBC0A1NFW5I0oBC89cj992xaTIeELpURPUlIO38VXHtod80vD7g",
                    description: "A fine meme of fry"
                  },
                  {
                    model: "Fry Confused",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBC0A1NFW5I0oBC89cj992xaTIeELpURPUlIO38VXHtod80vD7g",
                    description: "A fine meme of fry"
                  },
                  {
                    model: "Fry Confused",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBC0A1NFW5I0oBC89cj992xaTIeELpURPUlIO38VXHtod80vD7g",
                    description: "A fine meme of fry"
                  },
                  {
                    model: "Fry Confused",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBC0A1NFW5I0oBC89cj992xaTIeELpURPUlIO38VXHtod80vD7g",
                    description: "A fine meme of fry"
                  },
                  {
                    model: "Fry Confused",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBC0A1NFW5I0oBC89cj992xaTIeELpURPUlIO38VXHtod80vD7g",
                    description: "A fine meme of fry"
                  },
                  {
                    model: "Fry Confused",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBC0A1NFW5I0oBC89cj992xaTIeELpURPUlIO38VXHtod80vD7g",
                    description: "A fine meme of fry"
                  },
                ]
              },
              {
                category: "Rage",
                images:[
                  {
                    model: "FUUUUUU",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ97l72mStWoFtrvIBMGicQgSCQO0s4dgb9MBRJ_Qd1xou6zeZbA",
                    description: "does more need to be said?"
                  },
                  {
                    model: "FUUUUUU",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ97l72mStWoFtrvIBMGicQgSCQO0s4dgb9MBRJ_Qd1xou6zeZbA",
                    description: "does more need to be said?"
                  },
                  {
                    model: "FUUUUUU",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ97l72mStWoFtrvIBMGicQgSCQO0s4dgb9MBRJ_Qd1xou6zeZbA",
                    description: "does more need to be said?"
                  },
                  {
                    model: "FUUUUUU",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ97l72mStWoFtrvIBMGicQgSCQO0s4dgb9MBRJ_Qd1xou6zeZbA",
                    description: "does more need to be said?"
                  },
                  {
                    model: "FUUUUUU",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ97l72mStWoFtrvIBMGicQgSCQO0s4dgb9MBRJ_Qd1xou6zeZbA",
                    description: "does more need to be said?"
                  },
                  {
                    model: "FUUUUUU",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ97l72mStWoFtrvIBMGicQgSCQO0s4dgb9MBRJ_Qd1xou6zeZbA",
                    description: "does more need to be said?"
                  },
                ]
              },
              {
                category: "New",
                images: [
                  {
                    model: "Memes Ahead",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtAExKUsJnRveovMKznW9CgnG2F31GC_CDeH2zj3u75-ITBiR",
                    description: "He's too ahead of everyone"
                  },
                  {
                    model: "Memes Ahead",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtAExKUsJnRveovMKznW9CgnG2F31GC_CDeH2zj3u75-ITBiR",
                    description: "He's too ahead of everyone"
                  },
                  {
                    model: "Memes Ahead",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtAExKUsJnRveovMKznW9CgnG2F31GC_CDeH2zj3u75-ITBiR",
                    description: "He's too ahead of everyone"
                  },
                  {
                    model: "Memes Ahead",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtAExKUsJnRveovMKznW9CgnG2F31GC_CDeH2zj3u75-ITBiR",
                    description: "He's too ahead of everyone"
                  },
                  {
                    model: "Memes Ahead",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtAExKUsJnRveovMKznW9CgnG2F31GC_CDeH2zj3u75-ITBiR",
                    description: "He's too ahead of everyone"
                  },
                  {
                    model: "Memes Ahead",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtAExKUsJnRveovMKznW9CgnG2F31GC_CDeH2zj3u75-ITBiR",
                    description: "He's too ahead of everyone"
                  },
                ]
              },
            ],
          }
    }




    renderGridRow(rowData, sectionId, index){
        const cellviews = rowData.map( ({model, url, description})  => { return(
            <Card styleName="flexible">
                <Image
                    styleName="medium-wide"
                    source={{ uri: url  }}
                />
                <View styleName="content">
                    <Subtitle numberOfLines={3}>{model}</Subtitle>
                    <View styleName="horizontal">
                    <Caption styleName="collapsible" numberOfLines={2}>{description}</Caption>
                    </View>
                </View>
            </Card>

        )});


        return (
            <GridRow columns={3}> 
              {cellviews}
            </GridRow>
        );
    }


    render(){

        const selectedCategory = this.state.selectedCategory || this.state.categories[0];
        const groupedData = GridRow.groupByRows(selectedCategory.images, 3);
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






