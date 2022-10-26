//Pattern 1
//input
// #
// ##
// ###
// ####
// #####
// ######

let n = 6;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    string += "#"
  }
  string += "\n";
}

console.log(string);



//Pattern 2
//input
//     *
//    * *
//   *   *
//  *     *
// *********

// let n = 5;
// let m = 4; //mean
// let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 9; j++) {
    if (j == m + i || j == m - i || i == m) {
      string += "*"
    }
    else {
      string += " ";
    }
  }
  string += "\n"
}

console.log(string);


//Pattern 3
// input
// 1
// 1 4
// 1 8 27

let n = 4;
let string = "";
let count = 1;
for (let i = 1 ; i <= n ; i ++) {
    for (let j = 1 ; j <= i  ; j++ ) {
        string += (j**count) + " "; 
    }
    string += "\n";
    count++;
}
console.log(string);



// Pattern 4
// input

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// **      **
// ***    ***
// ****  ****
// **********

let n = 9;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n + 1; j++) {
    if (i == 2 && j > 4 && j < 7 ||
      i == 3 && j > 3 && j < 8 ||
      i == 4 && j > 2 && j < n ||
      i == 5 && j > 1 && j < n + 1 ||
      i == 6 && j > 2 && j < n ||
      i == 7 && j > 3 && j < 8 ||
      i == 8 && j > 4 && j < 7) {
      string += " "
    }
    else {
      string += "*"
    }
  }
  string += "\n";
}

console.log(string);




// Pattern 5
//input

// *        * 
// **      **
// ***    ***
// ****  ****
// **********
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let n = 5;
let col = 10;
let string = "";
let rm = 5, start = 2 ;
end = 2 * rm;
for ( let i = 1; i <= n ; i++){
  for ( let j = 1 ; j <= col ; j++){
    if (rm > 0 && j >= start && j < end){
      string += " ";
      }else {
        string += "*";
      }
    }
    string += "\n";
    start++;
    end--;
}


n = 5;
col = 10;
start = 5; 
for ( let i = 0; i < n ; i++){
  for ( let j = 0 ; j < col ; j++){
    rm = 2 * i ; end = start + rm ; 
    if (rm > 0 && j >= start && j < end){
      string += " ";
      }else {
        string += "*";
      }
    }
    string += "\n";
    start--;
    end--;
}

console.log(string);



// Pattern 6
//input
//    *
//   *A*
//  *A*A*
// *A*A*A*

let n = 4;
let mean = 3;
let counter;
let string = "";
for (let i = 0; i < n; i++) {
  counter = 0;
  for (let j = 0; j < (n * 2 - 1); j++) {
    if (j <= mean + i && j >= mean - i || i == mean) {
      if (counter == 0) {
        string += "*";
        counter++;
      } else {
        string += "A";
        counter--;
      }
    }
    else {
      string += " ";
    }
  }
  string += "\n"
}

console.log(string);




//Pattern 7 
//input

// 1
// 232
// 34543
// 4567654
// 567898765

//output

let n = 5;
let col = 9;
let string = "";
for ( let i = 1 ; i <= n ; i++ ){
    let num = i;
    for ( let j = 1 ; j <= col ; j++){
        if (j  <= 2 * i -1){
            string += num;
        }
        else {
            string += " ";
        }
        if (j >= i ){
            num--;
        }else{
            num++;
        }
    }
    string += "\n";
}
console.log(string)
