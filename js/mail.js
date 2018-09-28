const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');

submit.addEventListener("click", function() {
    jQuery.ajax({
        type: "POST",
        url: 'https://api.lucacastelnuovo.nl/mail/',
        dataType: "JSON",
        cache: false,
        data: {
            api_key: 'c53c383fba66651eb54d5ad426db35dc',
            to: 'ltcastelnuovo@gmail.com',
            from_name: 'A.N.D. Aannemersbedrijf Contactformulier',
            subject: 'Contactformulier || ' + name.value,
            body: '<!doctype html><meta content="width=device-width"name=viewport><meta content="text/html; charset=UTF-8"http-equiv=Content-Type><title>Contactfomulier A.N.D. Aannemersbedrijf</title><style>@media only screen and (max-width:620px){table[class=body] h1{font-size:28px!important;margin-bottom:10px!important}table[class=body] a,table[class=body] ol,table[class=body] p,table[class=body] span,table[class=body] td,table[class=body] ul{font-size:16px!important}table[class=body] .article,table[class=body] .wrapper{padding:10px!important}table[class=body] .content{padding:0!important}table[class=body] .container{padding:0!important;width:100%!important}table[class=body] .main{border-left-width:0!important;border-radius:0!important;border-right-width:0!important}table[class=body] .btn table{width:100%!important}table[class=body] .btn a{width:100%!important}table[class=body] .img-responsive{height:auto!important;max-width:100%!important;width:auto!important}}@media all{.ExternalClass{width:100%}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}.apple-link a{color:inherit!important;font-family:inherit!important;font-size:inherit!important;font-weight:inherit!important;line-height:inherit!important;text-decoration:none!important}.btn-primary table td:hover{background-color:#34495e!important}.btn-primary a:hover{background-color:#34495e!important;border-color:#34495e!important}}</style><body style=background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%><table style=border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%;background-color:#f6f6f6 border=0 cellpadding=0 cellspacing=0 class=body><tr><td style=font-family:sans-serif;font-size:14px;vertical-align:top> <td style="font-family:sans-serif;font-size:14px;vertical-align:top;display:block;Margin:0 auto;max-width:580px;padding:10px;width:580px"class=container><div class=content style="box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px"><span class=preheader style=color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0>Iemand heeft u een bericht gestuurd</span><table style=border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%;background:#fff;border-radius:3px class=main><tr><td style=font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px class=wrapper><table style=border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100% border=0 cellpadding=0 cellspacing=0><tr><td style=font-family:sans-serif;font-size:14px;vertical-align:top><p style=font-family:sans-serif;font-size:14px;font-weight:400;margin:0;Margin-bottom:15px>Beste Andrzéj,<p style=font-family:sans-serif;font-size:14px;font-weight:400;margin:0;Margin-bottom:15px>Iemand heeft u een bericht gestuurd.<p style=font-family:sans-serif;font-size:14px;font-weight:400;margin:0;Margin-bottom:15px>Gegevens<br>Naam: ' + name.value + ',<br>Email: ' + email.value + ',<br><br>Bericht:<br><br>' + message.value + '</table></table></div><td style=font-family:sans-serif;font-size:14px;vertical-align:top> </table>'
        },

        success: function(response) {
            if (response.status) {
                alert("Uw bericht is verstuurd");
            } else {
                alert("Uw bericht is niet verstuurd, probeer het later opnieuw");
            }
        },

        error: function() {
            alert("Uw bericht is niet verstuurd, probeer het later opnieuw");
        }
    });
});
