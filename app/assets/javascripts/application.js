//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//

$(document).on('ready', function() {
  var map;
  AmCharts.ready(function() {
    map                  = new AmCharts.AmMap();
    map.pathToImages     = "http://www.amcharts.com/lib/3/images/";
    map.panEventsEnabled = true;
    map.backgroundColor  = "#000000";
    map.backgroundAlpha  = 1;
    map.zoomControl.panControlEnabled  = true;
    map.zoomControl.zoomControlEnabled = true;

    var dataProvider     = {
      mapVar: AmCharts.maps.usaHigh,
      getAreasFromMap: true,
      areas: []
    };

    map.dataProvider     = dataProvider;
    map.areasSettings    = {
      autoZoom: true,
      color: "#CDCDCD",
      colorSolid: "#5EB7DE",
      selectedColor: "#5EB7DE",
      outlineColor: "#666666",
      rollOverColor: "red",
      rollOverOutlineColor: "#FFFFFF"
    };

    map.write("mapdiv");
  });
})
