import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',

    osat : [
      {
       nimi: 'Reactin perusteet',
       tehtavia: 10
      },
      {
       nimi: 'Tiedonvälitys propseilla',
       tehtavia: 7
      },
      {
       nimi: 'Komponenttien tila',
       tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko teksti={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa tehtavia={kurssi.osat.map(osa => osa.tehtavia)} />
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <h1>{props.teksti}</h1>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
      <Osa nimi={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
      <Osa nimi={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.nimi} {props.tehtavia}</p>
  )
}

const Yhteensa = (props) => {
  return (
    <p>yhteensa {props.tehtavia.reduce(sum, 0)}</p>
  )
}

const sum = (a,b) => a + b

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
