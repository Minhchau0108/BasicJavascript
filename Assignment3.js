var fruits = ['apples', 'oranges', 'bananas'];
function listFruits() {
	for (var i = 0; i < fruits.length; i++) {
		console.log('I have some ' + fruits[i]);
	}
}
listFruits(fruits);


var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
function listHours(){
  let sum = 0;
  for(let i = 0; i < workingHours.length; i++){
    let salaryPerDay  = workingHours[i] * 25;
    sum += salaryPerDay;
    console.log(`Peter earned $${salaryPerDay} today!`)
  }
  console.log(`Peter earned $${sum} in last two weeks!`);
}
listHours(workingHours);



function getRandomInteger(start,end) {
  return (start + Math.floor(Math.random() * (end - start + 1)));
}
//Estimate yearly income
function estimateYearlyIncome(){
  let randomArray = [];

  for(let i = 0; i < 250; i++){
    let random = getRandomInteger(6,8);
    randomArray.push(random);
  }

  let yearlyIncome = 0;
  for(let i = 0; i < randomArray.length; i++){
    yearlyIncome += randomArray[i] * 25;
  }
  console.log(`Peter earned $${yearlyIncome} yearly!`);
}
estimateYearlyIncome();

//function that takes in the number of weeks and return estimated revenue
function estimateRevenue(weeks){
    let totalDay = weeks * 5;

    let array = [];
    for(let i = 0; i < totalDay; i++){
        let random = getRandomInteger(6,8);
        array.push(random);
    }

    let weeksIncome = 0;
    for(let i = 0; i < array.length; i++){
      weeksIncome += array[i] * 25;
    }
    console.log(`Estimate revenue in ${weeks} weeks : $${weeksIncome}`)
    return weeksIncome;
}
estimateRevenue(2);
