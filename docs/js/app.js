const vf = new ValidateForm("frmUno",[
    {
        tipo: "texto",
        campo: "usuarioC",
        vacio:true
    },
    {
        tipo: "texto",
        campo: "usuarioE",
        vacio:true
    },
    {
        tipo: "texto",
        campo: "contrasena",
        vacio: true,
    },
    {
        tipo: "texto",
        campo: "contrasenaRep",
        vacio: true,
        comparar:{
            campoDos:"contrasena"
        }
    }
]);
vf.ValidarIniciar();
document.getElementById("frmUno").addEventListener("submit",function(){
    if(vf.GetResultado()){
        alert("enviando");
    }else{
        alert("error");
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
    });
});
var v= true;
var nav = document.getElementById("nav-header");
window.addEventListener("scroll",function(){
    if(v){
        if(window.scrollY != 0){
            nav.style.removeProperty("padding");
            nav.style.setProperty("padding","0 1rem");
            v=false;                        
        }
    }else{
        if(window.scrollY == 0){
            nav.style.removeProperty("padding");
            nav.style.setProperty("padding",".5rem 1rem");
            v=true;                        
        }                 
    }             

});