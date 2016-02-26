(function(w, d){
  d.onreadystatechange = function(){
    if (d.readystate === "interactive"){
      var mapObj = new L.Map('map');
      console.log("Here's the map", mapObj);
    }
  }
})(window, document);
