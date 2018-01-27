import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';

import THead from './Table/THead';
import TBody from './Table/TBody';

import LastMatchday from './Matchs/Past/LastMatchday';
import LastMatchdayRender from './Matchs/Past/LastMatchdayRender';

import NextMatchday from './Matchs/Next/NextMatchday';
import NextMatchdayRender from './Matchs/Next/NextMatchdayRender';

export default class ContainerLigue1 extends React.Component {
  
  render() {

  	const lastMatchday = this.props.dataPM.slice(0, 10)
  	const nextMatchday = this.props.dataNM.slice(0,10)
  	const lastMatchdayMatchs = lastMatchday.map(matchs => <LastMatchday key={matchs.key} informations={matchs} />);
  	const nextMatchdayMatchs = nextMatchday.map(matchs => <NextMatchday key={matchs.key} informations={matchs} />);

  	const tBody = this.props.dataTable.map(data => <TBody key={data.key} data={data}/>)

    return (
    	<div>
		    <div>
		      	<ul className="league-nav row aligned-row">
		      		<li className="col-xs-4"><NavLink to={`/ligue1/table`}><h5>Classement</h5></NavLink></li>
			      	<li className="col-xs-4"><NavLink to={`/ligue1/lastmatchday`}><h5>Derniers résultats</h5></NavLink></li>
			      	<li className="col-xs-4"><NavLink to={`/ligue1/nextmatchday`}><h5>Prochains matchs</h5></NavLink></li>
		    	</ul>
		    	{/* Write routes here... */}
		    	<Route exact path={`/ligue1`} render={() => <Redirect to={`/ligue1/table`}/>}/>
		    	<Route path={`/ligue1/table`} render={()=>
		    		<div className="col-xs-12 table-render">
		    			<THead TBody={tBody}/>
		    		</div>}
		    	/>
				<Route path={`/ligue1/lastmatchday`} render={()=>
					<div className="col-xs-12">
						<LastMatchdayRender lastMatchdayMatchs={lastMatchdayMatchs}/>
					</div>}
				/>
		    	<Route path={`/ligue1/nextmatchday`} render={()=>
		    		<div className="col-xs-12">
		    			<NextMatchdayRender nextMatchdayMatchs={nextMatchdayMatchs}/>
		    		</div>}
		    	/>
      		</div>
      	</div>
    );
  }
}
