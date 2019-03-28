import React from 'react';
import { asset, Pano, Text, View, AmbientLight, Sound, VrButton } from 'react-vr';

export default class App extends React.Component {
  inState = {
    displayText: 'Go outside',
    background: 'office_inside.jpg',
    sound: 'office.wav',
    inside: true
  };
  outState = {
    displayText: 'Go to work',
    background: 'office_outside.jpg',
    sound: 'birds.wav',
    inside: false
  };
  constructor(props) {
    super(props);
    this.state = this.inState;
  }
  changeScene() {
      if(this.state.inside === true){
          this.setState(this.outState);
      } else {
          this.setState(this.outState);
      }
  }
  
  render() {
    return (
      <View>
        <Pano source={asset(this.state.background)} />
        <Sound 
          loop={true}
          volume={0.7}
          source={{
            wav: asset(this.state.sound)
          }}
        />
        <VrButton onClick={this.changeScene.bind(this)}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 2, -6]}],
            }}>
            {this.state.displayText}
          </Text>
        </VrButton>
      </View>
    );
  }
};
