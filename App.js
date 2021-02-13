import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from './components/AppHeader';

class SoundButton1 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://soundbible.com/mp3/Civil War Drummer -SoundBible.com-700036269.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 80,
          marginTop: 100,
          borderColor: 'lightgreen',
          borderWidth: 3,
          borderRadius: 500,
          width: 200,
          height: 50,
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={this.playSound}>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Sound 1</Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton2 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://soundbible.com/mp3/Computer_Magic-Microsift-1901299923.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 80,
          marginTop: 50,
          borderColor: 'lightgreen',
          borderWidth: 3,
          borderRadius: 500,
          width: 200,
          height: 50,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={this.playSound}>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Sound 2</Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton3 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://soundbible.com/mp3/gun_battle_sound-ReamProductions-1158375208.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 80,
          marginTop: 50,
          borderColor: 'lightgreen',
          borderWidth: 3,
          borderRadius: 500,
          width: 200,
          height: 50,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={this.playSound}>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Sound 3</Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton4 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://soundbible.com/mp3/Civil War Drummer -SoundBible.com-700036269.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 80,
          marginTop: 50,
          borderColor: 'lightgreen',
          borderWidth: 3,
          borderRadius: 500,
          width: 200,
          height: 50,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={this.playSound}>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Sound 4</Text>
      </TouchableOpacity>
    );
  }
}

class SoundButton5 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://soundbible.com/mp3/Civil War Drummer -SoundBible.com-700036269.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 80,
          marginTop: 50,
          borderColor: 'lightgreen',
          borderWidth: 3,
          borderRadius: 500,
          width: 200,
          height: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={this.playSound}>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Sound 5</Text>
      </TouchableOpacity>
    );
  }
}

class StopButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 100,
          marginTop: 50,
          borderColor: 'blue',
          borderWidth: 3,
          borderRadius: 10,
          width: 160,
          height: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          Audio.setIsEnabledAsync(false);
        }}>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Stop Sound</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppHeader/>
        <SoundButton1 />
        <SoundButton2 />
        <SoundButton3 />
        <SoundButton4 />
        <SoundButton5 />
        <StopButton />
      </View>
    );
  }
}
