# Swiper
@chainplatform/country support react-native and react-native-web

<p align="center">
  <a href="https://github.com/ChainPlatform/react-native-country-codes-picker/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/swiper">
    <img src="https://img.shields.io/npm/v/@chainplatform/swiper?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/swiper">
    <img src="https://img.shields.io/npm/dt/@chainplatform/swiper.svg"></img>
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/swiper">
    <img src="https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20web-blue"></img>
  </a>
  <a href="https://github.com/ChainPlatform/react-native-country-codes-picker/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=doansan">
    <img src="https://img.shields.io/twitter/follow/doansan.svg?label=Follow%20@doansan" alt="Follow @doansan" />
  </a>
</p>

### Install
```
npm install @chainplatform/country --save
```
or
```
yarn add @chainplatform/country
```


### Usage

```js
import React from 'react';
import {CountryPicker} from '@chainplatform/country';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          show: false
        };
    }

  render() {
    return (
      <View style={{flex:1}}>
        <CountryPicker
            show={this.state.show}
            inputPlaceholder={"search_placeholder"}
            searchMessage={"search_no_result"}
            pickerButtonOnPress={(item) => {
                console.log("item ", item);
                this.setState({show: false});
            }}
            style={{
                // Styles for whole modal [View]
                modal: {
                  
                },
                // Styles for modal backdrop [View]
                backdrop: {},
                // Styles for bottom input line [View]
                line: {
                    with: 0,
                    height: 0
                },
                // Styles for list of countries [FlatList]
                itemsList: {
                    
                },
                // Styles for input [TextInput]
                textInput: {
                    
                },
                // Styles for country button [Pressable]
                countryButtonStyles: {
                    
                },
                // Styles for search message [Text]
                searchMessageText: {
                    
                },
                // Styles for search message container [View]
                countryMessageContainer: {},
                // Flag styles [Text]
                flag: {},
                // Dial code styles [Text]
                dialCode: {
                    
                },
                // Country name styles [Text]
                countryName: {
                    
                }
            }}
        />
      </View>
    );
  }
}
```