import React from 'react';

export default class TBody extends React.Component {

  render() {
    return (
	    <tr>
			<th scope="row"> 
		    	{this.props.data.position}.
		    	<img className="table-logo" src={this.props.data.logo} alt="logo"/>
		    	{this.props.data.equipe}
		    </th>
		    <td>{this.props.data.matchJoue}</td>
		    <td>{this.props.data.victoires}</td>
		    <td>{this.props.data.nuls}</td>
		    <td>{this.props.data.defaites}</td>
		    <td>{this.props.data.butsMarques}</td>
		    <td>{this.props.data.butsEncaisses}</td>
		    <td>{this.props.data.differenceDeButs}</td>
		    <td>{this.props.data.points}</td>
	    </tr>
    );
  }
}
