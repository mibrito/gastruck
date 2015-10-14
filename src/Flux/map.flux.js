var McFly = require('mcfly');
var ol = require('openlayers');
var FeaturesFlux = require('./features.flux');

var Flux = new McFly();

var _map = new ol.Map({
	view: new ol.View({
		center: [0, 0],
		zoom: 4
	})
});
var _source = {}, _draw;

function getSource(){
	return _source;
}

function addSource(sourceName,source){
	if(!_source.hasOwnProperty(sourceName)){
		_source[sourceName] = source;
		_map.addLayer = new ol.layer.Vector({
			source: _source[sourceName]
		});
	}
}

function setTarget (target){
	_map.setTarget(target);
}

function stopDrawing() {
	if(_draw){
		_map.removeInteraction(_draw);
	}
}

function startDrawing(drawType, sourceName){
	console.log(drawType);
	stopDrawing();
	if(drawType){
		_draw = new ol.interaction.Draw({
			source: _source[sourceName],
			type: drawType
		});
		_draw.on('drawend', function (evt) {
			this.addFeatures({_id: Math.floor(Math.random()*1000000), coord: evt.feature.getGeometry().getCoordinates()});
		}, FeaturesFlux.FeaturesActions);
		_map.addInteraction(_draw);
	}
}

MapStore = Flux.createStore({
		getSource: function () {
			return _source;
		},
		getMap: function (){
			return _map;
		},
		getDraw: function () {
			return _draw;
		}
	}, function (payload){
		switch (payload.actionType) {
			case "ADD_SOURCE":
				addSource(payload.sourceName,payload.source);
				MapStore.emitChange();
				break;
			case "SET_TARGET":
				setTarget(payload.target);
				MapStore.emitChange();
				break;
			case "STARTDRAWING":
				startDrawing(payload.drawType, payload.sourceName);
				MapStore.emitChange();
				break;
			case "STOPDRAWING":
				stopDrawing();
				MapStore.emitChange();
				break;
		}
	}
);

exports.MapStore = MapStore;

var MapActions = Flux.createActions({
	addSource: function(sourceName, source){ // creates payload
		return {
			actionType: "ADD_SOURCE",
			sourceName: sourceName,
			source: source
		};
	},
	setTarget: function (target) {
		return {
			actionType: "SET_TARGET",
			target: target
		};
	},
	startDrawing: function (drawType,sourceName) {
		return {
			actionType: "STARTDRAWING",
			drawType: drawType,
			sourceName: sourceName
		};
	},
	stopDrawing: function () {
		return {
			actionType: "STOPDRAWING"
		};
	}
});

exports.MapActions = MapActions;
