var utils = {
	getShortDate: function (timestamp) {
		var distance = Math.round( ( +new Date() - timestamp ) / 60000 );
		var date = new Date(timestamp);

		var hour = ('0' + date.getHours()).slice(-2);
		var minutes = ('0' + date.getMinutes()).slice(-2);

		if (distance > 2879) {
			if (distance > 14567) {
				return this.getNiceDate(timestamp);
			} else {
				return 'Yesterday at ' + hour + ':' + minutes;
			}
		} else {
			return 'at ' + hour + ':' + minutes;
		}
	},
	getNiceDate: function (timestamp) {
		var defaultString = '%d %f%y at %h:%i';

		var language = {
			0: 'less than a minute ago',
			1: '1 minute ago',
			59: '%distance minutes ago',
			118: 'an hour ago',
			1439: '%r hours ago',
			2879: 'Yesterday at %h:%i',
			14567: '%l at %h:%i',
		};
		var days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

		var date = new Date(timestamp);
		var distance = Math.round( ( +new Date() - timestamp ) / 60000 );

		var string;
		for (var i in language) {
			if (distance < i) {
				string = language[i];

				break;
			}
		}

		var hour = ('0' + date.getHours()).slice(-2);
		var minutes = ('0' + date.getMinutes()).slice(-2);
		var day = days[date.getDay()];
		var month = months[date.getMonth()];

		var year = date.getFullYear();
		if (new Date().getFullYear() === year) {
			year = '';
		}

		if (string) {
			var hoursAgo = Math.round(distance / 60);

			return string.replace(/%distance/i, distance)
				.replace(/%r/i, hoursAgo)
				.replace(/%h/i, hour)
				.replace(/%i/i, minutes)
				.replace(/%l/i, day);
		}

		return defaultString.replace(/%d/i, day)
			.replace(/%f/i, month)
			.replace(/%y/i, year)
			.replace(/%h/i, hour)
			.replace(/%i/i, minutes);
	}
};

module.exports = utils;