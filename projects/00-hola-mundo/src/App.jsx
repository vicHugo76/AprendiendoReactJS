import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const midudev = { userName: 'midudev', isFollowing: true }
  const pheralb = { userName: 'pheralb_', isFollowing: false }
  // const cvander = { userName: 'cvander', isFollowing: true }
  // const billgates = { userName: 'BillGates', isFollowing: true }
  return (
    // <React.Fragment> o <>
    <section className='App'> 
      <TwitterFollowCard {...midudev}> 
        Miguel Angel Durán 
      </TwitterFollowCard>
      <TwitterFollowCard {...pheralb}>
        Pablo Hernández
      </TwitterFollowCard>
      <TwitterFollowCard userName='cvander' isFollowing>
        Christian Van Der Henst
      </TwitterFollowCard>
      <TwitterFollowCard userName='BillGates' isFollowing>
        Bill Gates
      </TwitterFollowCard>
    </section> // </> o </React.Fragment>    
  )
}

