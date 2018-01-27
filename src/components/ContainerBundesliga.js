import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';

import THead from './Table/THead';
import TBody from './Table/TBody';

import LastMatchday from './Matchs/Past/LastMatchday';
import LastMatchdayRender from './Matchs/Past/LastMatchdayRender';

import NextMatchday from './Matchs/Next/NextMatchday';
import NextMatchdayRender from './Matchs/Next/NextMatchdayRender';

export default class ContainerBundesliga extends React.Component {
  
  render() {

  	const lastMatchday = this.props.dataPM.slice(0, 10)
  	const nextMatchday = this.props.dataNM.slice(0,10)
  	const lastMatchdayMatchs = lastMatchday.map(matchs => <LastMatchday key={matchs.key} informations={matchs} />);
  	const nextMatchdayMatchs = nextMatchday.map(matchs => <NextMatchday key={matchs.key} informations={matchs} />);

  	const tBody = this.props.dataTable.map(data => <TBody key={data.key} data={data}/>)

    return (
    	<div>
		    <div>
		      	<ul className="league-nav row">
		      		<li className="col-xs-4"><NavLink to={`/bundesliga/table`}>Classement</NavLink></li>
			      	<li className="col-xs-4"><NavLink to={`/bundesliga/lastmatchday`}>Derniers résultats</NavLink></li>
			      	<li className="col-xs-4"><NavLink to={`/bundesliga/nextmatchday`}>Prochains matchs</NavLink></li>
		    	</ul>
		    	{/* Write routes here... */}
		    	<Route exact path={`/bundesliga`} render={() => <Redirect to={`/bundesliga/table`}/>}/>
		    	<Route path={`/bundesliga/table`} render={()=>
		    		<div className="col-xs-12 table-render">
		    			<THead TBody={tBody}/>
		    		</div>}
		    	/>
				<Route path={`/bundesliga/lastmatchday`} render={()=>
					<div className="col-xs-12">
						<LastMatchdayRender lastMatchdayMatchs={lastMatchdayMatchs}/>
					</div>}
				/>
		    	<Route path={`/bundesliga/nextmatchday`} render={()=>
		    		<div className="col-xs-12">
		    			<NextMatchdayRender nextMatchdayMatchs={nextMatchdayMatchs}/>
		    		</div>}
		    	/>
      		</div>
      	</div>
    );
  }
}
