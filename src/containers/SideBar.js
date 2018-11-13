import { connect } from 'react-redux'
import SideBar from '../components/SideBar'

export const SidebarContainer = connect(
    state => ({
      users: state.users
    }),
    {}
)(SideBar)
