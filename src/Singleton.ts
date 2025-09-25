class Configuracion {
    private static instancia: Configuracion;
    private valores: Map<string, string> = new Map();
  
    private constructor() {}
  
    public static obtenerInstancia(): Configuracion {
      if (!Configuracion.instancia) {
        Configuracion.instancia = new Configuracion();
      }
      return Configuracion.instancia;
    }
  
    public set(clave: string, valor: string): void {
      this.valores.set(clave, valor);
    }
  
    public get(clave: string): string | undefined {
      return this.valores.get(clave);
    }
  }
  
  export function runSingleton() {
    const conf1 = Configuracion.obtenerInstancia();
    const conf2 = Configuracion.obtenerInstancia();
    
    conf1.set("modo", "produccion");
    console.log(conf2.get("modo"));
  }
  