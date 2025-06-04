// Dark mode utility

export const darkMode = {
  // Get current state
  isDark(): boolean {
    return document.documentElement.classList.contains('dark');
  },
  
  // Enable dark mode
  enable(): void {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  },
  
  // Disable dark mode
  disable(): void {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  },
  
  // Toggle dark mode
  toggle(): void {
    if (this.isDark()) {
      this.disable();
    } else {
      this.enable();
    }
    console.log('Dark mode toggled:', this.isDark());
  }
};