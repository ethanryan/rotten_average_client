import React from 'react'

import { Card } from 'semantic-ui-react'

const AllUrls = (props) => {

  const allOfTheUrls = props.urls //an array

  const eachUrl = allOfTheUrls.map( (urlObject) =>

    <div key={urlObject.id ? urlObject.id : "urlObject.id here"} className="EachUrl">
      <Card fluid >
        <Card.Content>
          <Card.Header>
            <p>URL id: {urlObject.id ? urlObject.id : "urlObject.id here"}</p>
          </Card.Header>
            <h1>h1 title: {urlObject.url ? urlObject.url : "urlObject.url here"}</h1>
            <h2>h2 movie or show</h2>
            <h3>h3 RottenAverage (get TomatoMeter + Audience Score / 2)</h3>
            <a href={urlObject.url} target="_blank">{urlObject.url ? urlObject.url : "urlObject.url here"}</a>
        </Card.Content>
      </Card>
    </div>
  )

console.log('hello from AllUrls, props: ', props)
console.log('allOfTheUrls: ', allOfTheUrls)
console.log('allOfTheUrls.length: ', allOfTheUrls.length)
console.log('eachUrl: ', eachUrl)

return(
  <div className="AllUrls">
    <p>Total URLs in database: {allOfTheUrls.length}</p>

    <p>AllUrls listed below</p>

    <div>{ eachUrl.reverse() }</div>
  </div>
  )
}


export default AllUrls
