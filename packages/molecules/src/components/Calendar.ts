/**
 * Calendar Web Component - Seguros Bolivar UI Design System
 *
 * Features:
 * - 3 selection modes: single, range, multiple
 * - Keyboard navigation (arrows, enter, space)
 * - i18n support (Spanish default)
 * - Min/max date validation
 * - Disabled dates support
 * - Custom events for date selection
 * - Accessible (ARIA labels, focus management)
 *
 * Usage:
 * ```html
 * <sb-ui-calendar
 *   variant="single"
 *   selected-date="2022-03-15"
 *   locale="es"
 * ></sb-ui-calendar>
 * ```
 *
 * Events:
 * - date-select: Fired when a date is selected
 * - date-change: Fired when selection changes
 * - month-change: Fired when month changes
 */

import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

type CalendarVariant = 'single' | 'range' | 'multiple';
type CalendarSize = 'small' | 'medium' | 'large';

interface DateInfo {
  date: Date;
  day: number;
  month: number;
  year: number;
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isOutsideMonth: boolean;
  isDisabled: boolean;
}

interface LocaleConfig {
  weekdays: string[];
  weekdaysShort: string[];
  months: string[];
  monthsShort: string[];
  today: string;
  cancel: string;
  accept: string;
}

const LOCALES: Record<string, LocaleConfig> = {
  es: {
    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    weekdaysShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    months: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthsShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    today: 'Hoy',
    cancel: 'Cancelar',
    accept: 'Aceptar',
  },
  en: {
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    cancel: 'Cancel',
    accept: 'Accept',
  },
};

@customElement('sb-ui-calendar')
export class SbUiCalendar extends LitElement {
  // ============================================================================
  // Properties
  // ============================================================================

  /** Calendar variant: single, range, multiple */
  @property({ type: String, reflect: true })
  variant: CalendarVariant = 'single';

  /** Calendar size: small, medium, large */
  @property({ type: String, reflect: true })
  size: CalendarSize = 'medium';

  /** Selected date for single mode (ISO format: YYYY-MM-DD) */
  @property({ type: String, attribute: 'selected-date' })
  selectedDate?: string;

  /** Selected dates for multiple mode (comma separated ISO dates) */
  @property({ type: String, attribute: 'selected-dates' })
  selectedDates?: string;

  /** Range start date (ISO format) */
  @property({ type: String, attribute: 'range-start' })
  rangeStart?: string;

  /** Range end date (ISO format) */
  @property({ type: String, attribute: 'range-end' })
  rangeEnd?: string;

  /** Minimum selectable date (ISO format) */
  @property({ type: String, attribute: 'min-date' })
  minDate?: string;

  /** Maximum selectable date (ISO format) */
  @property({ type: String, attribute: 'max-date' })
  maxDate?: string;

  /** Disabled dates (comma separated ISO dates) */
  @property({ type: String, attribute: 'disabled-dates' })
  disabledDates?: string;

  /** Locale for internationalization */
  @property({ type: String })
  locale: string = 'es';

  /** Show footer with action buttons */
  @property({ type: Boolean, attribute: 'show-footer' })
  showFooter: boolean = true;

  /** Show double calendar for range selection */
  @property({ type: Boolean, attribute: 'show-double' })
  showDouble: boolean = false;

  /** Inline mode (no border/shadow) */
  @property({ type: Boolean, reflect: true })
  inline: boolean = false;

  // ============================================================================
  // State
  // ============================================================================

  /** Current viewing month (0-11) */
  @state()
  private currentMonth: number = new Date().getMonth();

  /** Current viewing year */
  @state()
  private currentYear: number = new Date().getFullYear();

  /** Second month for double calendar (0-11) */
  @state()
  private secondMonth: number = new Date().getMonth() + 1;

  /** Second year for double calendar */
  @state()
  private secondYear: number = new Date().getFullYear();

  /** Internal selected dates array */
  @state()
  private internalSelectedDates: Date[] = [];

  /** Internal range start */
  @state()
  private internalRangeStart?: Date;

  /** Internal range end */
  @state()
  private internalRangeEnd?: Date;

  // ============================================================================
  // Lifecycle
  // ============================================================================

  connectedCallback() {
    super.connectedCallback();
    this.initializeDates();
    this.updateSecondMonth();
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('selectedDate') && this.selectedDate) {
      const date = this.parseDate(this.selectedDate);
      if (date) {
        this.internalSelectedDates = [date];
        this.currentMonth = date.getUTCMonth();
        this.currentYear = date.getUTCFullYear();
      }
    }

