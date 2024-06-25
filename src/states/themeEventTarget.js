class ThemeState extends EventTarget {
    constructor() {
        super()
        this.theme = localStorage.getItem('theme') || 'light'
    }

    set(theme) {
        localStorage.setItem('theme', theme)
        this.theme = theme
        this.dispatchEvent(new CustomEvent('theme', { detail: theme }))
    }
    toggle() {
        const appositeTheme = this.theme === 'light' ? 'dark' : 'light'
        this.set(appositeTheme)
    }
}

const themeState = new ThemeState()
export default themeState