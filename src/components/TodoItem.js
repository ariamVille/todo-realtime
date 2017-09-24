import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	render() {
		return (
			<div>
				{/*kung ano yung napasa props maaccess sa this.props
				p- kung gusto mo pasa yung buong todo pwede din, instead na name lang
			- actually kahit wala yung propTypes na yan, validation lang kasi yan
			- bastakung ano yung props na napasa dapat un ang gamitin,*/}
				{ this.props.todo.name }
			</div>
		);
	}
}

export default TodoItem;