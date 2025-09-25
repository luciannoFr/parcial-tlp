interface Observador {
    actualizar(equipo: Equipo, nuevoEstado: string): void;
  }
  
  class Soporte implements Observador {
    actualizar(equipo: Equipo, nuevoEstado: string): void {
      console.log(
        `Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${nuevoEstado}`
      );
    }
  }
  
  class Equipo {
    nombre: string;
    tipo: string;
    estado: string;
    private observadores: Observador[] = [];
  
    constructor(nombre: string, tipo: string, estado: string) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.estado = estado;
    }
  
    agregarObservador(observador: Observador): void {
      this.observadores.push(observador);
    }
  
    private notificar(): void {
      for (const obs of this.observadores) {
        obs.actualizar(this, this.estado);
      }
    }
  
    cambiarEstado(nuevoEstado: string): void {
      this.estado = nuevoEstado;
      this.notificar();
    }
  }
  
  export function runObserver() {
    const soporte = new Soporte();
    const equipo = new Equipo("Notebook HP", "Portatil", "disponible");
    
    equipo.agregarObservador(soporte);
    equipo.cambiarEstado("en reparacion");
  }