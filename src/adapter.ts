class InventarioViejo {
    private items: string[] = [];
      constructor() {
      this.items = [];
    }
  
    addItem(item: string, tipo: string, estado: string) {
      this.items.push(item, tipo, estado);
    }
  
    getItems(): string[] {
      return this.items;
    }
  }
  
  class AdaptadorInventario {
    private inventarioViejo: InventarioViejo;
  
    constructor(inventarioViejo: InventarioViejo) {
      this.inventarioViejo = inventarioViejo;
    }
  
    agregarEquipo(nombre: string, tipo: string, estado: string) {
      this.inventarioViejo.addItem(nombre, tipo, estado);
    }
  
    listarEquipos(): string[] {
      return this.inventarioViejo.getItems();
    }
  }
  
  export function runAdapter() {
    const inventarioViejo = new InventarioViejo();
    const adaptador = new AdaptadorInventario(inventarioViejo);
    
    adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
    
    console.log(adaptador.listarEquipos());
  }