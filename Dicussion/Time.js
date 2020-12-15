// Format: Years, Months, Days, Hours, Minutes, and Seconds.
function parseTime(miliseconds){
  let years = Math.floor(miliseconds/(1000 * 60 * 60 * 24 * 365));

  miliseconds %= (1000 * 60 * 60 * 24 * 365);

  let months = Math.floor(miliseconds/(1000 * 60 * 60 * 24 * 365/12));
  miliseconds %= 1000 * 60 * 60 * 24 * (365/12);

  let days = Math.floor(miliseconds/(1000 * 60 * 60 * 24));
  miliseconds %= 1000 * 60 * 60 * 24;

  let hours = Math.floor(miliseconds/(1000 * 60 * 60));
  miliseconds %= 1000 * 60 * 60;

  let minutes = Math.floor(miliseconds/(1000 * 60));
  miliseconds %= 1000 * 60;

  let seconds = Math.floor(miliseconds/(1000));

  console.log(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
}
parseTime(Date.now());
parseTime(Date.now() - new Date("1985-09-29"));