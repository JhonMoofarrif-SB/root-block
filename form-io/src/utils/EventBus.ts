/**
 * Event Bus para comunicación entre componentes
 */
class EventBusClass {
  public listeners: { [key: string]: Function[] } = {};

  /**
   * Suscribe a un evento
   */
  on(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  /**
   * Desuscribe de un evento
   */
  off(event: string, callback?: Function): void {
    if (!this.listeners[event]) return;

    if (callback) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    } else {
      delete this.listeners[event];
    }
  }

  /**
   * Emite un evento
   */
  emit(event: string, data?: any): void {
    if (!this.listeners[event]) return;

    this.listeners[event].forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error(`Error in event listener for "${event}":`, error);
      }
    });
  }

  /**
   * Suscribe a un evento una sola vez
   */
  once(event: string, callback: Function): void {
    const onceCallback = (data: any) => {
      callback(data);
      this.off(event, onceCallback);
    };
    this.on(event, onceCallback);
  }

  /**
   * Limpia todos los listeners
   */
  clear(): void {
    this.listeners = {};
  }

  /**
   * Obtiene la lista de eventos activos
   */
  getEvents(): string[] {
    return Object.keys(this.listeners);
  }

  /**
   * Obtiene el número de listeners para un evento
   */
  getListenerCount(event: string): number {
    return this.listeners[event]?.length || 0;
  }
}

// Exportar instancia singleton
export const EventBus = new EventBusClass();
