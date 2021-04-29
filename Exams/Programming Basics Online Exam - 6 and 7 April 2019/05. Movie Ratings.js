function data(input) {
    let movieCount = Number(input[0]);

    let counter = 1;
    let movie = "";
    let rating = 0;
    let worstMovie = "";
    let worstRating = 10;
    let ratingSum = 0;
    for (let i = 1; i <= movieCount; i++) {
        
        let currentRating = Number(input[counter + 1]);
        if (currentRating > rating) {
            rating = currentRating;
            movie = input[counter];           
            
        } else if (currentRating < worstRating) {
            worstMovie = input[counter];
            worstRating = currentRating;            
            
        } 
        ratingSum+=currentRating;
        counter += 2;
    }
    console.log(`${movie} is with highest rating: ${rating.toFixed(1)}`);
    console.log(`${worstMovie} is with lowest rating: ${worstRating.toFixed(1)}`);
    console.log(`Average rating: ${((ratingSum/movieCount).toFixed(1))}`);
}
data([5,
    "A Star is Born",
    7.8,
    "Creed 2",
    7.3,
    "Mary Poppins",
    7.2,
    "Vice",
    7.2,
    "Captain Marvel",
    7.1]);