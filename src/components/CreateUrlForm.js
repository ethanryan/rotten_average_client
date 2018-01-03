import React, { Component } from 'react'

import { Form, Grid } from 'semantic-ui-react'

class CreateUrlForm extends Component {

  constructor(props) {
    console.log('**** props from CreateUrlForm:', props)
    super(props)
    this.state=({ //organizing this so it's not nested, but post request will be nested
    story: '',
    //user_id: this.props.user_id, //need to set user_id here??? keep losing user_id on page reload
    hero: {
      name: 'HERO',
    },
  })
  this.handleCreateStoryFormSubmit = this.handleCreateStoryFormSubmit.bind(this)
} //end of constructor


// componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
//   this.setState({
//     story: props.story
//   })
// }

handleHeroNameChange(event) {
  const heroName = event.target.value
  this.setState({
    hero: {
      name: heroName,
    },
  })
}

handleCreateStoryFormSubmit(event) {
  event.preventDefault()
  const characters = {
    hero: this.state.hero,
  }
  const user_id = this.props.user_id
  console.log('CreateUrlForm submitted: ', this.state)
  console.log(`user_id is:`, user_id)
  this.props.handleSubmit( characters, user_id )
  this.setState({story: ''}) //this clears form onSubmit
}


render() {

  return(

    <div className="CreateUrlForm">
      <Grid>
        <Grid.Row centered>
          <Form onSubmit={this.handleCreateStoryFormSubmit}>

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
              onChange={this.handleHeroNameChange.bind(this)} />

              <Form.Button content="Submit" type="submit" primary/>

            </Form>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default CreateUrlForm
