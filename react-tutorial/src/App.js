import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  
    render() {
        const characters = [
          {
            gmood: 'Happy',
            smood: 'Mellow vibes',
            drink: 'fill',
            playlist: 'fill',
          },
          {
            gmood: 'Sad',
            smood: 'Feelings hurt :(',
            drink: 'fill',
            playlist: 'fill',
          },
          {
            gmood: 'Energetic',
            smood: 'Bouta hit the gym',
            drink: 'fill',
            playlist: 'fill',
          },
          {
            gmood: 'Angry',
            smood: 'FUUUUUCCCKKKK',
            drink: 'fill',
            playlist: 'fill',
          },
          {
            gmood: 'PArtYY',
            smood: 'Demon time',
            drink: 'fill',
            playlist: 'fill',
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