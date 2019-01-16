/// <reference path="Calculos.ts" />
/// <reference path="Interfaz.ts" />

class Calculadora{
	Calculos: Calculos;
	htmlInterfaz: Interfaz;

	constructor(){
		this.Calculos = new Calculos();
		this.htmlInterfaz = new Interfaz();
	}

	public sumar(){
		this.showTotal(this.Calculos.sumar(this.getNumeroUno(),this.getNumeroDos()));
	}
	public restar(){
		this.showTotal(this.Calculos.restar(this.getNumeroUno(),this.getNumeroDos()));
	}
	public multiplicar(){
		this.showTotal(this.Calculos.multiplicar(this.getNumeroUno(),this.getNumeroDos()));
	}
	public dividir(){
		this.showTotal(this.Calculos.dividir(this.getNumeroUno(),this.getNumeroDos()));
	}

	private getNumeroUno(){
		return parseFloat(this.htmlInterfaz.getNumeroUnoValue());
	}

	private getNumeroDos(){
		return parseFloat(this.htmlInterfaz.getNumeroDosValue());
	}

	private showTotal(result: number){
		this.htmlInterfaz.renderTotal(result.toString());
	}

}

var calculadora = new Calculadora();
