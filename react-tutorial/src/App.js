import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  
    render() {
        const characters = [
          {
            gmood: 'Happy',
            smood: 'Mellow vibes',
            drink: 'fill',
          },
          {
            gmood: 'Sad',
            smood: 'Feelings hurt :(',
            drink: 'fill',
          },
          {
            gmood: 'Energetic',
            smood: 'Bouta hit the gym',
            drink: 'fill',
          },
          {
            gmood: 'Angry',
            smood: 'FUUUUUCCCKKKK',
            drink: 'fill',
          },
          {
            gmood: 'PArtYY',
            smood: 'Demon time',
            drink: 'fill',
          }
        ]
    
        return (
          <div className="container">
            <Table characterData={characters} />
          </div>
        )
      }
}

export default App