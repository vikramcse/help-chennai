var React = require('react');
var Map = require('./Map');
var MessageForm = require('./MessageForm');

var App =  React.createClass({
	getInitialState() {
		return {
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},
	addMessageToMap(message) {
		alert(message);
	},
	render() {
		return (
			<div>
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
				<MessageForm onSearch={this.addMessageToMap}/>
			</div>
		)
	}
});

module.exports = App;