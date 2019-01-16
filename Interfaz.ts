class Interfaz{
	total: HTMLInputElement;
	numeroUno: HTMLInputElement;
	numeroDos: HTMLInputElement;
	constructor(){
		this.total = <HTMLInputElement>document.getElementById("total");
		this.numeroUno = <HTMLInputElement>document.getElementById("numero-uno");
		this.numeroDos = <HTMLInputElement>document.getElementById("numero-dos");
	}
	public getNumeroUnoValue():string{
		return this.numeroUno.value;
	}
	public getNumeroDosValue():string{
		return this.numeroDos.value;
	}
	public renderTotal(total: string){
		this.total.innerHTML = total;
	}
}
