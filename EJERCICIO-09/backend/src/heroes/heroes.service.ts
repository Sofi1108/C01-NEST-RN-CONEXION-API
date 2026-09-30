import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroesService {
  private heroes = [
    { id: 1, nombre: 'Batman', poder: 92, universo: 'DC', emoji: '🦇' },
    { id: 2, nombre: 'Spiderman', poder: 85, universo: 'Marvel', emoji: '🕷️' },
    { id: 3, nombre: 'Superman', poder: 99, universo: 'DC', emoji: '🦸' },
  ];

  findAll() {
    return this.heroes;
  }

  findOne(id: number) {
    return this.heroes.find((heroe) => heroe.id === id);
  }
}
