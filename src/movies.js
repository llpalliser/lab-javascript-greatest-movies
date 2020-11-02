// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (array) => array.map (elemento => elemento.director)// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (array) => array.filter(elemento  => elemento.director.includes ("Steven Spielberg") && elemento.genre.includes("Drama")).length

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage (array) {

  const solution = Math.round( ratesSum(array)/array.length * 1e2 ) / 1e2;
  if (solution > 0){
   return solution}
   else 
   {
     return 0
   }
  };
  
  const ratesSum = (array) => array.filter (elemento => elemento.rate > 0).reduce((acumulador, elemento) => acumulador + elemento.rate, 0)



// Iteration 4: Drama movies - Get the average of Drama Movies
  
function dramaMoviesRate(array) {
  
  const dramaArray = array.filter(elemento => elemento.genre.includes ("Drama") && elemento.rate>0)
  const solution = Math.round( dramaRatesSum(dramaArray)/dramaArray.length * 1e2 ) / 1e2;

  if (solution > 0){
    return solution}
    else 
    {
      return 0
    }  }
const dramaRatesSum = (array) => array.filter (elemento => elemento.rate > 0).reduce((acumulador, elemento) => acumulador + elemento.rate, 0)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const orderedMovies = array.sort((a, b) => {
     return a.year - b.year;
 });

   return orderedMovies
 }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically (array) {
  const onlyTitle = (array) => array.map (elemento => elemento.title)
  return onlyTitle(array).sort().slice(0, 20)
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average






//const getAllDirectors = (arr) => arr.map (element => element.director)
