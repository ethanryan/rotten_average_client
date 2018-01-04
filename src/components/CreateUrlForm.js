import React, { Component } from 'react'

import { Form, Grid, Segment } from 'semantic-ui-react'

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
        <Grid centered columns={2}>
          <Grid.Row centered textAlign='center'>
            <Grid.Column centered>

              <Form onSubmit={this.handleSubmit}>

                <Form.Field
                  centered
                  label="Add URL"
                  placeholder="url here"
                  autoFocus
                  control="input"
                  type="text"
                  value={this.state.link}
                  onChange={this.handleChange} />

                  <Segment basic textAlign='center'>
                    <Form.Button content="Submit" type="submit" primary/>
                  </Segment>

                </Form>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }
  }

  export default CreateUrlForm
