// Notification view details event function (Notification)
$('.view-detail').click(function(e){
	e.preventDefault()

	var this_ = $(this)
	var notification_id = this_.attr('data-notification')
	var notification_url = this_.attr('data-url')
	var notification_redirect = this_.attr('data-redirect')

	fetch(notification_url).then(res => res.json()).then((out) => {
		window.location.href = notification_redirect
    })
})

// Notification close event function (Notification)
$('.notif-close').click(function(e){
	e.preventDefault()

	var this_ = $(this)
	var notification_id  = this_.attr('data-notification')
	var notification_url = this_.attr('data-url')

	fetch(notification_url).then(res => res.json()).then((out) => {
		// Intentionaly Blank
    })
})