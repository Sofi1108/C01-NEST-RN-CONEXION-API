import { Get, Injectable, Param } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Fido', especie: 'Perro' },
    { id: 2, nombre: 'Mimi', especie: 'Gato' },
    { id: 3, nombre: 'Tweety', especie: 'Canario' },
  ];

  findOne(id: number) {
    return this.mascotas.find((mascota) => mascota.id === id);
  }
}
