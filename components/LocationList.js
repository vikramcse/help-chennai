var React = require('react');
var LocationItem = require('./LocationItem');
var LocationList = React.createClass({
	render() {
		var self = this;
		var locations = this.props.locations.map(function(loc) {
			return <LocationItem 
						address={loc.address} 
						timestamp={loc.timestamp} 
						message={loc.message} 
						key={loc.timestamp}
						onClick={self.props.onClick}
						tooltip="Click to see on map" />
		});

		return (
			<div className="pre-scrollable">
				<span className="list-group-item active">Locations</span>
				{locations}
			</div>
		)
	}
});

module.exports = LocationList;