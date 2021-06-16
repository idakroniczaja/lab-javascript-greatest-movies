// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (arr){
  let allDirectors = arr.map(movie=>movie.director);
  let filteredDirectors = allDirectors.filter((each, i)=> allDirectors.indexOf(each)===i);
  return filteredDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
  let moviesSpielberg = arr.filter(movie=> movie.director==="Steven Spielberg")
  let dramaMovies = moviesSpielberg.filter(movie=>movie.genre.includes('Drama'))
  return dramaMovies.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
  let movieRates = arr.map(movie=>{
   if(!movie.rate){
     return movie.rate =0
   }else {
     return movie.rate
   }
   
  })

  let averageScore = Number((movieRates.reduce((acc,vall)=>acc+vall,0)/movieRates.length).toFixed(2))
if(!arr.length){
  return 0
}else {
  return averageScore
}

  }




  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
  let dramaMovies = arr.filter(movie => movie.genre.includes("Drama") );
  let dramaRates = dramaMovies.reduce((sum, movie)=>{
    return sum + movie.rate
  },0)/dramaMovies.length

  if(dramaMovies.length===0){
    return 0
  }else return Number(dramaRates.toFixed(2))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
  let orderYear =  [...arr].sort ((a,b)=>a.title?.localeCompare(b.title)).sort((a,b)=>a.year-b.year)
  return orderYear

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  return [...arr].sort((a,b)=>a.title.localeCompare(b.title)).map(movie=>movie.title).filter((movie, i)=>i<20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array){


  const caluclateMinutes = (movieDuration) => {
    if (String(movieDuration).includes('h')){
      return String(movieDuration).split(' ').map((elem,index)=>{
        if(index===0){
          return parseInt(elem)*60
        }else {
            return parseInt(elem)
        }
        }).reduce((acc,vall)=>acc+vall,0)
  
    } else{
      if(parseInt(movieDuration)>60){
        return parseInt(movieDuration)/60
      }else {
        return parseInt(movieDuration)
      }
    }
  
    }
 
  
  let allMovieDurations = [...array].map(movie=>{
     movie.duration = caluclateMinutes(movie.duration)
    return movie
  })
  
  return allMovieDurations
  }
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(array){
 if(array.length===0)return null;

  let arraysOfSameYearMovies = array.map((elem,index,arr)=>{
    let sameYearMovies = arr.filter(movie=>movie.year===elem.year)

    let avgsForYears= sameYearMovies.map(elem=>elem.rate).reduce((acc,val)=>acc+val,0)/sameYearMovies.length

    let years = sameYearMovies.map(movie=>movie.year)[0];

 return arrayOfavgsAndYears =  {
    avg:avgsForYears,
    year: years
  }


 })

let finalArray= arraysOfSameYearMovies.sort((a,b)=>{
 if(a.avg===b.avg){
   return a.year-b.year
 }else {
   return b.avg-a.avg
 }
})

let bestYearMovie = Object.assign({rate:finalArray[0].avg, year:finalArray[0].year})

return `The best year was ${bestYearMovie.year} with an average rate of ${bestYearMovie.rate}`

}