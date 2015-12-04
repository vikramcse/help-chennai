var React = require('react');

var MessageForm = React.createClass({
	getInitialState() {
		return {
			value: ''
		};
	},
	handleChange() {
		this.setState({value: event.target.value});
	},
	handleSubmit(event) {
		event.preventDefault();
		this.props.onSearch(this.state.value);
		// Unfocus the text input field
		this.getDOMNode().querySelector('input').blur();
	},
	render() {
		return (
			<div className="message-holder">
				<form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<div className="area">
							<label>Message</label>
							<textarea value={this.state.value} onChange={this.handleChange} className="form-control" id="message" placeholder="Enter Message"/>
							<button className="btn btn-primary btn-block">Submit Message</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = MessageForm;