/*
 * FromNow.js
 * Dummy date for future content
 * Developed by Dhimas & Degiam
 * Copyright (c) 2023
 */

let timezone = (new Date()).getTimezoneOffset() * 60000
	localISOTime = new Date(Date.now() - timezone)
	// barusaja = localISOTime.toISOString().split('.')[0]
	// limamenitlagi = new Date(localISOTime.setMinutes(localISOTime.getMinutes() + 5)).toISOString().split('.')[0]
	// duajamlagi = new Date(localISOTime.setHours(localISOTime.getHours() + 2)).toISOString().split('.')[0]
	besok = new Date(localISOTime.setDate(localISOTime.getDate() + 1)).toISOString().split('T')[0]
	lusa = new Date(localISOTime.setDate(localISOTime.getDate() + 2)).toISOString().split('T')[0]
	tiga = new Date(localISOTime.setDate(localISOTime.getDate() + 3)).toISOString().split('T')[0]
	empat = new Date(localISOTime.setDate(localISOTime.getDate() + 4)).toISOString().split('T')[0]
	lima = new Date(localISOTime.setDate(localISOTime.getDate() + 5)).toISOString().split('T')[0]
	enam = new Date(localISOTime.setDate(localISOTime.getDate() + 6)).toISOString().split('T')[0]
	tujuh = new Date(localISOTime.setDate(localISOTime.getDate() + 7)).toISOString().split('T')[0]
	delapan = new Date(localISOTime.setDate(localISOTime.getDate() + 8)).toISOString().split('T')[0]
	sembilan = new Date(localISOTime.setDate(localISOTime.getDate() + 9)).toISOString().split('T')[0]
	sepuluh = new Date(localISOTime.setDate(localISOTime.getDate() + 10)).toISOString().split('T')[0]
	// tanggalposting = [barusaja,limamenitlagi,duajamlagi,besok,lusa,tiga,empat,lima,enam,tujuh,delapan,sembilan,sepuluh]
	tanggalposting = [besok,lusa,tiga,empat,lima,enam,tujuh,delapan,sembilan,sepuluh]

let waktu = document.querySelectorAll('time')

for (let i = 0; i < waktu.length; i++) {
	if ( i < tanggalposting.length ) {
		waktu[i].setAttribute('datetime',tanggalposting[i])
	} else {
		waktu[i].setAttribute('datetime',tanggalposting[9])
	}
}
