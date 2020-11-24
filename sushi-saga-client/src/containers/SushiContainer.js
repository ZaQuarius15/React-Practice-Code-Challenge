import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="belt">
        { props.sushis.map((sushi) => {
          return <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} eaten={props.eaten.includes(sushi)}/>
        })
        }
        <MoreButton moreSushis={props.moreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer