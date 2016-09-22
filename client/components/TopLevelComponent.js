import React from 'react'
import Landing from './Landing'
console.log('hello from TopLevelComponent.js')

class TopLevelComponent extends React.Component{
	render() {
		return (
			<Landing />
		)
	}
}

export default TopLevelComponent