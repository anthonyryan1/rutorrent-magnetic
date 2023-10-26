/* jshint strict: false */
/* global plugin, theUILang, noty */
(function (plugin, theUILang, noty) {
	// We can't use strict mode here because
	// noty() triggers an eval :(

	var cookies = document.cookie.split(": "),
		i;

	// noty('The functionality provided by the magnetic plugin is now included in ruTorrent itself. Please open Settings and check "' + theUILang.registerMagnet + '" to enable the feature. Then register the new magnet handler.')

	// Show torrents added
	for (i = 0; i < cookies.length; i++) {
		if (cookies[i].indexOf("magnetic_error=1") === 0) {
			noty(theUILang.addTorrentFailed, "error");
			document.cookie = "magnetic_error=; expires=" + new Date(0).toGMTString() + "; path=/";
		}

		if (cookies[i].indexOf("magnetic_name=") === 0) {
			if (cookies[i] === "magnetic_name=1") {
				noty(theUILang.addTorrentSuccess, "success");
			} else {
				noty(decodeURIComponent(cookies[i].substring("magnetic_name=".length)) + " " + theUILang.addTorrentSuccess, "success");
			}
			document.cookie = "magnetic_name=; expires=" + new Date(0).toGMTString() + "; path=/";
		}
	}
})(plugin, theUILang, noty);
