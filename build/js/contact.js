"use strict";submit.addEventListener("click",function(){var e=document.getElementById("name"),t=document.querySelector("#email"),a=document.querySelector("#message");document.querySelector("#submit");jQuery.ajax({type:"POST",url:"/php/contact.php",dataType:"JSON",cache:!1,data:{name:e.value,email:t.value,message:a.value},success:function(){alert("Uw bericht is verstuurd")},error:function(e){alert(e.responseJSON.message)}})});
//# sourceMappingURL=contact.js.map