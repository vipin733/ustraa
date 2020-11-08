import React, {Component} from 'react'
import Container from '@material-ui/core/Container'

class Index extends Component{
  render(){
    return(
      <Container maxWidth="md">
        {this.props.children}
      </Container>
    )
  }
}

export default Index