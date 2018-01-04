import React from 'react'

import { Card } from 'semantic-ui-react'

const AllUrls = (props) => {

  const allOfTheUrls = props.urls //an array

  function movieOrTVshow(movie_or_tv) {
    if (movie_or_tv === "m") {
      return "movie"
    }
    if (movie_or_tv === "tv") {
      return "TV show"
    }
  }

  function rottenAverage(tomato_meter, audience_score) {
    if ( (tomato_meter === "null") && (audience_score === "null") ) {
      return "does not compute"
    }
    if ( !(tomato_meter === "null") && (audience_score === "null") ) {
      return tomato_meter
    }
    if ( (tomato_meter === "null") && !(audience_score === "null") ) {
      return audience_score
    }
    if ( !(tomato_meter === "null") && !(audience_score === "null") ) {
      var tomato = parseInt(tomato_meter)
      var audience = parseInt(audience_score)
      var total = tomato + audience
      var totalDividedByTwo = (total / 2)
      var answer = totalDividedByTwo.toString()
      return answer
    }
  }

  const eachUrl = allOfTheUrls.map( (urlObject) =>

    <div key={urlObject.id ? urlObject.id : "urlObject.id here"} className="EachUrl">

      <Card fluid >
        <Card.Content>
          <Card.Header>
            <p>URL id: {urlObject.id ? urlObject.id : "urlObject.id here"}</p>
          </Card.Header>
            <h1>{urlObject.title ? urlObject.title : "urlObject.title here"}</h1>
            <h2>{urlObject.movie_or_tv ? movieOrTVshow(urlObject.movie_or_tv) : "urlObject.movie_or_show here"}</h2>
            <h3 className={ rottenAverage(urlObject.tomato_meter, urlObject.audience_score) > 50 ? "red" : "green" }>Rotten Average: { rottenAverage(urlObject.tomato_meter, urlObject.audience_score) }</h3>
            <p>Tomato Meter: {urlObject.tomato_meter ? urlObject.tomato_meter : "urlObject.tomato_meter here"}</p>
            <p>Audience Score: {urlObject.audience_score ? urlObject.audience_score : "urlObject.audience_score here"}</p>
            <a href={urlObject.link} target="_blank">{urlObject.link ? urlObject.link : "urlObject.link here"}</a>
        </Card.Content>
      </Card>
    </div>
  )

console.log('allOfTheUrls.length: ', allOfTheUrls.length)
console.log('eachUrl: ', eachUrl)

return(
  <div className="AllUrls">
    <p>Total URLs in database: {allOfTheUrls.length}</p>

    <h3>
      Rotten Averages above 50 are colored red, for <span className="red">freshness</span>.
      <br></br>
      Rotten Averages below 50 are colored green, for <span className="green">rotten</span>.
    </h3>

    <p>AllUrls listed below</p>

    <div>{ eachUrl.reverse() }</div>
  </div>
  )
}


export default AllUrls
