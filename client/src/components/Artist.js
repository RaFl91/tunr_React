import React, {Component} from 'react';
import axios from "axios";

class Artist extends Component {
  state = {
    artist: {},
    songs: []
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // const {id} = this.props.match.params

    axios.get(`/api/artists/${id}`).then(res => {
      this.setState({
        artist: res.data,
        songs: res.data.songs
      })
    })
  }

  render() {
    return (
      <div>
        <img src={this.state.artist.photo_url} alt=""/>
        <h1>{this.state.artist.name}</h1>
        {this.state.songs.map(song => (
          <div key={song.id}>
            <h4>{song.title}</h4>
            <audio controls src={song.preview_url}></audio>
          </div>
        ))}
      </div>
    );
  }
}

export default Artist;