//Agile Profess AR App insert-professional-sounding-name-here.github.io
//This repo is only for educational use for a university assignment and not to be used in a real world situation or for commerical purposes.-->
//This project uses MazeMap wayfinding application Copyright MazeMap 2023 (https://www.mazemap.com)
//Copyright information can be found via the GitHub Repo

//This is the JavaScript file which contains the script which lets the MazeMap work.

var map = new Mazemap.Map({
    // container id specified in the HTML
    container: 'map',

    campuses: 368, // 368 is UCLan

    // Position data:
    // initial position in lngLat format Student centre loc: 
    // lng: -2.7071393359127285, lat: 53.76267154967661
    center: {lng: -2.7071393359127285, lat: 53.76267154967661},

    // Data taken from MazeMap's debugging POI inspector:
    // https://debug.mazemap.com/poi-inspector/?llz=-2.627235544560108,54.04485640674025,8.146123790563951
    
    // initial zoom levels:
    zoom: 18,
    zLevel: 3
});

// Add zoom and rotation controls to the map.
// This lets users see floors within buildings:
map.addControl(new Mazemap.mapboxgl.NavigationControl());

