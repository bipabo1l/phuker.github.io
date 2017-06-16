(function(){
	var div = document.getElementsByClassName('entry-content');
	var featured = document.getElementById('featured');
	if(featured !== null){  // not in a article
		return;
	}
	if(div.length > 0){
		div = div[0];
		var links = div.getElementsByTagName('a');
	    for(var i=0; i<links.length;i++){
	        links[i].target='_blank';
	    }
	}

})();