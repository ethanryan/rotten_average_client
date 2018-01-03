import React, {Component} from 'react'

//import { withRouter } from 'react-router-dom'

import * as api from '../api'

// import NavBar from '../components/NavBar'
// import NavBarLoginSignUp from '../components/NavBarLoginSignUp'
// import StoryPage from '../components/StoryPage'

import CreateUrlForm from '../components/CreateUrlForm'
import AllUrls from '../components/AllUrls'

// import LoginSignUp from '../container/LoginSignUp'


class RottenAverageContainer extends Component {
  constructor() {
    super()
    this.state = {
      urls: [],

      stories: [
        {
          characters: 'story characters here',
          content: 'words words ----- word words words',
          genres: [{one_genre: 'story genres here'}],
          id: 'story ID here',
          paragraphs: 'story paragraphs here',
          plots: [{title: 'Halloween'}],
          title: 'title here',
          user: 'user here'
        }
      ],
      story: 'cool story here',
      title: 'cool story title here',
      user: {
        id: 'user_id here',
        name: 'user_name here'
      },
      image: '',
      plots: [],
      genres: [],
      users: [],
      nameOrPasswordError: false,
      usernameExistsError: false,
    }
  }


  componentDidMount() {

    api.getUrls()
    .then( data => this.setState({
      urls: data
    }) )

    // api.getStories()
    // .then( data => this.setState({
    //   stories: data
    // }) )
    //
    // api.getPlots()
    // .then( data => this.setState({
    //   plots: data
    // }) )
    //
    // api.getUsers()
    // .then (user => this.setState({
    //   users: user
    // }) )
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
  if(localStorage.getItem('jwt')) {
    // console.log('jwt: ', this.jwt)
    // console.log('props from RottenAverageContainer: ', this.props)
    console.log('state from RottenAverageContainer: ', this.state)
    // console.log('state.users.length 0 means NO INTERNET: ', this.state.users.length)
    return(
      <div>
        <CreateUrlForm/>

        <AllUrls/>

        {/* <NavBar
          title="Word Nerds"
          current_user={this.state.user ? this.state.user.name : "current_user here"}
          logout={this.logout.bind(this)}
        />
        <StoryPage
          //props for CreateStoryForm
          handleSubmit={this.handleSubmit.bind(this)}

          //props for EditStoryForm
          handleDeleteStory={this.handleDeleteStory.bind(this)}
          handleUpdateStory={this.handleUpdateStory.bind(this)}
          story={this.state.story}
          title={this.state.title}
          image={this.state.image}
          user={this.state.user}

          //props for AllStories
          stories={this.state.stories}
          plots={this.state.plots}
          users={this.state.users}
        /> */}
      </div>
    )
  }
  else {
    console.log('state from RottenAverageContainer: ', this.state)
    // console.log('state.users.length 0 means NO INTERNET: ', this.state.users.length)
    return(
      <div>

        <CreateUrlForm />

        <AllUrls />

      </div>
    )
  }
}
}

//export default withRouter(RottenAverageContainer)
export default RottenAverageContainer
