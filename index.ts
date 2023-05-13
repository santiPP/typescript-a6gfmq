// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona {
  private nombre: string;
  private edad: number;
  
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  public getNombre(): string {
    return this.nombre;
  }
  
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
  
  public getEdad(): number {
    return this.edad;
  }
  
  public setEdad(edad: number): void {
    this.edad = edad;
  }
  
  public saludar(): void {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear una instancia de la clase Persona
const persona = new Persona("Juan", 30);

// Llamar al método saludar
persona.saludar();

// Obtener y establecer el nombre y edad de la persona
persona.setNombre("Jorge");
persona.setEdad(45);

console.log(persona.getNombre()); // Jorge
console.log(persona.getEdad()); // 45
