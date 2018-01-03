import React, {Component} from 'react'

import * as api from '../api'

import CreateUrlForm from '../components/CreateUrlForm'
import AllUrls from '../components/AllUrls'


class RottenAverageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: [
        {url: 'url_here'}
      ],
      image: '',
      nameOrPasswordError: false,
      usernameExistsError: false,
   }
  }

  componentDidMount() {

    api.getUrls()
    .then( data => this.setState({
      urls: data
    }) )

    //
    // api.getCurrentUser()
    // .then (user => this.setState({
    //   user: user.user
    // }) )
  }


  handleSubmit(characters, user_id) { //adding user_id as argument -- ER Nov 2017
  //   api.createStory(characters, user_id) //adding user_id as argument -- ER Nov 2017
  //   .then( story => this.setState(
  //     prevState => ({
  //       stories: [...prevState.stories, story]
  //     })
  //   )
  // )
  // this.props.history.push(`/stories`) //redirect to all stories
}


render() {

    console.log('state from RottenAverageContainer: ', this.state)
    return(
      <div>

        <CreateUrlForm />

        <AllUrls
          //props for AllUrls
          urls={this.state.urls}
         />

      </div>
    )
  }
}

export default RottenAverageContainer
