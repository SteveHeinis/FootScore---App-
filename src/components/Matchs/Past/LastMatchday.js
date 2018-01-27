import React from 'react';

export default class LastMatchday extends React.Component {

  render() {
    return (
      <div className="league-result">
      	<div>{this.props.informations.date}</div>
      	<div><p>Journée {this.props.informations.journee} / 38</p></div>
      	<div className="row">
      		<div className="col-xs-5">
      			<h3>{this.props.informations.domicile}</h3>
      			<h4>{this.props.informations.scoreDomicile}</h4>
      		</div>
      		<h3 className="col-xs-2">-</h3>
      		<div className="col-xs-5">
      			<h3>{this.props.informations.exterieur}</h3>
      			<h4>{this.props.informations.scoreExterieur}</h4>
      		</div>
      	</div>
      </div>
    );
  }
}
