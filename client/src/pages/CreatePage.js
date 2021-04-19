import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook";

export const CreatePage = () => {
	const {request} = useHttp()
	const [link, setLink] = useState('')

	const pressHandler = async event => {
		if (event.key === 'Enter') {
			try {
				const data = await request('/api/link/generate', 'POST', {from: link})
				console.log(data)
			} catch (e) {

			}
		}
	}

	return (
		<div className="row">
			<div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
				<div className="input-field">
					<input
						placeholder="Paste your link"
						id="link"
						type="text"
						value={link}
						onChange={e => setLink(e.target.value)}
						onKeyPress={pressHandler}
					/>
					<label htmlFor="link">Enter your link</label>
				</div>
			</div>
		</div>
	)
}