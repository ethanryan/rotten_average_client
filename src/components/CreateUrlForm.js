import React, { Component } from 'react'

import { Form, Grid } from 'semantic-ui-react'

class CreateUrlForm extends Component {

  constructor(props) {
    super(props)
    this.state=({
      link: '',
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    this.setState({
      link: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const link = {
      link: this.state.link,
    }
    console.log('CreateUrlForm submitted: ', this.state)
    this.props.handleSubmit( link )
    this.setState({link: ''})
  }

  render() {

    return(

      <div className="CreateUrlForm">
        <Grid>
          <Grid.Row centered>
            <Form onSubmit={this.handleSubmit}>

              <Form.Field
                label="Add URL"
                placeholder="url here"
                autoFocus
                control="input"
                type="text"
                value={this.state.link}
                onChange={this.handleChange} />

                <Form.Button content="Submit" type="submit" primary/>

              </Form>
            </Grid.Row>
          </Grid>
        </div>
      )
    }
  }

  export default CreateUrlForm
