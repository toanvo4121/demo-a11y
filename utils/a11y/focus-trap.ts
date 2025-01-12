export class FocusTrap {
  private element: HTMLElement;
  private focusableElements: HTMLElement[];
  private firstFocusableEl: HTMLElement;
  private lastFocusableEl: HTMLElement;
  private previousActiveElement: HTMLElement | null;

  constructor(element: HTMLElement) {
    this.element = element;
    this.focusableElements = Array.from(
      element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ) as HTMLElement[];
    this.firstFocusableEl = this.focusableElements[0];
    this.lastFocusableEl = this.focusableElements[this.focusableElements.length - 1];
    this.previousActiveElement = document.activeElement as HTMLElement;
  }

  activate() {
    this.previousActiveElement = document.activeElement as HTMLElement;
    this.element.addEventListener('keydown', this.handleKeyDown);
    this.firstFocusableEl?.focus();
  }

  deactivate() {
    this.element.removeEventListener('keydown', this.handleKeyDown);
    this.previousActiveElement?.focus();
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === this.firstFocusableEl) {
        e.preventDefault();
        this.lastFocusableEl?.focus();
      }
    } else {
      if (document.activeElement === this.lastFocusableEl) {
        e.preventDefault();
        this.firstFocusableEl?.focus();
      }
    }
  };
}