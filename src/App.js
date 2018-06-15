import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    currentKey: ''
  }

  play = (e) => {
    this.setState({currentKey: e.key})
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) {
      return
    } else {
      button.classList.add("active")
      setTimeout(function() {
        button.classList.remove("active")
      }, 100)
      audio.currentTime = 0;
      audio.play();
    }


  }

  componentDidMount() {
    document.addEventListener("keydown", this.play)
  }

  render() {
    return (
      <div className="App">
        <audio data-key="65" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        <audio data-key="83" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        <audio data-key="68" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        <audio data-key="87" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        <audio data-key="69" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        <audio data-key="90" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        <audio data-key="88" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        <audio data-key="67" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
        <audio data-key="81" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        <div className='drum-machine'>
          <div className="drum-pad" id="q" data-key="81">q
        </div>
          <div className="drum-pad" id="w" data-key="87">w
        </div>
          <div className="drum-pad" id="e" data-key="69">e
        </div>
          <div className="drum-pad" id="e" data-key="65">e
        </div>
          <div className="drum-pad" id="e" data-key="83">e
        </div>
          <div className="drum-pad" id="e" data-key="68">e
        </div>
          <div className="drum-pad" id="e" data-key="90">e
        </div>
          <div className="drum-pad" id="e" data-key="88">e
        </div>
          <div className="drum-pad" id="e" data-key="67">e
        </div>
        </div>
        <h1 className="current">{this.state.currentKey}</h1>
      </div>
      
    );
  }
}

export default App;
