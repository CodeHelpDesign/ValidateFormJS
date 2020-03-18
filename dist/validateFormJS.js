/*!
 * ValidateFormJS v0.1.1
 * Copyright 2020 CodeHelpDesign
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/CodeHelpDesign/ValidateFormJS
 */
var valorFinal=true;
var styleBool= true;
var campoMensaje = [];
const invalido = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3e%3cpath fill='%23EC2828' d='M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'/%3e%3c/svg%3e";
const valido = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath fill='%231DBB29' d='M27 4l-15 15-7-7-5 5 12 12 20-20z'/%3e%3c/svg%3e";
var styles = `
.error{
    border-color: #EC2828 !important;
    padding-right: 2.3rem !important;
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3e%3cpath fill='%23EC2828' d='M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'/%3e%3c/svg%3e")center right 0.4rem/ cover no-repeat;
      background-size: 4.5% 82%;
      
  }
  .ok{
    border-color: #1DBB29 !important;
    padding-right: 2.3rem !important;
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath fill='%231DBB29' d='M27 4l-15 15-7-7-5 5 12 12 20-20z'/%3e%3c/svg%3e")center right 0.4rem/ cover no-repeat;
      background-size: 4.5% 82%;;
      
  }
  .campo-error{
      color : #EC2828;
        font-size: 0.9rem;
  }
  .campo-ok{
    color : #1DBB29;
      font-size: 0.9rem;
}
`;
var stylesheet = document.createElement("style");
stylesheet.innerHTML = styles;
document.body.appendChild(stylesheet);
class ValidateForm{
    constructor(objt){
        if(objt != null){
            this.objeto = [];
            this.objeto = objt;
        }
    }

    LimpiarFormulario = () => {
        for (let i = 0; i < this.objeto.length; i++) {
            let objtD = document.getElementById(this.objeto[i].campo);
            objtD.classList.remove("error");
            objtD.classList.remove("ok");
            objtD.value = "";
            campoMensaje[i].innerHTML = ""; 
        }
    }

    ValidarUndefinido = (campo) => {
        if(campo != undefined){
            return true;
        }else{     
        }
    }
    ValidarFormulario = () =>{
        if(valorFinal){
            let cont= 0;
            for (let i = 0; i < this.objeto.length; i++) {
                if(this.objeto[i].vacio){
                    let campo = this.objeto[i].campo;
                    if(this.ValidarVacio(campo,i)){
                        if(cont > 0){
                            cont--;
                        }
                    }else{
                        cont++;
                    } 
                }
            }
            if(cont == 0){
                this.LimpiarFormulario();  
                return true; 
            }else{
                return false;
            }    
        }else{
            return false;
        }   
    }

    ValidarMostrar = (obj,text,span,valor) =>{
        let c2 = valor ? "ok" : "error";
        let ct = !valor ? "ok" : "error";
        let objtD = document.getElementById(obj);
        objtD.classList.remove(ct);
        objtD.classList.add(c2);
        //let divD = document.getElementById(div);
        /*
        if(styleBool){
            span.classList.add("campo-error");
            styleBool = false; 
        }*/
        
        span.innerHTML = text;        
    }

    ValidarVacio = (o,i) =>{
        let contGlobalVacio = true;  
        let oD = document.getElementById(o);
        if(oD.value == ""){
            this.ValidarMostrar(o,"Es obligatorio ingresar el campo.",campoMensaje[i],false);
            contGlobalVacio = false;
            valorFinal = false;
        }else{
            this.ValidarMostrar(o,"",campoMensaje[i],true);
            contGlobalVacio = true;
            valorFinal = true;
        }
        return contGlobalVacio;
    }

