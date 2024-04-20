document.addEventListener('DOMContentLoaded', (event) => {
    const bands=['The Plot in You', 'The Devil Wears Prada', 'Pierce The Veil', 'Norma Jean', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'Anything But Here', 'An Old Dog'];

    function strip(bandName){
        return bandName.replace(/^(a |the |an )/i, '').trim();
    }

    const sortedBands= bands.sort((a, b)=> strip(a) > strip(b) ? 1 : -1);
	console.log(sortedBands);
    const bandList = document.getElementById('bands');

    sortedBands.forEach(band=>{
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    })
});