$('#pwt-google-form').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    $('#pwt-google-form').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
            // alert('Terimakasih atas pesannya, secepatnya kami akan menghubungi Anda kembali.')
            // You can also redirect the user to a custom thank-you page:
            window.location = '/pesan-terkirim'
        }
    })
})