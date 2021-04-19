import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/authContext";

export const Navbar = () => {

	const history = useHistory()
	const auth = useContext(AuthContext)

	const logoutHandler = event => {
		event.preventDefault()
		auth.logout()
		history.push('/')
	}

	return (
		<nav className="teal darken-1">
			<div className="nav-wrapper container">
				<span className="brand-logo">Link shorter</span>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><NavLink to="/create">Create</NavLink></li>
					<li><NavLink to="/links">My links</NavLink></li>
					<li><a href="/" onClick={logoutHandler}>Logout</a></li>
				</ul>
			</div>
		</nav>
	)
}