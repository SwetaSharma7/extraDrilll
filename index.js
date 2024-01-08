let got = require('./data-1');

// 1. Write a function called `countAllPeople` which counts the total number of
//  people in `got` variable defined in `data.js` file.

function countAllPeople(got) {
    try {
      let count = 0;
  
      got.houses.forEach(function (house) {
        count += house.people.length;
      });
  
      return count;
    } catch (error) {
      console.log("error occurred");
      return null;
    }
  }
  
  let totalPeople = countAllPeople(got);
  
  if (totalPeople !== null) {
    console.log(totalPeople);
  } else {
    console.log("got an error while processing data.");
  }

//   2. Write a function called `peopleByHouses` which counts the total number of people
//  in different houses in the `got` variable defined in `data.js` file.

function peopleByHouses(got) {
    let count = {};
    try{
        got.houses.forEach(function(house){
            let houseName = house.name;

            if(!count[houseName]){
                count[houseName] = house.people.length;
            }
        });
    }catch(error){
        console.log('error occured');
        return null;
    }
    return count;
}

let count = peopleByHouses(got);
if(count != null){
    console.log(count);
}else{
    console.log('got an error while processing the data');
}

// 3.Write a function called `everyone` which returns a array of names of all the people 
// in `got` variable.

function everyOne(got) {
    try {
      let arr = got.houses.map((element) => {
        return element.people;
      });
      return arr;
    } catch (error) {
      console.log("error occured");
      return null;
    }
  }
  
  let allPeople = everyOne(got);
  if (allPeople !== null) {
    console.log(allPeople);
  } else {
    console.log("got an error while processing data.");
  }
  

//   4. Write a function called `nameWithS` which returns a array of names of all the people in 
// `got` variable whose name includes `s` or `S`. */


function nameWithS(got) {
    try {
      let namesWithS = [];
  
      // Check if 'got' and 'got.houses' are defined
      console.log('got:', got);
      if (got && got.houses && Array.isArray(got.houses)) {
        got.houses.forEach(function (house) {
          // Check if 'house.people' is defined and is an array
          console.log('house:', house);
          if (house && house.people && Array.isArray(house.people)) {
            house.people.forEach(function (person) {
              // Check if 'person.name' is defined
              console.log('person:', person);
              if (person && person.name) {
                // Check if the person's name includes 's' or 'S'
                console.log('Checking name:', person.name);
                if (person.name.toLowerCase().includes('s')) {
                  namesWithS.push(person.name);
                }
              }
            });
          }
        });
  
        return namesWithS;
      } else {
        throw new Error("Invalid data structure");
      }
    } catch (error) {
      console.error("Error occurred:");
      return null;
    }
  }
  
  let ans = nameWithS(got);
  
  if (ans !== null) {
    console.log(ans);
  } else {
    console.log('Encountered an error while solving the problem');
  }
  
  
  

//   Write a function called `nameWithA` which returns a array of names of all the people in 
//   `got` variable whose name includes `a` or `A`.
  
function nameWithA(got) {
    try {
      let namesWithA = [];
  
      // Check if 'got' and 'got.houses' are defined
      if (got && got.houses && Array.isArray(got.houses)) {
        got.houses.forEach(function (house) {
          // Check if 'house.people' is defined and is an array
          if (house && house.people && Array.isArray(house.people)) {
            house.people.forEach(function (person) {
              // Check if 'person.name' is defined
              if (person && person.name) {
                // Check if the person's name includes 'a' or 'A'
                if (person.name.toLowerCase().includes('a')) {
                  namesWithA.push(person.name);
                }
              }
            });
          }
        });
  
        return namesWithA;
      } else {
        throw new Error("Invalid data structure");
      }
    } catch (error) {
      console.error("Error occurred:");
      return null;
    } 
}

    let  nameA = nameWithA();

    if(nameA !== null){
        console.log(nameA);
    }else{
        console.log('got an error during solving this problem');
    }

    // 6. Write a function called `surnameWithS` which returns a array of names of all the people 
    // in `got` variable whoes surname is starting with `S`(capital s).
    

    function surnameWithS(got) {
        try {
          let namesWithS = [];
      
          // Check if 'got' and 'got.houses' are defined
          if (got && got.houses && Array.isArray(got.houses)) {
            // Iterate over each house
            got.houses.forEach(function (house) {
              // Check if 'house.people' is defined and is an array
              if (house && house.people && Array.isArray(house.people)) {
                // Iterate over each person in the house
                house.people.forEach(function (person) {
                  // Check if 'person.name' is defined
                  if (person && person.name) {
                    // Split the name into parts using space as the separator
                    let nameParts = person.name.split(' ');
                    
                    // Check if the surname starts with 'S'
                    if (nameParts.length > 1 && nameParts[1].startsWith('S')) {
                      // If the condition is met, add the person's name to the array
                      namesWithS.push(person.name);
                    }
                  }
                });
              }
            });
      
            // Return the array of names with surnames starting with 'S'
            return namesWithS;
          } else {
            // Throw an error if the data structure is invalid
            throw new Error("Invalid data structure");
          }
        } catch (error) {
          // Catch and log any errors that occur during execution
          console.error("Error occurred:");
          return null; // Return null in case of an error
        }
      }
      
      let surnameS = surnameWithS(got);
      
      if (surnameS !== null) {
        console.log(surnameS);
      } else {
        console.log('Encountered an error while solving the problem');
      }

// 7. Write a function called `surnameWithA` which returns a array of names of all the 
// people in `got` variable whoes surname is starting with `A`(capital a).


function surnameWithA(got) {
  try {
    let arrayOfPeople = got.houses
      .map((house) => {
        return house.people;
      })
      .flat();

    let arrayOfSurnameA = arrayOfPeople.filter((person) => {
      return person.name.split(" ")[1].charAt(0).includes("A");
    });

    let res = arrayOfSurnameA.map((person) => {
      return person.name;
    });

    return res;
  } catch (error) {
    console.log("error occured", error.message);
    return null;
  }
}

let surnameStratingWithA = surnameWithA(got);
if (surnameStratingWithA !== null) {
  console.log(surnameStratingWithA);
} else {
  console.log("Encountered an error while processing data.");
}

/*8.Write a function called `peopleNameOfAllHouses` which returns an object with the 
key of the name of house and value will be all the people in the house in an array. */
function peopleNameOfAllHouses(got) {
  let obj = {};

  try {
    got.houses.forEach((element) => {
      if (
        element &&
        element.name &&
        element.people &&
        Array.isArray(element.people)
      ) {
        obj[element.name] = element.people.map((person) => person.name);
      } else {
        throw new Error("Invalid data structure for a house.");
      }
    });
  } catch (error) {
    console.log("Error occured", error.message);
    return null;
  }
  return obj;
}

let objectOfNames = peopleNameOfAllHouses(got);
if (objectOfNames !== null) {
  console.log(objectOfNames);
} else {
  console.log("Encountered an error while processing data.");
}


      
  



  