import React, { Component } from 'react'

import { Form, Grid, Segment } from 'semantic-ui-react'

class CreateUrlForm extends Component {

  constructor(props) {
    super(props)
    this.state=({
      link: '',
      valid: true
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  // handleChange(event) {
  //   this.setState({
  //     link: event.target.value,
  //   })
  // }

  handleChange(event) {
    const link = event.target.value
    const linkValid = this.validateLink(link)

    this.setState({
      link: event.target.value,
      valid: linkValid
    })
  }


  // validateLink(link) {
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   return re.test(link)
  // }

  validateLink(string) {
  	var root = "https://www.rottentomatoes.com"
    var answer = string.startsWith(root)
    console.log(answer)
    return answer
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

    let fieldContainerClass = 'field-container'
    const { link, valid } = this.state

    if (!valid) {
      fieldContainerClass += ' error'
    }

    return(

      <div className="CreateUrlForm">

        <h1>Paste URL Here</h1>

        <Grid centered columns={2}>
          <Grid.Row centered textAlign='center'>
            <Grid.Column centered>

              <Form onSubmit={this.handleSubmit}>

                <div className={fieldContainerClass}>
                <Form.Field
                  centered
                  label="Add URL"
                  placeholder="url here"
                  autoFocus
                  control="input"
                  type="text"
                  value={this.state.link}
                  onChange={this.handleChange}
                />
                <span>URL must be from Rotten Tomatoes!</span>
                </div>

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
