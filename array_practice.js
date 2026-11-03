//Create an array named numbers containing five different numbers.
let numbers=[10,60,80,70,20,30]

//print all elements in array
console.log(numbers)

//print names 
let names=["ruhi","riya","jeena"]
console.log(names)

//Print the element stored at index 2 of the numbers array
console.log(numbers[2])

// Print the total number of elements in the numbers array.
console.log(numbers.length)

//Print All Array Elements Using a For Loop
for(i=0;i<numbers.length;i++)
{
    console.log(numbers[i])
}

//Create an array named ages containing five different age values.
let ages=[10,90,60,80,50,40,20]

//Add Elements to the End Using push()
ages.push(100,200);
console.log(ages)

//Add Elements to the Beginning Using unshift()
ages.unshift(70,90)
console.log(ages)

//Remove the Last Element Using pop()
ages.pop();
console.log(ages);

//Remove the First Element Using shift()
ages.shift();
console.log(ages);

//Remove Elements Using splice()
//Remove four elements starting from index 2 of the ages array.
ages.splice(2,4);
console.log(ages);

//Create an array named scores containing seven different numbers.
let scores = [10, 30, 60, 100, 20, 70, 5];

//Sort Array Elements in ascending Order
scores.sort((a,b)=>a-b);
console.log(scores);

//Sort Array Elements in descending Order
scores.sort((a,b)=>b-a);
console.log(scores);

