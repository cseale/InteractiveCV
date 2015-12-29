(function(){
	var scrollify = function(el){
		var links;

		links = el.children;

		function clearAll(links){
			for(var i=0; i<links.length;i++){
				links[i].firstChild.className = links[i].firstChild.className.replace('active', '');
			}
		}

		function addActiveFlag(el){
			el.className += 'active';
		}

		// bind all links to on click event
		for(var i=0; i<links.length;i++){
			links[i].firstChild.onclick = function(event){
				clearAll(links);
				addActiveFlag(event.currentTarget);
			}
		}

		
	}

	// could do getElementsByTagName with a loop and check for IE7 compatibility
	// but not bothered :(
	var elements = document.getElementsByClassName("scrollify");
	scrollify(elements[0]);

})();
