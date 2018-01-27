import React from 'react';

export default class NextMatchday extends React.Component {

  render() {
    return (
      <div className="league-result">
      	<div>{this.props.informations.date}</div>
        <div><p>Journée {this.props.informations.journee} / 38</p></div>
      	<div className="row aligned-row">
      		<div className="col-xs-5">
      			<h5>{this.props.informations.domicile}</h5>
      		</div>
      		<h4 className="col-xs-2">-</h4>
      		<div className="col-xs-5">
      			<h5>{this.props.informations.exterieur}</h5>
      		</div>
      	</div>
      </div>
    );
  }
}
