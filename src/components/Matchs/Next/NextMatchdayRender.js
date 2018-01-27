import React from 'react';

export default class NextMatchdayRender extends React.Component {

	ifNoMatchs = (state) => {
  		if (state.length === 0){
  			return <div className="noMatchsData"><h3>Pas de matchs pour cette période</h3></div>
  		}
  		else {
  			return state
  		}
  	}

  render() {
    return (
      <div>
 		{this.ifNoMatchs(this.props.nextMatchdayMatchs)}
      </div>
    );
  }
}
