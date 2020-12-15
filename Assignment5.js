var userA = {
  id: 123456,
  name: "Peter Parker",
  email: "peter.parker@gmail.com",
  role: "student",
  courseId: 112233,
};
console.log(Object.keys(userA).length);
console.log(typeof userA.id);
console.log(typeof userA.courseId);
userA.email = "pparker@gmail.com";

function greeting(user){
  console.log(`Hi, my name is ${user.name}, my email is ${user.email}`);
}
greeting(userA);

//Add a list of tasks to the object so that it looks like below
var userB = {
  id: 123456,
  name: "Peter Parker",
  email: "peter.parker@gmail.com",
  role: "student",
  courseId: 112233,
  tasks: [
    { name: "Task 1", status: "Done"},
    { name: "Task 2", status: "Not Started"},
    { name: "Task 3", status: "In Progress"},
    { name: "Task 4", status: "Not Started"},
    { name: "Task 5", status: "Done"},
    { name: "Task 6", status: "In Progress"},
    { name: "Task 7", status: "Not Started"},
    { name: "Task 8", status: "Done"},
    { name: "Task 9", status: "Done"},
    { name: "Task 10", status: "In Progress"}
  ]
};

//print out 3 lists of tasks that are "Not Started", "In Progress", and "Done",
function listOfTask(user){
  let done = [];
  let notStarted = [];
  let inProgress = [];
  for(let i = 0; i < user.tasks.length; i++){
    if(user.tasks[i].status == "Done"){
      done.push(user.tasks[i].name);
    }
    else if (user.tasks[i].status == "Not Started")
    {
      notStarted.push(user.tasks[i].name);
    }
    else{
      inProgress.push(user.tasks[i].name);
    }
  }
  console.log(`Not Started:${printArray(notStarted)}`);
  console.log(`In Progress:${printArray(inProgress)}`);
  console.log(`Done:${printArray(done)}`);
};
function printArray(arr){
  let s = "";
  for(let i = 0; i < arr.length; i++){
    s +='\n' + "- " + arr[i];
  }
  return s;
}
listOfTask(userB);
//TEST CODE
function generateFakeTasks(n){
  let result = [];
  var statusArray = ["Done", "Not Started", "In Progress"];

  for(let i = 1; i <= n; i++){
    let num = Math.floor(Math.random() * statusArray.length);
    let newObject = {};
    newObject.name = `Task ${i}`;
    newObject.status = statusArray[num];
    result.push(newObject);
  }
  return result;
}

userA.tasks = generateFakeTasks(3);
listOfTask(userA);