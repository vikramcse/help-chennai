var React = require('react');
var moment = require('moment');

var LocationItem = React.createClass({
	handleClick(){
		this.props.onClick(this.props.address);
	},
	render() {
		var cn = "list-group-item";

		if(this.props.active){
			cn += " active-location";
		}

		return (
			<a className={cn} onClick={this.handleClick}>
				{this.props.address} <br/>
				{this.props.message}
				<span className="createdAt">{ moment(this.props.timestamp).fromNow() }</span>
			</a>
		);
	}
});
module.exports = LocationItem;