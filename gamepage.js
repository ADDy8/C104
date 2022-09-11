// random value generated
  var y = Math.floor(MathRandom() * 10  + 1);
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
var x  = document.getElementById("guessfield").value;

if( x == y ) 
{
    alert("CONGRATS!!!"+playername+"YOU GUESSED IT RIGHT IN"
          + guess + "GUESS" );
        guess = 1;
}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY!!! TRY A SMALLER NUMBER");

}
else
{
    guess++;
    alert("OOPS SORRY!!! TRY A GREATER NUMBER");
}