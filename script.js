const { createElement } = require("react")

const btn = document.getElementById('button')

const custumAlert = (message) => {
    // alert(message)
    const overlay = document.createElement('div')
    overlay.className = 'overlay';
    
    document.append(overlay);
}
btn.addEventListener('click', () => {
    CustomEvent('Learn frontend')
})