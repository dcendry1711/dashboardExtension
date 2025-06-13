fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
		document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author-section').textContent = `By: ${data.user.name}`
	})
    .catch(err => {
        console.log('Something went wrong: ',err)
        document.body.style.backgroundImage = `url(https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg.webp)`
    })