    if (changedProperties.has('selectedDates') && this.selectedDates) {
      this.internalSelectedDates = this.selectedDates
        .split(',')
        .map((d) => this.parseDate(d.trim()))
        .filter((d) => d !== null) as Date[];
    }

    if (changedProperties.has('rangeStart') && this.rangeStart) {
      const date = this.parseDate(this.rangeStart);
      this.internalRangeStart = date ?? undefined;
    }

    if (changedProperties.has('rangeEnd') && this.rangeEnd) {
      const date = this.parseDate(this.rangeEnd);
      this.internalRangeEnd = date ?? undefined;
    }
  }

  // ============================================================================
  // Styles (Empty - uses external CSS)
  // ============================================================================

  createRenderRoot() {
    // Use light DOM instead of shadow DOM to use external CSS
    return this;
  }

  // ============================================================================
  // Private Methods - Date Utilities
  // ============================================================================

  private parseDate(dateString: string): Date | null {
    if (!dateString) return null;
    // Parse ISO date string (YYYY-MM-DD) and create Date at noon UTC
    const parts = dateString.split('-');
    if (parts.length !== 3) return null;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
    const day = parseInt(parts[2], 10);
    if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
    const date = new Date(Date.UTC(year, month, day, 12, 0, 0));
    return isNaN(date.getTime()) ? null : date;
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  private isSameDay(date1: Date | null | undefined, date2: Date | null | undefined): boolean {
    if (!date1 || !date2) return false;
    // Use UTC methods to avoid timezone issues
    return (
      date1.getUTCDate() === date2.getUTCDate() &&
      date1.getUTCMonth() === date2.getUTCMonth() &&
      date1.getUTCFullYear() === date2.getUTCFullYear()
    );
  }

  private isToday(date: Date): boolean {
    const now = new Date();
    const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 12, 0, 0));
    return this.isSameDay(date, today);
  }

  private isDateInRange(date: Date, start?: Date, end?: Date): boolean {
    if (!start || !end) return false;
    const time = date.getTime();
    return time > start.getTime() && time < end.getTime();
  }

  private isDateDisabled(date: Date): boolean {
    // Check min/max dates
    if (this.minDate) {
      const min = this.parseDate(this.minDate);
      if (min && date < min) return true;
    }

    if (this.maxDate) {
      const max = this.parseDate(this.maxDate);
      if (max && date > max) return true;
    }

    // Check disabled dates
    if (this.disabledDates) {
      const disabled = this.disabledDates.split(',').map((d) => d.trim());
      const dateStr = this.formatDate(date);
      if (disabled.includes(dateStr)) return true;
    }

    return false;
  }

  private initializeDates() {
    // Initialize from properties
    if (this.selectedDate) {
      const date = this.parseDate(this.selectedDate);
      if (date) {
        this.internalSelectedDates = [date];
        this.currentMonth = date.getUTCMonth();
        this.currentYear = date.getUTCFullYear();
      }
    }

    if (this.selectedDates) {
      this.internalSelectedDates = this.selectedDates
        .split(',')
        .map((d) => this.parseDate(d.trim()))
        .filter((d) => d !== null) as Date[];
    }

    if (this.rangeStart) {
      const date = this.parseDate(this.rangeStart);
      this.internalRangeStart = date ?? undefined;
    }

    if (this.rangeEnd) {
      const date = this.parseDate(this.rangeEnd);
      this.internalRangeEnd = date ?? undefined;
    }
  }

  private updateSecondMonth() {
    this.secondMonth = this.currentMonth + 1;
    this.secondYear = this.currentYear;

    if (this.secondMonth > 11) {
      this.secondMonth = 0;
      this.secondYear++;
    }
  }

  private getDaysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  private getFirstDayOfMonth(month: number, year: number): number {
    return new Date(year, month, 1).getDay();
  }

  private generateCalendarDays(month: number, year: number): DateInfo[] {
    const daysInMonth = this.getDaysInMonth(month, year);
    const firstDay = this.getFirstDayOfMonth(month, year);
    const daysInPrevMonth = this.getDaysInMonth(month - 1, year);

    const days: DateInfo[] = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      // Create date at noon UTC to avoid timezone issues
      const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
      days.push(this.createDateInfo(date, true));
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      // Create date at noon UTC to avoid timezone issues
      const date = new Date(Date.UTC(year, month, day, 12, 0, 0));
      days.push(this.createDateInfo(date, false));
    }

    // Next month days (to fill the grid)
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let day = 1; day <= remainingDays; day++) {
        // Create date at noon UTC to avoid timezone issues
        const date = new Date(Date.UTC(year, month + 1, day, 12, 0, 0));
        days.push(this.createDateInfo(date, true));
      }
    }

    return days;
  }

  private createDateInfo(date: Date, isOutsideMonth: boolean): DateInfo {
    const isSelected = this.internalSelectedDates.some((d) => this.isSameDay(d, date));
    const isRangeStart = this.isSameDay(date, this.internalRangeStart);
    const isRangeEnd = this.isSameDay(date, this.internalRangeEnd);
    const isInRange = this.isDateInRange(date, this.internalRangeStart, this.internalRangeEnd);

    return {
      date,
      day: date.getUTCDate(),
      month: date.getUTCMonth(),
      year: date.getUTCFullYear(),
      isToday: this.isToday(date),
      isSelected,
      isInRange,
      isRangeStart,
      isRangeEnd,
      isOutsideMonth,
      isDisabled: this.isDateDisabled(date),
    };
  }

  // ============================================================================
  // Event Handlers
  // ============================================================================

  private handlePrevMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.updateSecondMonth();
    this.dispatchMonthChangeEvent();
  }

  private handleNextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.updateSecondMonth();
    this.dispatchMonthChangeEvent();
  }

  private handleMonthChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.currentMonth = parseInt(select.value, 10);
    this.updateSecondMonth();
    this.dispatchMonthChangeEvent();
  }

  private handleYearChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.currentYear = parseInt(select.value, 10);
    this.updateSecondMonth();
    this.dispatchMonthChangeEvent();
  }

  private handleDayClick(dateInfo: DateInfo) {
    if (dateInfo.isDisabled || dateInfo.isOutsideMonth) return;

    const date = dateInfo.date;

    switch (this.variant) {
      case 'single':
        this.internalSelectedDates = [date];
        this.dispatchDateSelectEvent(date);
        this.dispatchDateChangeEvent();
        break;

      case 'multiple':
        const index = this.internalSelectedDates.findIndex((d) => this.isSameDay(d, date));
        if (index >= 0) {
          this.internalSelectedDates.splice(index, 1);
        } else {
          this.internalSelectedDates.push(date);
        }
        this.internalSelectedDates = [...this.internalSelectedDates]; // Trigger reactivity
        this.dispatchDateSelectEvent(date);
        this.dispatchDateChangeEvent();
        break;

      case 'range':
        if (!this.internalRangeStart || (this.internalRangeStart && this.internalRangeEnd)) {
          // Start new range
          this.internalRangeStart = date;
          this.internalRangeEnd = undefined;
        } else {
          // Complete range
          if (date < this.internalRangeStart) {
            this.internalRangeEnd = this.internalRangeStart;
            this.internalRangeStart = date;
          } else {
            this.internalRangeEnd = date;
          }
          this.dispatchDateChangeEvent();
        }
        this.requestUpdate();
        break;
    }
  }

  private handleKeyDown(event: KeyboardEvent, dateInfo: DateInfo, index: number) {
    const days = this.generateCalendarDays(this.currentMonth, this.currentYear);

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.handleDayClick(dateInfo);
        break;

      case 'ArrowLeft':
        event.preventDefault();
        this.focusPreviousDay(index, days);
        break;

      case 'ArrowRight':
        event.preventDefault();
        this.focusNextDay(index, days);
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.focusDayAbove(index, days);
        break;

      case 'ArrowDown':
        event.preventDefault();
        this.focusDayBelow(index, days);
        break;

      case 'Home':
        event.preventDefault();
        this.focusFirstDay(days);
        break;

      case 'End':
        event.preventDefault();
        this.focusLastDay(days);
        break;
    }
  }

  private focusPreviousDay(currentIndex: number, days: DateInfo[]) {
    let newIndex = currentIndex - 1;
    while (newIndex >= 0 && (days[newIndex].isDisabled || days[newIndex].isOutsideMonth)) {
      newIndex--;
    }
    if (newIndex >= 0) {
      this.focusDayButton(newIndex);
    }
  }

  private focusNextDay(currentIndex: number, days: DateInfo[]) {
    let newIndex = currentIndex + 1;
    while (newIndex < days.length && (days[newIndex].isDisabled || days[newIndex].isOutsideMonth)) {
      newIndex++;
    }
    if (newIndex < days.length) {
      this.focusDayButton(newIndex);
    }
  }

  private focusDayAbove(currentIndex: number, days: DateInfo[]) {
    const newIndex = currentIndex - 7;
    if (newIndex >= 0 && !days[newIndex].isDisabled && !days[newIndex].isOutsideMonth) {
      this.focusDayButton(newIndex);
    }
  }

  private focusDayBelow(currentIndex: number, days: DateInfo[]) {
    const newIndex = currentIndex + 7;
    if (newIndex < days.length && !days[newIndex].isDisabled && !days[newIndex].isOutsideMonth) {
      this.focusDayButton(newIndex);
    }
  }

  private focusFirstDay(days: DateInfo[]) {
    const index = days.findIndex((d) => !d.isDisabled && !d.isOutsideMonth);
    if (index >= 0) {
      this.focusDayButton(index);
    }
  }

  private focusLastDay(days: DateInfo[]) {
    const index = days
      .slice()
      .reverse()
      .findIndex((d) => !d.isDisabled && !d.isOutsideMonth);
    if (index >= 0) {
      const actualIndex = days.length - 1 - index;
      this.focusDayButton(actualIndex);
    }
  }

  private focusDayButton(index: number) {
    this.updateComplete.then(() => {
      const button = this.shadowRoot?.querySelector(
        `.sb-ui-calendar__day:nth-child(${index + 1})`
      ) as HTMLElement;
      button?.focus();
    });
  }

  private handleCancel() {
    this.dispatchEvent(
      new CustomEvent('calendar-cancel', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleAccept() {
    this.dispatchEvent(
      new CustomEvent('calendar-accept', {
        bubbles: true,
        composed: true,
        detail: this.getSelectionData(),
      })
    );
  }

  // ============================================================================
  // Custom Events
  // ============================================================================

  private dispatchDateSelectEvent(date: Date) {
    this.dispatchEvent(
      new CustomEvent('date-select', {
        detail: {
          date: this.formatDate(date),
          timestamp: date.getTime(),
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private dispatchDateChangeEvent() {
    this.dispatchEvent(
      new CustomEvent('date-change', {
        detail: this.getSelectionData(),
        bubbles: true,
        composed: true,
      })
    );
  }

  private dispatchMonthChangeEvent() {
    this.dispatchEvent(
      new CustomEvent('month-change', {
        detail: {
          month: this.currentMonth,
          year: this.currentYear,
          monthName: this.getLocaleConfig().months[this.currentMonth],
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private getSelectionData() {
    switch (this.variant) {
      case 'single':
        return {
          variant: 'single',
          date: this.internalSelectedDates[0]
            ? this.formatDate(this.internalSelectedDates[0])
            : null,
        };

      case 'multiple':
        return {
          variant: 'multiple',
          dates: this.internalSelectedDates.map((d) => this.formatDate(d)),
        };

      case 'range':
        return {
          variant: 'range',
          start: this.internalRangeStart ? this.formatDate(this.internalRangeStart) : null,
          end: this.internalRangeEnd ? this.formatDate(this.internalRangeEnd) : null,
        };

      default:
        return {};
    }
  }

  // ============================================================================
  // Helpers
  // ============================================================================

  private getLocaleConfig(): LocaleConfig {
    return LOCALES[this.locale] || LOCALES['es'];
  }

  private getYearRange(): number[] {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const endYear = currentYear + 50;
    const years: number[] = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }

  private getDayClasses(dateInfo: DateInfo): string {
    const classes = ['sb-ui-calendar__day'];

    if (dateInfo.isToday) classes.push('sb-ui-calendar__day--today');
    if (dateInfo.isSelected) classes.push('sb-ui-calendar__day--selected');
    if (dateInfo.isRangeStart) classes.push('sb-ui-calendar__day--range-start');
    if (dateInfo.isRangeEnd) classes.push('sb-ui-calendar__day--range-end');
    if (dateInfo.isInRange) classes.push('sb-ui-calendar__day--in-range');
    if (dateInfo.isOutsideMonth) classes.push('sb-ui-calendar__day--outside');
    if (dateInfo.isDisabled) classes.push('sb-ui-calendar__day--disabled');

    return classes.join(' ');
  }

  private getAriaLabel(dateInfo: DateInfo): string {
    const locale = this.getLocaleConfig();
    const monthName = locale.months[dateInfo.month];
    let label = `${dateInfo.day} de ${monthName}, ${dateInfo.year}`;

    if (dateInfo.isToday) label += `, ${locale.today}`;
    if (dateInfo.isSelected) label += ', Seleccionado';
    if (dateInfo.isRangeStart) label += ', Inicio del rango';
    if (dateInfo.isRangeEnd) label += ', Fin del rango';

    return label;
  }

  // ============================================================================
  // Render Methods
  // ============================================================================

  private renderNavIcon(direction: 'left' | 'right') {
    if (direction === 'left') {
      return html`
        <svg class="sb-ui-calendar__nav-icon" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      `;
    }
    return html`
      <svg class="sb-ui-calendar__nav-icon" viewBox="0 0 24 24">
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    `;
  }

  private renderMonth(month: number, year: number) {
    const locale = this.getLocaleConfig();
    const days = this.generateCalendarDays(month, year);
    const years = this.getYearRange();

    return html`
      <div class="sb-ui-calendar__month">
        <div class="sb-ui-calendar__header">
          <button
            class="sb-ui-calendar__nav-button"
            @click=${this.handlePrevMonth}
            aria-label="Mes anterior"
          >
            ${this.renderNavIcon('left')}
          </button>
          <div class="sb-ui-calendar__month-year">
            <select
              class="sb-ui-select sb-ui-calendar__month-select"
              .value=${month.toString()}
              @change=${this.handleMonthChange}
              aria-label="Seleccionar mes"
            >
              ${locale.months.map(
                (monthName, index) =>
                  html`<option value=${index} ?selected=${index === month}>${monthName}</option>`
              )}
            </select>
            <select
              class="sb-ui-select sb-ui-calendar__year-select"
              .value=${year.toString()}
              @change=${this.handleYearChange}
              aria-label="Seleccionar año"
            >
              ${years.map(
                (yearValue) =>
                  html`<option value=${yearValue} ?selected=${yearValue === year}>${yearValue}</option>`
              )}
            </select>
          </div>
          <button
            class="sb-ui-calendar__nav-button"
            @click=${this.handleNextMonth}
            aria-label="Mes siguiente"
          >
            ${this.renderNavIcon('right')}
          </button>
        </div>

        <div class="sb-ui-calendar__weekdays">
          ${locale.weekdaysShort.map(
            (day) => html`<div class="sb-ui-calendar__weekday">${day}</div>`
          )}
        </div>

        <div class="sb-ui-calendar__days">
          ${days.map(
            (dateInfo, index) => html`
              <button
                class=${this.getDayClasses(dateInfo)}
                @click=${() => this.handleDayClick(dateInfo)}
                @keydown=${(e: KeyboardEvent) => this.handleKeyDown(e, dateInfo, index)}
                ?disabled=${dateInfo.isDisabled || dateInfo.isOutsideMonth}
                aria-label=${this.getAriaLabel(dateInfo)}
                aria-selected=${dateInfo.isSelected}
                tabindex=${dateInfo.isSelected || (index === 0 && !this.internalSelectedDates.length)
                  ? '0'
                  : '-1'}
              >
                ${dateInfo.day}
              </button>
            `
          )}
        </div>
      </div>
    `;
  }

  private renderFooter() {
    if (!this.showFooter) return nothing;

    const locale = this.getLocaleConfig();

    return html`
      <div class="sb-ui-calendar__footer">
        <button
          class="sb-ui-button sb-ui-button--secondary sb-ui-button--small"
          @click=${this.handleCancel}
        >
          ${locale.cancel}
        </button>
        <button
          class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small"
          @click=${this.handleAccept}
        >
          ${locale.accept}
        </button>
      </div>
    `;
  }

  render() {
    const sizeClass = this.size !== 'medium' ? `sb-ui-calendar--${this.size}` : '';
    const doubleClass = this.showDouble && this.variant === 'range' ? 'sb-ui-calendar--double' : '';
    const inlineClass = this.inline ? 'sb-ui-calendar--inline' : '';
    const noFooterClass = !this.showFooter ? 'sb-ui-calendar--no-footer' : '';

    const classes = ['sb-ui-calendar', sizeClass, doubleClass, inlineClass, noFooterClass]
      .filter(Boolean)
      .join(' ');

    return html`
      <div class=${classes} data-variant=${this.variant}>
        ${this.renderMonth(this.currentMonth, this.currentYear)}
        ${this.showDouble && this.variant === 'range'
          ? this.renderMonth(this.secondMonth, this.secondYear)
          : nothing}
        ${this.renderFooter()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-ui-calendar': SbUiCalendar;
  }
}

