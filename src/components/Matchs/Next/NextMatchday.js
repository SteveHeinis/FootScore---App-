import React from 'react';

export default class NextMatchday extends React.Component {

  render() {
    return (
      <div className="league-result">
      	<div>{this.props.informations.date}</div>
        <div><p>Journée {this.props.informations.journee} / 38</p></div>
      	<div className="row">
      		<div className="col-xs-5">
      			<h3>{this.props.informations.domicile}</h3>
      		</div>
      		<h3 className="col-xs-2">-</h3>
      		<div className="col-xs-5">
      			<h3>{this.props.informations.exterieur}</h3>
      		</div>
      	</div>
      </div>
    );
  }
}
