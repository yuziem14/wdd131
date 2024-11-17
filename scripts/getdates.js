(() => {
    const currentYear = (new Date()).getFullYear();
    const currentYearElement = document.querySelector('#currentyear');
    currentYearElement.textContent = currentYear

    const lastModifiedElement = document.querySelector('#lastModified');
    lastModifiedElement.textContent = document.lastModified;
})();