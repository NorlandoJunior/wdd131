document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    hamburger.textContent = nav.classList.contains('hidden') ? '☰' : '✖';
});


//Temples objects

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

     {
     templeName: "Apia Samo",
     location: "Apia, Samoa",
     dedicated: "1983, August 5",
     area: 18691,
     imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-8666.jpg"
    },

    {
        templeName: "Belem Brazil",
        location: "Belem, Brazil",
        dedicated: "2020, November 22",
        area: 28000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31309.jpg"
    },

    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September 15",
        area: 35546,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-3076.jpg"
    },

    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho",
        dedicated: "1984, May 30",
        area: 35868,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-3851.jpg"
    },

    {
        templeName: "Campinas Brazil",
        location: "Camppinas, Brazil",
        dedicated: "2002, May 17",
        area: 48100,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206.jpg"
    },

    {
        templeName: "Colonia Juarez Chihuahua Mexico",
        location: "Colonia Juarez Chihuahua, Mexico",
        dedicated: "1999, March 7",
        area: 6800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-35518.jpg"

    },

    {
        templeName: "Recife Brazil",
        location: "Recife, Brazil",
        dedicated: "2000, December 15",
        area: 37200,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36780.jpg"

    },

    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, November 2",
        area: 59246,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816.jpg"

    },

    {
        templeName: "Frankfurt Temple",
        location: "Frankfurt, Temple",
        dedicated: "1987, August 30",
        area: 32895,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-43184.jpg"

    },
]

export { temples };




   

     