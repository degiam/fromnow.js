/*
 * FromNow.js
 * Developed by Dhimas & Degiam
 * Copyright (c) 2023
 */

function timeConvert(date,config) {
	if ( date.indexOf(':') > -1 ) {
		var original = date
			originalTime = 1
	} else {
		var original = date + 'T00:00:00'
			originalTime = 0
	}

	if ( config.language == 'id' ) {
		var months = {
			short : ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
			long : ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
		}
	} else {
		var months = {
			short : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			long : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		}
	}

	function dateFormatter() {
		let datetime = original.split('T')
			date = datetime[0].split('-')
			time = datetime[1].split(':')
			yyyy = date[0]
			mmm = parseInt(date[1],10)
			dd = parseInt(date[2],10)
			hh = time[0]
			m = time[1]
			s = time[2]
		
		if ( originalTime == 1 ) {
			var clock = ' ' + config.separator[2] + ' ' + hh + config.separator[1] + m
		} else {
			var clock = ''
		}

		if ( config.monthFull == 0 ) {
			datetime = dd + config.separator[0] + months.short[mmm - 1] + config.separator[0] + yyyy + clock
			return datetime
		} else {
			datetime = dd + config.separator[0] + months.long[mmm - 1] + config.separator[0] + yyyy + clock
			return datetime
		}
	}

	let refDate, dateFormats, timeUnits

	dateFormats = dateFormats || {
		past: [
			{ ceiling: 60, text: '$seconds ' + config.unit[1] + ' ' + config.editorial[0] },
			{ ceiling: 3600, text: '$minutes ' + config.unit[2] + ' ' + config.editorial[0] },
			{ ceiling: 86400, text: '$hours ' + config.unit[3] + ' ' + config.editorial[0] },
			{ ceiling: 2629744, text: '$days ' + config.unit[4] + ' ' + config.editorial[0] },
			{ ceiling: 31556926, text: '$months ' + config.unit[5] + ' ' + config.editorial[0] },
			{ ceiling: null, text: '$years ' + config.unit[6] + ' ' + config.editorial[0] },
		],
		future: [
			{ ceiling: 60, text: ' $seconds ' + config.unit[1] + ' ' + config.editorial[1] },
			{ ceiling: 3600, text: ' $minutes ' + config.unit[2] + ' ' + config.editorial[1] },
			{ ceiling: 86400, text: ' $hours ' + config.unit[3] + ' ' + config.editorial[1] },
			{ ceiling: 2629744, text: ' $days ' + config.unit[4] + ' ' + config.editorial[1] },
			{ ceiling: 31556926, text: ' $months ' + config.unit[5] + ' ' + config.editorial[1] },
			{ ceiling: null, text: ' $years ' + config.unit[6] + ' ' + config.editorial[1] },
		],
	}
	timeUnits = timeUnits || [
		[31556926, 'years'],
		[2629744, 'months'],
		[86400, 'days'],
		[3600, 'hours'],
		[60, 'minutes'],
		[1, 'seconds'],
	]

	var date = new Date(date)
	refDate = refDate ? new Date(refDate) : new Date()

	let secondsDifference = (refDate - date) / 1000

	var tense = 'past'
	if (secondsDifference < 0) {
		var tense = 'future'
		secondsDifference = 0 - secondsDifference
	}

	function getFormat() {
		for (let i = 0; i < dateFormats[tense].length; i++) {
			if ( dateFormats[tense][i].ceiling == null || secondsDifference <= dateFormats[tense][i].ceiling ) {
				return dateFormats[tense][i]
			}
		}
		return null
	}

	function get_time_breakdown() {
		let seconds = secondsDifference
			breakdown = {}
		for (let i = 0; i < timeUnits.length; i++) {
			let occurencesOfUnit = Math.floor(seconds / timeUnits[i][0])
			seconds = seconds - timeUnits[i][0] * occurencesOfUnit
			breakdown[timeUnits[i][1]] = occurencesOfUnit
		}
		return breakdown
	}

	function renderDate(dateFormat) {
		let breakdown = get_time_breakdown()
		timeAgoText = dateFormat.text.replace(/\$(\w+)/g, function() {
			return breakdown[arguments[1]]
		})
		if ( config.language == 'en' ) {
			let textPlural = timeAgoText.split(' ')
			if ( textPlural[0] > 1 ) {
				textPlural[1] = textPlural[1] + 's'
			}
			timeAgoText = textPlural.join(' ')
		}
		return depluralizeTimeAgoText(timeAgoText, breakdown)
	}

	function depluralizeTimeAgoText(timeAgoText, breakdown) {
		for (let i in breakdown) {
			if (breakdown[i] == 1) {
				let regexp = new RegExp('\\b' + i + '\\b')
				timeAgoText = timeAgoText.replace(regexp, function() {
					return arguments[0].replace(/s\b/g,'')
				})
			}
		}
		return timeAgoText
	}

	if ( refDate > date ) {
		if ( secondsDifference > config.second[1] ) {
			return dateFormatter()
		} else if ( secondsDifference >= config.second[0] && secondsDifference <= config.second[1] ) {
			return renderDate(getFormat())
		} else {
			return config.unit[0]
		}
	} else {
		if ( secondsDifference > config.second[1] ) {
			return dateFormatter()
		} else if ( secondsDifference >= config.second[0] && secondsDifference <= config.second[1] ) {
			return renderDate(getFormat())
		} else {
			return config.unit[0]
		}
	}
}

function fromNow(config) {
	if ( config !== undefined ) {
		document.querySelectorAll(config.selector).forEach(item => {
			item.innerHTML = timeConvert(item.getAttribute('datetime'),config.options)
			item.classList.remove(config.class)
		})
	}
}

var fromNowConfig
fromNow(fromNowConfig)