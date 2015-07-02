document.addEventListener("mouseup", function(){
	var selection = window.getSelection().toString();
	console.log("selection:" + selection);
	chrome.runtime.sendMessage({
		selection: selection
	});
});