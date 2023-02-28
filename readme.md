## About

FromNow.js merupakan library javascript untuk membuat tanggal menjadi seperti di sosmed, contoh: `Baru saja`, `3 jam yang lalu`, dsb.


## Usage

1. Pasang library `fromnow.js` atau `fromnow.min.js`.
	- Opsi 1: Copy isi dari library lalu paste ke dalam script js kalian
	- Opsi 2: Panggil library secara langsung ke dalam HTML kalian
	```
	<body>
		<script src="fromnow.js"></script>
	</body>
	```
2. Copy script berikut ini ke HTML kalian, pastikan script ini berada diatas script js library. Silakan atur parameter yang tersedia sesuai keinginan.
	```
	<script>
		var fromNowConfig = {
			selector	: '.from-now',
			class		: 'opacity-0',
			options	: {
				monthFull	: [ 0 ],
				second		: [ 30, (86400*7) ],
				separator	: [ ' ', ':', '&nbsp;&centerdot;&nbsp;' ],
				
				// ----- if language is english -----
				// language	: 'en',
				// editorial	: [ 'ago', 'to go' ],
				// unit		: [ 'A few moments ago', 'second', 'minute', 'hour', 'day', 'month', 'year' ],
				
				// ----- if language is indonesia -----
				language	: 'id',
				editorial	: [ 'yang lalu', 'lagi' ],
				unit		: [ 'Baru saja', 'detik', 'menit', 'jam', 'hari', 'bulan', 'tahun' ],
			}
		}
	</script>
	<script src="fromnow.js"></script>
	```
3. Gunakan format berikut ini untuk penulisan pada HTML-nya.
	```
	<time class="from-now opacity-0" datetime="{date}">-</time>
	```
	Contoh:
	```
	<time class="from-now opacity-0" datetime="2023-12-31T23:59:59">-</time>
	```

## Note

Library ini akan optimal ketika kalian menggunakan [TailwindCSS](https://tailwindcss.com/) karena menggunakan `.opacity-0`. Jika kalian tidak menggunakan TailwindCSS, maka kalian harus membuat style tambahan yang isinya sebagai berikut :
```
.opacity-0 {
	opacity: 0;
}
```

## Dummy

Jika kalian seorang web designer, maka cocok untuk menggunakan script dummy-nya juga, karena tanggal pada slicing HTML kalian akan selalu dinamis sehingga library ini dapat berjalan dengan baik.

1. Untuk konten yang sudah terbit (contoh: artikel, berita), silakan gunakan :
	```
	<script src="fromnow-past-dummy.js"></script>
	```

2. Untuk konten yang belum terjadi (contoh: jadwal, agenda), silakan gunakan :
	```
	<script src="fromnow-future-dummy.js"></script>
	```

3. Letakkan diatas script config


## Example

```
<body>
	<main>
		<h1>Title</h1>
		<time class="from-now opacity-0" datetime="2023-12-31T23:59:59">-</time>
		<p>Lorem ipsum minim nulla ad nisi aliqua est amet labore exercitation...</p>
	</main>

	<!-- START - Only for demo -->
	<script src="fromnow-past-dummy.js"></script>
	<!-- END - Only for demo -->

	<script>
		var fromNowConfig = {
			selector	: '.from-now',
			class		: 'opacity-0',
			options	: {
				monthFull	: [ 0 ],
				second		: [ 30, (86400*7) ],
				separator	: [ ' ', ':', '&nbsp;&centerdot;&nbsp;' ],
				language	: 'id',
				editorial	: [ 'yang lalu', 'lagi' ],
				unit		: [ 'Baru saja', 'detik', 'menit', 'jam', 'hari', 'bulan', 'tahun' ],
			}
		}
	</script>
	<script src="fromnow.min.js"></script>
</body>
```


## Copyrights

© 2023 FromNow.js - Semoga Bermanfaat 😊
