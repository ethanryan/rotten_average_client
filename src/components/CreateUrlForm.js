import React, { Component } from 'react'

import { Form, Grid } from 'semantic-ui-react'

class CreateUrlForm extends Component {

  constructor(props) {
    console.log('**** props from CreateUrlForm:', props)
    super(props)
    this.state=({
      link: '',
    })
  this.handleCreateUrlFormSubmit = this.handleCreateUrlFormSubmit.bind(this)
} //end of constructor


// componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
//   this.setState({
//     story: props.story
//   })
// }

handleUrlInputChange(event) {
  const link = event.target.value
  this.setState({
    link: link,
  })
}

handleCreateUrlFormSubmit(event) {
  event.preventDefault()
  const link = {
    link: this.state.link,
  }
  console.log('CreateUrlForm submitted: ', this.state)
  this.props.handleSubmit( link )
  this.setState({link: ''}) //this clears form onSubmit
}


render() {

  return(

    <div className="CreateUrlForm">
      <Grid>
        <Grid.Row centered>
          <Form onSubmit={this.handleCreateUrlFormSubmit}>

            {/* <Form.Field required>
              <label>Last name</label>
              <Input placeholder='Full name' />
            </Form.Field> */}

            <Form.Field
              label="Add URL"
              placeholder="url here"
              autoFocus
              control="input"
              type="text"
              // width={12}
              //key="heroName"
              onChange={this.handleUrlInputChange.bind(this)} />

              <Form.Button content="Submit" type="submit" primary/>

            </Form>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default CreateUrlForm
