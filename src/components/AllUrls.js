import React from 'react'

//import OneStory from './OneStory'


const AllUrls = (props) => {

  ///add scrollToTop function here
  //const filteredStories = props.stories.filter(story => story.user_id === props.user_id)

  // console.log('hello from AllUrls')
  return(

<div className="AllUrls">
      {/* <div key={props.id} className="AllUrls-green">

      <h1 className="center">{props.username}'s stories</h1>
      <h3 className="center">stories by: {props.username}</h3>
      <h3 className="center">total stories: {filteredStories.length}</h3>

      <OneStory
        handleDeleteStory={props.handleDeleteStory}
        stories={props.stories}
        user_id={props.user_id}
      /> */}

      {/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */}


      <p>AllUrls listed below</p>
    </div>
  )
}

export default AllUrls
