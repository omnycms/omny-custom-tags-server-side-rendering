var jsdom = require("jsdom");

jsdom.env({
  filea: 'C:/Users/Al/Documents/Projects/omny-custom-tags/index.html',
  url: 'http://www.dev.omny.ca:8080/api/v1.0/ui/pages?page=/',
  src: ["http://code.jquery.com/jquery.js"],

  done: function (err, window) {+
	window.loadPromise.then(function() {
		console.log(window.document.body.parentElement.outerHTML.trim());
	});
  },
  features: {
    FetchExternalResources: ["script"],
    ProcessExternalResources: ["script"],
    SkipExternalResources: false
  }
});