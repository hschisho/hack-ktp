import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  
    render() {
        const characters = [
          {
            gmood: 'Happy',
            smood: 'Mellow vibes',
          },
          {
            gmood: 'Sad',
            smood: 'Feelings hurt :(',
          },
          {
            gmood: 'Energetic',
            smood: 'Bouta hit the gym',
          },
          {
            gmood: 'Angry',
            smood: 'FUUUUUCCCKKKK',
          },
          {
            gmood: 'PArtYY',
            smood: 'Demon time',
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