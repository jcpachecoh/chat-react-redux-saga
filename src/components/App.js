import React, { Component } from 'react'
import './App.css'
import { SidebarContainer } from '../containers/SideBar'
import { MessagesList } from '../containers/MessagesList'
import { AddMessage } from '../containers/AddMessage'

class App extends Component {
  render () {
    return (
      <div id='container'>
        <SidebarContainer />
        <section id='main'>
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App