    ValidarLongitud = (obj,i) =>{
        let contGlobalLongitud = true;
        let campoD = document.getElementById(obj.campo);
        let text = campoD.value;
        let lg = text.length;
        let min = obj.longitud.min;
        let max = obj.longitud.max;
        let exacto = this.ValidarUndefinido(obj.longitud.exacto) ? obj.longitud.exacto : false;
            if(min == 0 && exacto){
                if(lg == max){
                    this.ValidarMostrar(obj.campo,"",campoMensaje[i],true);
                    contGlobalLongitud = true;
                    valorFinal = true;
                }else{
                    this.ValidarMostrar(obj.campo,"El campo debe tener "+max+" caracter(es).",campoMensaje[i],false);
                    contGlobalLongitud = false;
                    valorFinal = false;
                }
            }else{
                if(lg >= min  && lg<= max){
                    this.ValidarMostrar(obj.campo,"",campoMensaje[i],true);
                    contGlobalLongitud = true;
                    valorFinal = true;
                }else{
                    let mensaje = "";
                    if(min == 0){
                            mensaje = "Debe ingresar una lognitud de "+max;    
                    }else{
                        mensaje = "Debe ingresar una longitud entre "+min+" y "+max+" para este campo.";
                    }
                    this.ValidarMostrar(obj.campo,mensaje,campoMensaje[i],false);
                    contGlobalLongitud = false;
                    valorFinal = false;
                }            
            }            

        return contGlobalLongitud;
    }

    ValidarCorreo = (o,i) => {
        let contGlobalCorreo = true;
        let oD = document.getElementById(o);
        let text = oD.value;
        let indice = text.indexOf('@');
        if(indice != -1){
            let v = 0;
            for(let i=0;i<text.length; i++){
                if(text[i] == "@"){
                    v++;  
                }  
            }
            if(v == 1){
                let nuevo = text.substring(indice);
                let indiceNuevo = nuevo.indexOf('.');
                if(indiceNuevo != -1){
                   this.ValidarMostrar(o,"",campoMensaje[i],true); 
                   contGlobalCorreo = true;
                   valorFinal = true;
                }else{
                    this.ValidarMostrar(o,"Ingrese un correo valido"+o,campoMensaje[i],false);  
                    contGlobalCorreo = false;
                    valorFinal = false;
                }
            }else{
                this.ValidarMostrar(o,"Ingrese un correo valido"+o,campoMensaje[i],false);   
                contGlobalCorreo = false;
                valorFinal = false;
            }
        }else{
            this.ValidarMostrar(o,"Ingrese un correo valido"+o,campoMensaje[i],false);
            contGlobalCorreo = false;
            valorFinal = false;
        }
        return contGlobalCorreo;   
    }

    ValidarContrasena = (o,o1,i) => {
        let contGolbalIgual= true;
        let oD = document.getElementById(o);
        let texto = oD.value;
        let o1D = document.getElementById(o1);
        let texto1 = o1D.value;
        if(texto != texto1){
            let mensajeContra = "Las contraseñas no coinciden";
            this.ValidarMostrar(o,"asd",campoMensaje[i],false);
            this.ValidarMostrar(o1,mensajeContra,campoMensaje[i],false);
            
            contGolbalIgual = false;
            valorFinal = false;
        }else{
            this.ValidarMostrar(o,"",campoMensaje[i],true);
            this.ValidarMostrar(o1,"",campoMensaje[i],true);
            
            contGolbalIgual = true;
            valorFinal = true;
        }
        return contGolbalIgual;
    }

    ValidarNumero = (input) => {
        let reg = /[^0-9]/g;
        if(!reg.test(input.value)){
           return true;
        }else{
            input.value = input.value.replace(/[^0-9]/g,''); 
            return false;
        }
    }

