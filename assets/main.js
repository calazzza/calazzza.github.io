window.onload = function(){
    console.log("ok")
    //Rolar página ao clicar no header
    document.getElementById("header-id").onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //Exibição do header quanto à rolagem da página
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header-id").style.top = "0";
        } else {
            document.getElementById("header-id").style.top = "-61px";
        }
        prevScrollpos = currentScrollPos;
    }
};