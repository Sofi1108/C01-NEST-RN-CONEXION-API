import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Luna', tipo: 'Perro', likes: 12, emoji: '🐶' },
    { id: 2, nombre: 'Milo', tipo: 'Gato', likes: 18, emoji: '🐱' },
    { id: 3, nombre: 'Nina', tipo: 'Conejo', likes: 9, emoji: '🐰' },
  ];

  findAll() {
    return this.mascotas;
  }

  findOne(id: number) {
    return this.mascotas.find((mascota) => mascota.id === id);
  }

  darLike(id: number) {
    const mascota = this.findOne(id);

    if (!mascota) {
      return undefined;
    }

    mascota.likes += 1;
    return mascota;
  }
}
