import React from 'react';
import Game from '../../../game/Game.js';
import GameRendererView from './GameRendererView.js';
import ScoreView from '../stateless/ScoreView.js';
import SongQueueView from '../stateless/SongQueueView.js';
import { connection } from './GameModel';

class GameView extends React.Component {
  componentDidMount() {
    // Here we will create the new game instance
    // and bind that game instance to the dom and pass the
    // current song.
    var game = new Game('game', this.props.params.fileName);
    game.addEventListener('updateTime', (newState, time) => {
      this.props.updateTime(time);
    });
  }
  render() {
    return (
      <div>
        <ScoreView time={this.props.elapsed} duration={this.props.duration}/>
        <GameRendererView />
        <SongQueueView fileName={this.props.params.fileName}/>
      </div>
    );
  }
}

export default connection(GameView);
