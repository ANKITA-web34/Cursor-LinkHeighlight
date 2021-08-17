const trigger = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLinks() {
    const linkcoords = this.getBoundingClientRect();
    const coords = {
        width : linkcoords.width,
        height : linkcoords.height,
        top : linkcoords.top + window.scrollY,
        left : linkcoords.left + window.scrollX,
    }

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

trigger.forEach(a => a.addEventListener('mouseenter', highlightLinks));