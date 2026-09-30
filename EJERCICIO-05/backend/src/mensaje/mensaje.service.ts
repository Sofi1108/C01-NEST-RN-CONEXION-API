import { Injectable } from '@nestjs/common';

@Injectable()
export class MensajeService {
      getMessage(): string {
    return '¡Conexión conseguida! 🚀';
  }
}
