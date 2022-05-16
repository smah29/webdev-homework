$(document).ready(function () {
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  $('#results').css({
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '10px',
    justifyContent: 'center',
  });

  const fetchData = (url) => {
    // Add your code here
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        let count = 0;
        data.drinks.forEach((item) => {
          addDrinkToDOM(item, ++count);
        });
      },
      error: (error) => {
        console.error(error);
        $('#results').append(
          $('<div>').text('An error occured. Please try again')
        );
      },
      complete: () => {
        $('#loading').remove();
      },
    });
  };
  const addDrinkToDOM = (item, count) => {
    $('#results').append(
      $('<figure>')
        .addClass('figure')
        .css({
          marginBottom: '0px',
          width: '226px',
        })
        .append(
          $('<img>')
            .attr({
              src: item.strDrinkThumb,
              alt: `Non-Alcoholic Drink ${count}`,
            })
            .css({
              width: '210px',
              height: '210px',
            })
        )
        .append(
          $('<figcaption>').text(item.strDrink).css({
            fontWeight: 'bold',
            padding: '5px',
            width: '70%',
            margin: 'auto',
          })
        )
    );
  };

  fetchData(url);
});
