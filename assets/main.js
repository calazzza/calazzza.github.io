window.onload = function(){
    
    //Rolar página ao clicar no header
    document.getElementById("header-id").onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //Observação da rolagem da página
    var prevScrollpos = window.pageYOffset; 
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset; 
        header = document.getElementById("header-id");
        headerHeight = header.offsetHeight;        
        
        //Exibição do header quanto à rolagem
        if (prevScrollpos > currentScrollPos) {
            header.style.transform = "translateY(0px)";
        } else if (prevScrollpos < currentScrollPos && currentScrollPos > headerHeight + headerHeight) {            
            header.style.transform = "translateY(-"+ headerHeight +"px)";
        }
        prevScrollpos = currentScrollPos; 

        //Gira logo ao subir página
        logo = document.getElementById("svg-logo");
        if (currentScrollPos <= 15){            
            logo.classList.add("rotate");
        } else {
            logo.classList.remove("rotate");
        }
    }
};