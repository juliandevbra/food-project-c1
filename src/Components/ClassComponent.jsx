import { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        console.log('Se ha creado el constructor')
        this.state = {
            name: 'Luciano'
        }
    }
    componentDidMount() {
        console.log('El componente se ha montado')
        setTimeout(() => {
            this.setState({name: 'Celina'})
        }, 2000)
    }
    
    componentDidUpdate(){
        console.log('El componente se ha actualizado')
    }

    componentWillUnmount(){
        console.log('El componente se ha desmontado')
    }
    

  render() {
      console.log('Se ha renderizado el componente')
    return (
      <div>
          <h1>{this.props.titulo}</h1>
          <h2>{this.state.name}</h2>
      </div>
    )
  }
}
