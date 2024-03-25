import { Router } from "express";
import { crearProductos, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProductos)
router.route('/productos/:id').get(obtenerProducto) 

export default router;