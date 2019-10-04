window.onload = function(){
    header = document.getElementById("header-id");
    logo = document.getElementById("svg-logo");

    header.onmouseover = function(){
        logo.classList.remove("rotate");
    };

    //Rolar página ao clicar no header
    document.getElementById("header-id").onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //Observação da rolagem da página
    var prevScrollpos = window.pageYOffset; 
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;         
        headerHeight = header.offsetHeight;        
        
        //Exibição do header quanto à rolagem
        if (prevScrollpos > currentScrollPos) {
            header.style.transform = "translateY(0px)";
        } else if (prevScrollpos < currentScrollPos && currentScrollPos > headerHeight + headerHeight) {            
            header.style.transform = "translateY(-"+ headerHeight +"px)";
        }
        
        //Gira logo ao subir página        
        if (prevScrollpos > currentScrollPos && currentScrollPos <= 15){            
            logo.classList.add("rotate");            
        } else {
            logo.classList.remove("rotate");
        }

        prevScrollpos = currentScrollPos; 
    }
};