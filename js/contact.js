const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');

submit.addEventListener("click", function() {
    jQuery.ajax({
        type: "POST",
        url: '/php/contact.php',
        dataType: "JSON",
        cache: false,
        data: {
            name: name.value,
            email: email.value,
            message: message.value,
        },

        success: function(response) {
            alert("Uw bericht is verstuurd");
        },

        error: function() {
            alert("Uw bericht is niet verstuurd, probeer het later opnieuw");
        }
    });
});
