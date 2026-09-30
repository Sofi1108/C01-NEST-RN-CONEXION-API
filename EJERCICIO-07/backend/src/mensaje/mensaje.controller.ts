import { Controller, Get } from '@nestjs/common';
import { MensajeService } from './mensaje.service';

@Controller('mensaje')
export class MensajeController {
	constructor(private readonly mensajeService: MensajeService) {}

	@Get()
	obtenerMensaje() {
		return this.mensajeService.obtenerMensaje();
	}
}