    ValidarLetra = (input) => {
        let reg = /[^a-zA-ZÀ-ÿ\u00f1\u00d1 _]/g;
        if(!reg.test(input.value)){
            return true;
        }else{
            input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1 _]/g,'');
           return false;
        }
    }

    ValidarLetraNumero = (input) => {
        let reg = /[^A-Za-zÀ-ÿ0-9\u00f1\u00d1 _]+$/g;
        if(!reg.test(input.value)){
            return true;
        }else{
          input.value = input.value.replace(/[^A-Za-zÀ-ÿ0-9\u00f1\u00d1 _]+$/g,'');  
          return false;
        }
    }

    ValidarDecimal = (input,n) => {
        let preg= /[^0-9\.]/g
        let valor = input.value;
        if(!preg.test(valor)){
            let preg1 = new RegExp("^[0-9]+\\.?[0-9]{0,"+n+"}$");
            if(preg1.test(valor)===true){
                return true;
            }else{
                let ultimoIndice = input.value.length - 1
                let nuevoValor = valor.substring(0,ultimoIndice);
                input.value = nuevoValor;
                return false;
            }            
        }else{
            input.value = input.value.replace(preg,''); 
            return false;
        }
    }

    Round = (o,c) => {
        return Number(Math.round(o.value+'e'+c)+'e-'+c);
    }

    llamarValidarContrasena = (obj,i) =>{
        this.ValidarContrasena(obj.campo,
            obj.comparar.campoDos,i);
    }

    llamarSeguidoLongitud = (obj,i) => {
        if(this.ValidarUndefinido(obj.longitud)){
            if(this.ValidarLongitud(obj,i)){
                if(this.ValidarUndefinido(obj.comparar)){
                    this.llamarValidarContrasena(obj,i);                      
                }
            }    
        }else{
            if(this.ValidarUndefinido(obj.comparar)){
                this.llamarValidarContrasena(obj,i);                           
            }
        }  
    }

    ValidarTipo = (obj,i) => {
        if(this.ValidarUndefinido(obj.vacio)){
            if(obj.vacio){
                if(this.ValidarVacio(obj.campo,i)){
                    this.llamarSeguidoLongitud(obj,i);
                }    
            }else{
                this.llamarSeguidoLongitud(obj,i);
            } 
        }
    }

    ValidarTipoEspecial = (obj,input,i) => {
        if(this.ValidarUndefinido(obj.especial)){
            let especial = obj.especial.tipoEspecial;
            if(especial == "numero"){
                if(this.ValidarNumero(input,i)){
                    this.ValidarTipo(obj,i);
                }
            }else if(especial == "letra"){
                if(this.ValidarLetra(input,i)){
                    this.ValidarTipo(obj,i);
                }
            }else if(especial == "letraNumero"){
                if(this.ValidarLetraNumero(input,i)){
                    this.ValidarTipo(obj,i);
                }
            }       
        }
    }

    ValidarIniciar = () => {
        let obtenerObjeto = this.objeto;
        const vf = new ValidateForm();
        for (let i = 0; i < obtenerObjeto.length; i++) {
            let tipoO = obtenerObjeto[i].tipo; 
            let campoD = document.getElementById(obtenerObjeto[i].campo);
            var span = document.createElement("span");
            campoMensaje[i] = campoD.parentNode.insertBefore(span,campoD.nextSibling)
            campoMensaje[i].classList.add("campo-error");
            if(tipoO == "texto" || tipoO == "correo"){
                campoD.addEventListener("keyup",function(e) {
                    e.preventDefault();
                    if(tipoO == "texto"){
                        vf.ValidarTipo(obtenerObjeto[i],i);
                    }else if(tipoO == "correo"){
                        if(vf.ValidarUndefinido(obtenerObjeto[i].vacio,i)){
                            if(obtenerObjeto[i].vacio){
                                vf.ValidarCorreo(obtenerObjeto[i].campo,i);
                            }else{
                                vf.ValidarCorreo(obtenerObjeto[i].campo,i);
                            }
                        } 
                    } 
                })                 
            }else if(tipoO == "textoEspecial"){
                if(vf.ValidarUndefinido(obtenerObjeto[i].especial)){
                    let especialTipo = obtenerObjeto[i].especial.tipoEspecial;
                    if(especialTipo == "numero" || especialTipo == "letra" || especialTipo == "letraNumero"){
                        campoD.addEventListener("input",function(){
                            vf.ValidarTipoEspecial(obtenerObjeto[i],this,i);
                        })                  
                    }else if(especialTipo == "decimal"){
                        campoD.addEventListener("input",function(){
                            let decimal = vf.ValidarUndefinido(obtenerObjeto[i].especial.decimal) ? obtenerObjeto[i].especial.decimal : 2;
                            vf.ValidarDecimal(this,decimal,i);
                        }) 
                    }                      
                }

            }else if(tipoO == "seleccion"){
                campoD.addEventListener("change",function(){
                    if(vf.ValidarUndefinido(obtenerObjeto[i].vacio)){
                        if(obtenerObjeto[i].vacio){
                            vf.ValidarVacio(obtenerObjeto[i].campo,i)
                        }
                    }                    
                })

            }
        }  
    }
}