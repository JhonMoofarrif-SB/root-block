/**
 * Theme Manager para manejar temas y marcas
 */
export class ThemeManager {
  private static instance: ThemeManager;
  private currentBrand: string = 'white-label';
  private currentTheme: string = 'light';
  private initialized: boolean = false;

  // Marcas disponibles
  private readonly brands = [
    'white-label',
    'jelpit', 
    'davivienda',
    'cien-cuadras',
    'doctor-aki',
    'seguros-bolivar'
  ];

  // Temas disponibles
  private readonly themes = ['light', 'dark'];

  private constructor() {
    this.init();
  }

  /**
   * Obtiene la instancia singleton
   */
  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  /**
   * Inicializa el theme manager
   */
  private init(): void {
    if (this.initialized) return;

    // Detectar tema del sistema
    this.detectSystemTheme();
    
    // Detectar marca desde atributos HTML
    this.detectBrandFromHTML();

    // Aplicar tema inicial
    this.applyTheme();

    // Escuchar cambios del sistema
    this.setupSystemThemeListener();

    this.initialized = true;
  }

  /**
   * Detecta el tema del sistema
   */
  private detectSystemTheme(): void {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentTheme = 'dark';
    }
  }

  /**
   * Detecta la marca desde atributos HTML
   */
  private detectBrandFromHTML(): void {
    const htmlElement = document.documentElement;
    const brandAttr = htmlElement.getAttribute('data-brand') || 
                     htmlElement.getAttribute('data-rb-brand');
    
    if (brandAttr && this.brands.includes(brandAttr)) {
      this.currentBrand = brandAttr;
    }
  }

  /**
   * Configura el listener para cambios de tema del sistema
   */
  private setupSystemThemeListener(): void {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        this.setTheme(e.matches ? 'dark' : 'light');
      });
    }
  }

  /**
   * Establece la marca
   */
  setBrand(brand: string): void {
    if (!this.brands.includes(brand)) {
      console.warn(`Invalid brand: ${brand}. Available brands:`, this.brands);
      return;
    }

    this.currentBrand = brand;
    this.applyTheme();
    this.emitThemeChange();
  }

  /**
   * Establece el tema
   */
  setTheme(theme: string): void {
    if (!this.themes.includes(theme)) {
      console.warn(`Invalid theme: ${theme}. Available themes:`, this.themes);
      return;
    }

    this.currentTheme = theme;
    this.applyTheme();
    this.emitThemeChange();
  }

  /**
   * Aplica el tema actual
   */
  private applyTheme(): void {
    const htmlElement = document.documentElement;
    
    // Remover clases anteriores
    this.brands.forEach(brand => {
      htmlElement.classList.remove(`rb-brand--${brand}`);
    });
    this.themes.forEach(theme => {
      htmlElement.classList.remove(`rb-theme--${theme}`);
    });

    // Aplicar nuevas clases
    htmlElement.classList.add(`rb-brand--${this.currentBrand}`);
    htmlElement.classList.add(`rb-theme--${this.currentTheme}`);

    // Establecer atributos de datos
    htmlElement.setAttribute('data-rb-brand', this.currentBrand);
    htmlElement.setAttribute('data-rb-theme', this.currentTheme);

    // Cargar CSS específico si es necesario
    this.loadThemeCSS();
  }

  /**
   * Carga el CSS específico del tema
   */
  private loadThemeCSS(): void {
    const cssId = 'rb-theme-css';
    const existingLink = document.getElementById(cssId) as HTMLLinkElement;
    
    // Construir URL del CSS
    const cssUrl = this.buildCSSUrl();

    if (existingLink) {
      existingLink.href = cssUrl;
    } else {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = cssUrl;
      document.head.appendChild(link);
    }
  }

  /**
   * Construye la URL del CSS según la marca y tema
   */
  private buildCSSUrl(): string {
    // Asume que los archivos CSS están en una CDN o directorio específico
    const baseUrl = this.getCSSBaseUrl();
    return `${baseUrl}/rb-${this.currentBrand}-${this.currentTheme}.min.css`;
  }

  /**
   * Obtiene la URL base para los archivos CSS
   */
  private getCSSBaseUrl(): string {
    // Buscar en meta tags o usar default
    const metaTag = document.querySelector('meta[name="rb-css-base-url"]') as HTMLMetaElement;
    return metaTag?.content || '/assets/css';
  }

  /**
   * Emite evento de cambio de tema
   */
  private emitThemeChange(): void {
    const event = new CustomEvent('rb:theme-change', {
      detail: {
        brand: this.currentBrand,
        theme: this.currentTheme
      }
    });
    document.dispatchEvent(event);
  }

  /**
   * Obtiene la marca actual
   */
  getCurrentBrand(): string {
    return this.currentBrand;
  }

  /**
   * Obtiene el tema actual
   */
  getCurrentTheme(): string {
    return this.currentTheme;
  }

  /**
   * Obtiene todas las marcas disponibles
   */
  getAvailableBrands(): string[] {
    return [...this.brands];
  }

  /**
   * Obtiene todos los temas disponibles
   */
  getAvailableThemes(): string[] {
    return [...this.themes];
  }

  /**
   * Verifica si una marca es válida
   */
  isValidBrand(brand: string): boolean {
    return this.brands.includes(brand);
  }

  /**
   * Verifica si un tema es válido
   */
  isValidTheme(theme: string): boolean {
    return this.themes.includes(theme);
  }

  /**
   * Obtiene la configuración actual completa
   */
  getCurrentConfig(): { brand: string; theme: string } {
    return {
      brand: this.currentBrand,
      theme: this.currentTheme
    };
  }

  /**
   * Resetea al tema por defecto
   */
  reset(): void {
    this.currentBrand = 'white-label';
    this.currentTheme = 'light';
    this.applyTheme();
    this.emitThemeChange();
  }

  /**
   * Alterna entre temas claro y oscuro
   */
  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}

// Exportar instancia singleton
export const themeManager = ThemeManager.getInstance();
