import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
  private productos = [
    { id: 1, nombre: 'Camiseta', precio: 19.99, emoji: '👕' },
    { id: 2, nombre: 'Mochila', precio: 39.5, emoji: '🎒' },
    { id: 3, nombre: 'Gafas', precio: 24.0, emoji: '🕶️' },
  ];

  findAll() {
    return this.productos;
  }

  create(producto: { nombre: string; precio: number }) {
    const nuevoProducto = {
      id: this.productos.length + 1,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      emoji: '🛍️',
    };

    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }
}
