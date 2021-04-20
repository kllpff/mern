import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {

	// if (links.length) { // TODO: подумать
	// 	return <p className="center">Your link list is empty</p>
	// }

	return (
		<table>
			<thead>
			<tr>
				<th>№</th>
				<th>Origin</th>
				<th>Shorted</th>
				<th>Open</th>
			</tr>
			</thead>

			<tbody>
			{ links.map((link, index) => {
				return (
					<tr key={link._id}>
						<td>{index + 1}</td>
						<td>{link.from}</td>
						<td>{link.to}</td>
						<td>
							<Link to={`/detail/${link._id}`}>Open</Link>
						</td>
					</tr>
				)
			}) }
			</tbody>
		</table>
	)
}