import { runAdapter } from "./adapter";
import { runObserver } from "./observer";
import { runFactory } from "./factory";
import { runSingleton } from "./Singleton";

runAdapter();
console.log("\n");
runObserver();
console.log("\n");
runFactory();
console.log("\n");
runSingleton();
