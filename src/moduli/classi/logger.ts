import type { ILogger } from '../interfacce.js' 

class Logger implements ILogger {
	
	log(message: string): void {
		console.log(message);
	}

	warn(message: string): void {
		console.warn(message);
	}

	error(message: string): void {
		console.error(message)
	}
}

export const logger = new Logger();
