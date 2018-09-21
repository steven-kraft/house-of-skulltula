import React from 'react';

class AudioMute extends React.Component {
  render() {
    var image = "audio_on.png"
    if (this.props.mute) {image = "audio_off.png"}
    return (
      <img src={"./assets/images/" + image} alt="" className="audio" onClick={this.props.toggleMute} />
    )
  }
}

export default AudioMute;
