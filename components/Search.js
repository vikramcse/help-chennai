var React = require('react');

var Search = React.createClass({

	getInitialState() {
		return {
			address: '',
			message: ''
		};
	},

	handleChange(name, event) {
		var change = {};
		change[name] = event.target.value;
		this.setState(change);
	},

	handleSubmit(event){
		
		event.preventDefault();
		
		// When the form is submitted, call the onSearch callback that is passed to the component
		this.props.onSearch(this.state.address, this.state.message);
	},

	render() {
		return (
			<div className="message-holder">
				<form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<div className="area">
							<label>Search</label>

							<input type="text" value={this.state.address} onChange={this.handleChange.bind(this, 'address')} 
								className="form-control" id="address" placeholder="Search for Location..." required/> <br/>

							<textarea value={this.state.message} onChange={this.handleChange.bind(this, 'message')}
								className="form-control" id="address" placeholder="Enter Message" required/>

							<button className="btn btn-primary btn-block">Submit Message</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = Search;