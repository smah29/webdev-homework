const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector('#results');
app.style.display = 'flex';
app.style.flexFlow = 'row wrap';
app.style.gap = '10px';
app.style.justifyContent = 'center';

const fetchData = async function (url) {
  // Add your code here
  try {
    let response = await fetch(url);
    let data = await response.json();

    data.drinks.forEach((item) => {
      addDrinkToDOM(item);
    });
  } catch (error) {
    console.error(error);
    let element = document.createElement('div');
    element.textContent = 'An error occured. Please try again';
    app.append(element);
  } finally {
    let loader = document.querySelector('#loading');
    app.removeChild(loader);
  }
};
const addDrinkToDOM = (item) => {
  let figure = document.createElement('figure');
  figure.className = 'figure';
  figure.style.marginBottom = '0px';
  figure.style.width = '226px';

  let img = document.createElement('img');
  img.src = item.strDrinkThumb;
  img.alt = item.strDrink;
  img.style.width = '210px';
  img.style.height = '210px';

  let figcaption = document.createElement('figcaption');
  figcaption.textContent = item.strDrink;
  figcaption.style.fontWeight = 'bold';
  figcaption.style.padding = '5px';
  figcaption.style.width = '70%';
  figcaption.style.margin = 'auto';

  figure.append(img);
  figure.append(figcaption);

  app.append(figure);
};

fetchData(url);
