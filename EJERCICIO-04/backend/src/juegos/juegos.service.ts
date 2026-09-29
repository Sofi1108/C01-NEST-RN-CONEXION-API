import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private readonly juegos = [
    { id: 1, titulo: 'Aventura espacial', genero: 'aventura' },
    { id: 2, titulo: 'Estrategia medieval', genero: 'estrategia' },
  ];

  findAll(genero?: string) {
    if (!genero) return this.juegos;
    return this.juegos.filter((juego) => juego.genero === genero);
  }
}
