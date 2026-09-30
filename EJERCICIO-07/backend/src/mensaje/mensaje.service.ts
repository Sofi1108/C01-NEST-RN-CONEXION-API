import { Injectable } from '@nestjs/common';

@Injectable()
export class MensajeService {
	obtenerMensaje() {
		return {
			texto: '¡Conexión conseguida! 🚀',
		};
	}
}
