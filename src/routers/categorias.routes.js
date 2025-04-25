import {Router} from "express";
import { methodHTTP as categoriaController } from "../controller/categoria.controllers.js";
/*creamos el enrutador*/
const router = Router();

/*configuramos respuesta desde 0 metodo http get*/
router.get("/", categoriaController.getCategorias)
/*hacemos disponible al router en toda la appp*/
export default router;
