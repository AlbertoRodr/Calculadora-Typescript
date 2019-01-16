var Calculos = /** @class */ (function () {
    function Calculos() {
    }
    Calculos.prototype.sumar = function (numeroUno, numeroDos) {
        return numeroUno + numeroDos;
    };
    Calculos.prototype.restar = function (numeroUno, numeroDos) {
        return numeroUno - numeroDos;
    };
    Calculos.prototype.multiplicar = function (numeroUno, numeroDos) {
        return numeroUno * numeroDos;
    };
    Calculos.prototype.dividir = function (numeroUno, numeroDos) {
        return numeroUno / numeroDos;
    };
    return Calculos;
}());
var HtmlInterfaz = /** @class */ (function () {
    function HtmlInterfaz() {
        this.total = document.getElementById("total");
        this.numeroUno = document.getElementById("numero-uno");
        this.numeroDos = document.getElementById("numero-dos");
    }
    HtmlInterfaz.prototype.getNumeroUnoValue = function () {
        return this.numeroUno.value;
    };
    HtmlInterfaz.prototype.getNumeroDosValue = function () {
        return this.numeroDos.value;
    };
    HtmlInterfaz.prototype.renderTotal = function (total) {
        this.total.innerHTML = total;
    };
    return HtmlInterfaz;
}());
/// <reference path="Calculos.ts" />
/// <reference path="Interfaz.ts" />
var Calculadora = /** @class */ (function () {
    function Calculadora() {
        this.Calculos = new Calculos();
        this.htmlInterfaz = new HtmlInterfaz();
    }
    Calculadora.prototype.sumar = function () {
        this.showTotal(this.Calculos.sumar(this.getNumeroUno(), this.getNumeroDos()));
    };
    Calculadora.prototype.restar = function () {
        this.showTotal(this.Calculos.restar(this.getNumeroUno(), this.getNumeroDos()));
    };
    Calculadora.prototype.multiplicar = function () {
        this.showTotal(this.Calculos.multiplicar(this.getNumeroUno(), this.getNumeroDos()));
    };
    Calculadora.prototype.dividir = function () {
        this.showTotal(this.Calculos.dividir(this.getNumeroUno(), this.getNumeroDos()));
    };
    Calculadora.prototype.getNumeroUno = function () {
        return parseFloat(this.htmlInterfaz.getNumeroUnoValue());
    };
    Calculadora.prototype.getNumeroDos = function () {
        return parseFloat(this.htmlInterfaz.getNumeroDosValue());
    };
    Calculadora.prototype.showTotal = function (result) {
        this.htmlInterfaz.renderTotal(result.toString());
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
