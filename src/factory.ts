abstract class Equipo {
    tipo: string;
    nombre: string;
    ram: string;
    procesador: string;
  
    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
      this.tipo = tipo;
      this.nombre = nombre;
      this.ram = ram;
      this.procesador = procesador;
    }
  
    abstract detalles(): string;
  }
  
  class Notebook extends Equipo {
    detalles(): string {
      return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
  }
  
  class Desktop extends Equipo {
    detalles(): string {
      return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
  }
  
  class Servidor extends Equipo {
    detalles(): string {
      return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
  }
  
  class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
      switch (tipo) {
        case "Notebook":
          return new Notebook(tipo, nombre, ram, procesador);
        case "Desktop":
          return new Desktop(tipo, nombre, ram, procesador);
        case "Servidor":
          return new Servidor(tipo, nombre, ram, procesador);
        default:
          throw new Error("Tipo de equipo no reconocido");
      }
    }
  }
  
  export function runFactory() {
    const factory = new EquipoFactory();
    const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
    
    console.log(server.detalles());
  }
  