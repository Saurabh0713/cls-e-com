let ob1 = new Object;
ob1.name = "hi my name"
ob1.place = "my obj1 place"
console.log(ob1)

let ob2 = Object.create(ob1)
ob2.name = "i am obj2"
ob2.no = 797979
console.log(ob2)
console.log(ob2.name)
console.log(ob2.place)

// setsssssssssssssssssssssssssssssss
let set1 = new Set()
set1.add("added in set1")
set1.add("added in set1 again")
set1.add({color:"green"})
console.log(set1)

set1.forEach(x=>console.log(x+111111))
console.log(set1)

let usingValues = set1.values()
console.log(usingValues)

// mappppppppppppppppppp
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.
let map1 = new Map()
map1.set("hi","am in map")
map1.set("hi 2","am in map 2")
console.log(map1)
console.log(map1.get("hi"))

// callbacks
function myDisplayer(value){
    console.log(value)
}

function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();

  function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
