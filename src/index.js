import * as $K from "../node_modules/kartograph-js";
import * as config from "./project.config";
import { mapFullPath } from "./project.config";

let map = $K.map("#map")
map.loadMap(mapFullPath(), () => {
    console.log("Map Loaded.");
});