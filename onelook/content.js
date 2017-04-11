document.addEventListener("mouseup", function(){
	var selection = window.getSelection().toString();
	chrome.runtime.sendMessage({
		selection: selection
	});
});
