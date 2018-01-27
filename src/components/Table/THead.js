import React from 'react';

export default class THead extends React.Component {

  render() {

    return (
      <div className="table-responsive">
	    <table className="table">
		  <thead>
		    <tr>
		      <td>Club</td>
		      <th>MJ</th>
		      <th>G</th>
		      <th>N</th>
		      <th>P</th>
		      <th>BP</th>
		      <th>BC</th>
		      <th>DB</th>
		      <th>Pts</th>
		    </tr>
		  </thead>
		  <tbody>
		  	{this.props.TBody}
		  </tbody>
		</table>  		
      </div>
    );
  }
}
