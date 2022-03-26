import React, {Component} from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>General Mood</th>
          <th>Specific Mood</th>
          <th>Drink</th>
          <th>Playlist</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.gmood}</td>
          <td>{row.smood}</td>
          <td>{row.drink}</td>
          <td>{row.playlist}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

class Table extends Component {
    render() {
        const {characterData} = this.props
    
        return (
          <table>
            <TableHeader />
            <TableBody characterData={characterData} />
          </table>
        )
      }
}

export default Table