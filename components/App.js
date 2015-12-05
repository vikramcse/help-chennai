var React = require('react');
var Map = require('./Map');
var Search = require('./Search');
var LocationList = require('./LocationList');
var Firebase = require("firebase");

var App =  React.createClass({
	componentDidMount() {
		var ref = new Firebase("helpindia.firebaseio.com/locations");
		ref.on('value', function(snap) {
			var locations = [];

			snap.forEach(function(loc) {
				locations.push(loc.val());
			});

			this.setState({
				locations: locations
			});
		}.bind(this));
	},
	getInitialState() {
		return {
			currentAddress: 'Mumbai, Maharashtra',
			mapCoordinates: {
				lat: 19.0759837,
				lng: 72.87765590000004
			},
			locations: []
		};
	},
	addAddressToMap(address, message) {
		// closure to Geocoding...
		var self = this;

		GMaps.geocode({
			address: address,
			callback: function(results, status) {
				if (status !== 'OK') return;
				var latlng = results[0].geometry.location;

				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
				console.log(latlng.lat() + " " + latlng.lng());
				self.addAddressToLocalStorage(results[0].formatted_address, message);
			}
		});
	},

	addAddressToLocalStorage(address, message) {
		var ref = new Firebase("helpindia.firebaseio.com/locations");
		// var locations = this.state.locations;

		ref.push().set({
			address: address,
			message: message,
			timestamp: Date.now()
		});
	},
	searchForAddress(address){
		
		var self = this;

		// We will use GMaps' geocode functionality,
		// which is built on top of the Google Maps API

		GMaps.geocode({
			address: address,
			callback: function(results, status) {

				if (status !== 'OK') return;

				var latlng = results[0].geometry.location;

				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
			}
		});

	},
	render() {
		return (
			<div>
				<div className="left">
					<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
					<Search onSearch={this.addAddressToMap}/>
				</div>
				<div className="right">
					<LocationList locations={this.state.locations} onClick={this.searchForAddress}/>
				</div>
			</div>
		)
	}
});

module.exports = App;