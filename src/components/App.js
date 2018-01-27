import React, { Component } from 'react';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import { Button, Modal } from 'react-bootstrap';

import LoadScreen from './LoadScreen';

import logoLigue1 from '../assets/ligue1.png';
import logoSerieA from '../assets/seriea.png';
import logoBundesliga from '../assets/bundesliga.png';
import logoLiga from '../assets/liga.svg';
import logoPremierLeague from '../assets/premierleague.png';

import ContainerLigue1 from './ContainerLigue1';
import ContainerSerieA from './ContainerSerieA';
import ContainerBundesliga from './ContainerBundesliga';
import ContainerLiga from './ContainerLiga';
import ContainerPremierLeague from './ContainerPremierLeague';

const KEYS_TO_FILTERS = ['equipe']

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
    ligue1: [],
    serieA: [],
    bundesliga: [],
    liga: [],
    premierLeague: [],
    allTeams: [],
    showModalLiga: false,
    showModalPL: false,
    showModalL1: false,
    showModalBL: false,
    showModalSA: false,
    showModalSearch: false,
    searchTerm: ""
    };
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  componentDidMount(){
  /* LIGUE 1*/
    this.tableLigue1();
    this.lastMatchsLigue1();
    this.nextMatchsLigue1();
  /* SERIE A*/
    this.tableSerieA();
    this.lastMatchsSerieA();
    this.nextMatchsSerieA();
  /* BUNDESLIGA */
    this.tableBundesliga();
    this.lastMatchsBundesliga();
    this.nextMatchsBundesliga();
  /* LIGA */
    this.tableLiga();
    this.lastMatchsLiga();
    this.nextMatchsLiga();
  /* PREMIER LEAGUE */
    this.tablePremierLeague();
    this.lastMatchsPremierLeague();
    this.nextMatchsPremierLeague();
  }

  ///////////////////////////////////////////// ---------- LIGUE 1 ---------- //////////////////////////////////////////////

  tableLigue1 = () => {

    fetch('https://api.football-data.org/v1/competitions/450/leagueTable',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.standing.map(team => (
      {
        position: `${team.position}`,
        equipe: `${team.teamName}`,
        logo: `${team.crestURI}`,
        matchJoue: `${team.playedGames}`,
        victoires: `${team.wins}`,
        nuls: `${team.draws}`,
        defaites: `${team.losses}`,
        butsMarques: `${team.goals}`,
        butsEncaisses: `${team.goalsAgainst}`,
        differenceDeButs: `${team.goalDifference}`,
        points: `${team.points}`,
        victoiresDom: `${team.home.wins}`,
        defaitesDom: `${team.home.losses}`,
        nulsDom: `${team.home.draws}`,
        butsDom: `${team.home.goals}`,
        butsEncaissesDom: `${team.home.goalsAgainst}`,
        victoiresExt: `${team.away.wins}`,
        defaitesExt: `${team.away.losses}`,
        nulsExt: `${team.away.draws}`,
        butsExt: `${team.away.goals}`,
        butsEncaissesExt: `${team.away.goalsAgainst}`,
        key: Math.random()
      }
    )))
    .then( (data)  => this.setState({
    ligue1: {
    ...this.state.ligue1,
    tableLigue1: data
    },
    allTeams: 
    this.state.allTeams.concat(data)  
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  lastMatchsLigue1 = () => {

    fetch('https://api.football-data.org/v1/fixtures?timeFrame=p60&league=FL1',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( (data) => this.setState({
    ligue1: {
    ...this.state.ligue1,
    lastMatchsLigue1: data.sort(this.sortByMatchday('journee'))
    }
    }) 
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  nextMatchsLigue1 = () => {
    fetch('https://api.football-data.org/v1/fixtures?timeFrame=n60&league=FL1',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( data => this.setState({
    ligue1: {
    ...this.state.ligue1,
    nextMatchsLigue1: data
    }
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  ///////////////////////////////////////////// ---------- SERIE A ---------- /////////////////////////////////////////////

  tableSerieA = () => {

    fetch('https://api.football-data.org/v1/competitions/456/leagueTable',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.standing.map(team => (
      {
        position: `${team.position}`,
        equipe: `${team.teamName}`,
        logo: `${team.crestURI}`,
        matchJoue: `${team.playedGames}`,
        victoires: `${team.wins}`,
        nuls: `${team.draws}`,
        defaites: `${team.losses}`,
        butsMarques: `${team.goals}`,
        butsEncaisses: `${team.goalsAgainst}`,
        differenceDeButs: `${team.goalDifference}`,
        points: `${team.points}`,
        victoiresDom: `${team.home.wins}`,
        defaitesDom: `${team.home.losses}`,
        nulsDom: `${team.home.draws}`,
        butsDom: `${team.home.goals}`,
        butsEncaissesDom: `${team.home.goalsAgainst}`,
        victoiresExt: `${team.away.wins}`,
        defaitesExt: `${team.away.losses}`,
        nulsExt: `${team.away.draws}`,
        butsExt: `${team.away.goals}`,
        butsEncaissesExt: `${team.away.goalsAgainst}`,
        key: Math.random()
      }
    )))
    .then( (data)  => this.setState({
    serieA: {
    ...this.state.serieA,
    tableSerieA: data
    },
    allTeams: 
    this.state.allTeams.concat(data)  
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  lastMatchsSerieA = () => {

    fetch('https://api.football-data.org/v1/fixtures?timeFrame=p60&league=SA',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( (data) => this.setState({
    serieA: {
    ...this.state.serieA,
    lastMatchsSerieA: data.sort(this.sortByMatchday('journee'))
    }
    }) 
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  nextMatchsSerieA = () => {
    fetch('https://api.football-data.org/v1/fixtures?timeFrame=n60&league=SA',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( data => this.setState({
    serieA: {
    ...this.state.serieA,
    nextMatchsSerieA: data
    }
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  ///////////////////////////////////////////// ---------- BUNDESLIGA ---------- ////////////////////////////////////////////

  tableBundesliga = () => {

    fetch('https://api.football-data.org/v1/competitions/452/leagueTable',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.standing.map(team => (
      {
        position: `${team.position}`,
        equipe: `${team.teamName}`,
        logo: `${team.crestURI}`,
        matchJoue: `${team.playedGames}`,
        victoires: `${team.wins}`,
        nuls: `${team.draws}`,
        defaites: `${team.losses}`,
        butsMarques: `${team.goals}`,
        butsEncaisses: `${team.goalsAgainst}`,
        differenceDeButs: `${team.goalDifference}`,
        points: `${team.points}`,
        victoiresDom: `${team.home.wins}`,
        defaitesDom: `${team.home.losses}`,
        nulsDom: `${team.home.draws}`,
        butsDom: `${team.home.goals}`,
        butsEncaissesDom: `${team.home.goalsAgainst}`,
        victoiresExt: `${team.away.wins}`,
        defaitesExt: `${team.away.losses}`,
        nulsExt: `${team.away.draws}`,
        butsExt: `${team.away.goals}`,
        butsEncaissesExt: `${team.away.goalsAgainst}`,
        key: Math.random()
      }
    )))
    .then( (data)  => this.setState({
    bundesliga: {
    ...this.state.bundesliga,
    tableBundesliga: data
    },
    allTeams: 
    this.state.allTeams.concat(data)
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  lastMatchsBundesliga = () => {

    fetch('https://api.football-data.org/v1/fixtures?timeFrame=p60&league=BL1',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( (data) => this.setState({
    bundesliga: {
    ...this.state.bundesliga,
    lastMatchsBundesliga: data.sort(this.sortByMatchday('journee'))
    }
    }) 
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  nextMatchsBundesliga = () => {
    fetch('https://api.football-data.org/v1/fixtures?timeFrame=n60&league=BL1',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( data => this.setState({
    bundesliga: {
    ...this.state.bundesliga,
    nextMatchsBundesliga: data
    }
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  }

  //////////////////////////////////////////////// ---------- LIGA ---------- ///////////////////////////////////////////////

  tableLiga = () => {

    fetch('https://api.football-data.org/v1/competitions/455/leagueTable',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.standing.map(team => (
      {
        position: `${team.position}`,
        equipe: `${team.teamName}`,
        logo: `${team.crestURI}`,
        matchJoue: `${team.playedGames}`,
        victoires: `${team.wins}`,
        nuls: `${team.draws}`,
        defaites: `${team.losses}`,
        butsMarques: `${team.goals}`,
        butsEncaisses: `${team.goalsAgainst}`,
        differenceDeButs: `${team.goalDifference}`,
        points: `${team.points}`,
        victoiresDom: `${team.home.wins}`,
        defaitesDom: `${team.home.losses}`,
        nulsDom: `${team.home.draws}`,
        butsDom: `${team.home.goals}`,
        butsEncaissesDom: `${team.home.goalsAgainst}`,
        victoiresExt: `${team.away.wins}`,
        defaitesExt: `${team.away.losses}`,
        nulsExt: `${team.away.draws}`,
        butsExt: `${team.away.goals}`,
        butsEncaissesExt: `${team.away.goalsAgainst}`,
        key: Math.random()
      }
    )))
    .then( (data)  => this.setState({
    liga: {
    ...this.state.liga,
    tableLiga: data
    },
    allTeams: 
    this.state.allTeams.concat(data)  
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  lastMatchsLiga = () => {

    fetch('https://api.football-data.org/v1/fixtures?timeFrame=p60&league=PD',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( (data) => this.setState({
    liga: {
    ...this.state.liga,
    lastMatchsLiga: data.sort(this.sortByMatchday('journee'))
    }
    }) 
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  nextMatchsLiga = () => {
    fetch('https://api.football-data.org/v1/fixtures?timeFrame=n60&league=PD',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( data => this.setState({
    liga: {
    ...this.state.liga,
    nextMatchsLiga: data
    }
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  }

  /////////////////////////////////////////// ---------- PREMIER LEAGUE ---------- //////////////////////////////////////////

  tablePremierLeague = () => {

    fetch('https://api.football-data.org/v1/competitions/445/leagueTable',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.standing.map(team => (
      {
        position: `${team.position}`,
        equipe: `${team.teamName}`,
        logo: `${team.crestURI}`,
        matchJoue: `${team.playedGames}`,
        victoires: `${team.wins}`,
        nuls: `${team.draws}`,
        defaites: `${team.losses}`,
        butsMarques: `${team.goals}`,
        butsEncaisses: `${team.goalsAgainst}`,
        differenceDeButs: `${team.goalDifference}`,
        points: `${team.points}`,
        victoiresDom: `${team.home.wins}`,
        defaitesDom: `${team.home.losses}`,
        nulsDom: `${team.home.draws}`,
        butsDom: `${team.home.goals}`,
        butsEncaissesDom: `${team.home.goalsAgainst}`,
        victoiresExt: `${team.away.wins}`,
        defaitesExt: `${team.away.losses}`,
        nulsExt: `${team.away.draws}`,
        butsExt: `${team.away.goals}`,
        butsEncaissesExt: `${team.away.goalsAgainst}`,
        key: Math.random()
      }
    )))
    .then( (data)  => this.setState({
    premierLeague: {
    ...this.state.premierLeague,
    tablePremierLeague: data
    },
    allTeams: 
    this.state.allTeams.concat(data) 
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  lastMatchsPremierLeague = () => {

    fetch('https://api.football-data.org/v1/fixtures?timeFrame=p60&league=PL',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( (data) => this.setState({
    premierLeague: {
    ...this.state.premierLeague,
    lastMatchsPremierLeague: data.sort(this.sortByMatchday('journee'))
    }
    }) 
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  } 

  nextMatchsPremierLeague = () => {
    fetch('https://api.football-data.org/v1/fixtures?timeFrame=n60&league=PL',
      {
        headers: {
          'X-Auth-Token': '8f939c7c1a43480bba08529ef7500c75'
        }
      })
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.fixtures.map(match => (
      {
        domicile: `${match.homeTeamName}`,
        exterieur: `${match.awayTeamName}`,
        scoreDomicile: `${match.result.goalsHomeTeam}`,
        scoreExterieur: `${match.result.goalsAwayTeam}`,
        date: `${match.date}`.replace(/([a-zA-Z ])/g, " "),
        journee: `${match.matchday}`,
        key: Math.random()
      }
    )))
    .then( data => this.setState({
    premierLeague: {
    ...this.state.premierLeague,
    nextMatchsPremierLeague: data
    }
    })
    )
    .catch(error => console.log('parsing 7 past match failed', error));
  }

  ////////////////////////////////////////////// ---------- SORT ---------- ////////////////////////////////////////////////

  sortByMatchday = (property) => {
      var sortOrder = -1;
      if(property[0] === "-") {
          property = property.substr(1);
      }
      return (a,b) => {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }

  sortByAlphabetical = (property) => {
      var sortOrder = 1;
      if(property[0] === "-") {
          property = property.substr(1);
      }
      return (a,b) => {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }

  /////////////////////////////////////////////// ---------- MODAL ---------- ///////////////////////////////////////////////

  closeLiga = () => {
    this.setState({ showModalLiga: false });
  }

  openLiga = () => {
    this.setState({ showModalLiga: true });
  }

  closePL = () => {
    this.setState({ showModalPL: false });
  }

  openPL = () => {
    this.setState({ showModalPL: true });
  }

  closeL1 = () => {
    this.setState({ showModalL1: false });
  }

  openL1 = () => {
    this.setState({ showModalL1: true });
  }

  closeBL = () => {
    this.setState({ showModalBL: false });
  }

  openBL = () => {
    this.setState({ showModalBL: true });
  }

  closeSA = () => {
    this.setState({ showModalSA: false });
  }

  openSA = () => {
    this.setState({ showModalSA: true });
  }

  closeSearch = () => {
    this.setState({ showModalSearch: false });
  }

  openSearch = () => {
    this.setState({ showModalSearch: true });
  }

  /////////////////////////////////////////////// ---------- SEARCH ---------- //////////////////////////////////////////////

  filteredTeam = (myConst) => {
    if (this.state.searchTerm.length >= 1) {
      return myConst
    }
  }

  ////////////////////////////////////////////// ---------- RENDER ---------- ///////////////////////////////////////////////

  render() {

    const filteredTeams = this.state.allTeams === undefined ? [] : this.state.allTeams.sort(this.sortByAlphabetical('equipe')).filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    const newFilteredTeams = filteredTeams.slice(0,3).map(equipe => {
          return (
            <div key={equipe.key} className="container-fluid">
                  <div className="search-list col-xs-12" onClick={this.openSearch}><h5>{equipe.equipe}</h5></div>
                  <Modal show={this.state.showModalSearch} onHide={this.closeSearch}>
                    <Modal.Header closeButton>
                      <div className="col-xs-12 info-team">
                          <h2>{equipe.equipe}</h2>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container-fluid">
                        <div className="col-xs-12 info-team">
                          <img src={equipe.logo} className="logo-team" alt="logo equipe"/>
                        </div>
                      </div>
                      <div className="container-fluid container-stat">
                        <div className="container-fluid">
                          <div className="col-xs-12 info-team-title">
                            <h3>Statistiques de la saison</h3>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-4 info-team">
                            <h5>Position en championnat</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Historique de la saison</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Nombre de points</h5>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-4  info-team">
                            <h6>{equipe.position}</h6>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h6>{equipe.victoires}V  {equipe.nuls}N  {equipe.defaites}D</h6>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h6>{equipe.points}</h6>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-4  info-team">
                            <h5>Buts marqués</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Buts encaissés</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Différence de buts</h5>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-4  info-team">
                            <h6>{equipe.butsMarques}</h6>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h6>{equipe.butsEncaisses}</h6>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h6>{equipe.differenceDeButs}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid container-stat">
                        <div className="container-fluid">
                          <div className="col-xs-12 info-team-title">
                            <h3>Statistiques à domicile</h3>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-4 info-team">
                            <h5>Victoires</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Nuls</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Defaites</h5>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-4 info-team">
                            <h5>{equipe.victoiresDom}</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>{equipe.nulsDom}</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>{equipe.defaitesDom}</h5>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-2"></div>
                          <div className="col-xs-4  info-team">
                            <h5>Buts marqués</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Buts encaissés</h5>
                          </div>
                          <div className="col-xs-2"></div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-2"></div>
                          <div className="col-xs-4  info-team">
                            <h5>{equipe.butsDom}</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>{equipe.butsEncaissesDom}</h5>
                          </div>
                          <div className="col-xs-2"></div>
                        </div>
                      </div>
                      <div className="container-fluid container-stat">
                        <div className="container-fluid">
                          <div className="col-xs-12 info-team-title">
                              <h3>Statistiques à l'exterieur</h3>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-4 info-team">
                            <h5>Victoires</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Nuls</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Defaites</h5>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-4 info-team">
                            <h5>{equipe.victoiresExt}</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>{equipe.nulsExt}</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>{equipe.defaitesExt}</h5>
                          </div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-2"></div>
                          <div className="col-xs-4  info-team">
                            <h5>Buts marqués</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>Buts encaissés</h5>
                          </div>
                          <div className="col-xs-2"></div>
                        </div>
                        <div className="row aligned-row">
                          <div className="col-xs-2"></div>
                          <div className="col-xs-4  info-team">
                            <h5>{equipe.butsExt}</h5>
                          </div>
                          <div className="col-xs-4  info-team">
                            <h5>{equipe.butsEncaissesExt}</h5>
                          </div>
                          <div className="col-xs-2"></div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.closeSearch}>Close</Button>
                    </Modal.Footer>
                  </Modal>
            </div>
          )
        })

    if(this.state.ligue1.nextMatchsLigue1 === undefined || this.state.bundesliga.nextMatchsBundesliga === undefined || 
      this.state.serieA.nextMatchsSerieA === undefined || this.state.liga.nextMatchsLiga === undefined ||
      this.state.premierLeague.nextMatchsPremierLeague === undefined ) return <LoadScreen/>

    return (
      <div>
        <BrowserRouter>
          <div className="app">
            <div className="bg"></div>
            <h1 className="main-title">FootStats</h1>
            <div className="container">
              <h2>Choisir un championnat</h2>
              <div className="row logo-row">
                <div className="col-xs-6">
                  <Link to={`/liga`} onClick={this.openLiga}><img src={logoLiga} className="logo logo-liga" alt='logo laliga'/></Link>
                  <Modal show={this.state.showModalLiga} onHide={this.closeLiga}>
                    <Modal.Header closeButton>
                      <Modal.Title>LaLiga</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Route path={`/liga`} render={()=><ContainerLiga
                          dataPM={this.state.liga.lastMatchsLiga}
                          dataNM={this.state.liga.nextMatchsLiga}
                          sortByMatchday={this.sortByMatchday}
                          dataTable={this.state.liga.tableLiga}/>}
                    />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.closeLiga}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="col-xs-6">
                  <Link to={`/premierleague`} onClick={this.openPL}><img src={logoPremierLeague} className="logo logo-pl" alt='logo pl'/></Link>
                  <Modal show={this.state.showModalPL} onHide={this.closePL}>
                    <Modal.Header closeButton>
                      <Modal.Title>Premier League</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Route path={`/premierleague`} render={()=><ContainerPremierLeague
                          dataPM={this.state.premierLeague.lastMatchsPremierLeague}
                          dataNM={this.state.premierLeague.nextMatchsPremierLeague}
                          sortByMatchday={this.sortByMatchday}
                          dataTable={this.state.premierLeague.tablePremierLeague}/>}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.closePL}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <div className="row logo-row"> 
                <div className="col-xs-4">
                  <Link to={`/ligue1`} onClick={this.openL1}><img src={logoLigue1} className="logo logo-ligue1" alt='logo l1'/></Link>
                  <Modal show={this.state.showModalL1} onHide={this.closeL1}>
                    <Modal.Header closeButton>
                      <Modal.Title>Ligue 1</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Route path={`/ligue1`} render={()=><ContainerLigue1
                              dataPM={this.state.ligue1.lastMatchsLigue1}
                              dataNM={this.state.ligue1.nextMatchsLigue1}
                              sortByMatchday={this.sortByMatchday}
                              dataTable={this.state.ligue1.tableLigue1}/>}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.closeL1}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="col-xs-4">
                  <Link to={`/bundesliga`} onClick={this.openBL}><img src={logoBundesliga} className="logo logo-bundesliga" alt='logo bundesliga'/></Link>
                  <Modal show={this.state.showModalBL} onHide={this.closeBL}>
                    <Modal.Header closeButton>
                      <Modal.Title>Bundesliga</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Route path={`/bundesliga`} render={()=><ContainerBundesliga
                            dataPM={this.state.bundesliga.lastMatchsBundesliga}
                            dataNM={this.state.bundesliga.nextMatchsBundesliga}
                            sortByMatchday={this.sortByMatchday}
                            dataTable={this.state.bundesliga.tableBundesliga}/>}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.closeBL}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="col-xs-4">
                  <Link to={`/seriea`} onClick={this.openSA}><img src={logoSerieA} className="logo logo-seriea" alt='logo seriea'/></Link>
                  <Modal show={this.state.showModalSA} onHide={this.closeSA}>
                    <Modal.Header closeButton>
                      <Modal.Title>Serie A</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Route path={`/seriea`} render={()=><ContainerSerieA
                            dataPM={this.state.serieA.lastMatchsSerieA}
                            dataNM={this.state.serieA.nextMatchsSerieA}
                            sortByMatchday={this.sortByMatchday}
                            dataTable={this.state.serieA.tableSerieA}/>}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.closeSA}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <div className="search-part">
              <h2>Trouver une équipe</h2>
              <div className="container">
                <div className="col-xs-3"></div>
                <div className="col-xs-6 search-input-container">
                  <SearchInput className="search-input" placeholder="Entrez une équipe..." onChange={this.searchUpdated} />
                  {this.filteredTeam(newFilteredTeams)}
                </div>
                <div className="col-xs-3"></div>
              </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default withRouter(App)
