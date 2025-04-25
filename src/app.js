/* importamos al framework express */
import express from "express";
import categoriaRoutes from "./routers/categorias.routes.js"
/* asignamos a app toda funcionalidad para mi server web */
const app = express();

/* setear un puerto a mi web server */
app.set("port",5000)

/* routes*/
app.use("/api/categorias",categoriaRoutes)
/* hacemos disponible al server app a toda la aplicacion */
export default app;