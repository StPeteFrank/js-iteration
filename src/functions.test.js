/*



   Welcome to JS Interation

   Down below you will find instructions for code to write.

   As you write and save your code, you can look in your terminal where you
   ran `yarn test` to see if your code is working. The tests continuously check
   your work each time you save. If a test is failing either you have not yet
   defined that function or you have not defined it correctly.

   Once you finish a function and have it correct, the test will tell you if/how
   the next function is working.

















*/

/**
 * Define a function named `yelling` that takes an array of
 * strings as an argument and returns a new array with all
 * the words forced to uppercase
 *
 * Example:
 *
 * const yelling = (array) => {
 *    // your code here
 * }
 */
function yelling(a) {
  return a.map(b => {
    return b.toUpperCase()
  })
}

/**
 *
 * Define a function named `doubleTrouble` that takes an array of
 * numbers as an argument and returns a new array with all
 * the numbers multiplied by 2
 */
//
function doubleTrouble(a) {
  return a.map(b => {
    return b * 2
  })
}
// ...
/*
 * Define a function stringyIndexes() that takes an array of
 * strings as an argument and returns a new array with each string(the element)
 * suffixed with " is at index X" where X is the -index of the element-
 */
function stringyIndexes(a) {
  return a.map((b, i) => {
    return `${b} is at index ${i}`
  })
}
/*
 * Define a function onlyTheEvenSurvive that accepts an array of
 * numbers and returns only the elements that are even
 */
//*******/documentation open. which of these methods solve.
// ...
function onlyTheEvenSurvive(a) {
  return a.filter(b => {
    return b % 2 === 0
  })
}
/*
 * Define a function onlyTheEvenIndexedSurvive that accepts an array of
 * numbers and returns only the elements at indexes that are even
 */
// if (index % 2 === 0)
//Whatever comes SECOND IN THE ARGUMENT IS ALWAYS THE INDEX
// ...
function onlyTheEvenIndexedSurvive(a) {
  return a.filter((b, i) => {
    return i % 2 === 0
  })
}
/*
 * Define a function bestMoviesOfTheYear that accepts an array of
 * movie objects AND a year and returns the names of movies that are
 * from that year AND have a score more than 90
 *
 * A movie object looks like this:
 *
 * {
 *   name: "Get Out",
 *   year: "2017",
 *   score: 99
 * }
 * //filter and map
 */
function bestMoviesOfTheYear(a, year) {
  return a
    .filter(b => {
      return b.score >= 90 && b.year === year
    })
    .map(b => {
      return b.name
    })
}
// ...
/*
 * Define a function everyoneIsOdd that accepts an array of
 * numbers and returns true if every element of the array is
 * odd.
 */
//.every method
// ...
function everyoneIsOdd(a) {
  return a.every(b => {
    if (b % 2 === 1) {
      return true
    }
  })
}
/*
 * Define a function findTheNeedle that accepts an array of
 * strings and returns the one string that contains the word
 * `needle` inside
 */
//.find method
//.includes method
// ...
function findTheNeedle(a) {
  return a.find(b => {
    return b.includes(`needle`)
  })
}
/*
 * Define a function findTheNeedleIndex that accepts an array of
 * strings and returns the index of the string that contains
 *  the word `needle` inside
 */
//.findIndex method .When using findindex there is no need for second argument.
//.includes method
function findTheNeedleIndex(a) {
  return a.findIndex(b => {
    return b.includes(`needle`)
  })
}
// ...

/*
 * Define a function someoneToLove that accepts an array of
 * strings and returns true if at least one string is exactly
 * four characters long
 */
//.some method . Returns true if at least one element matched conditions.
// .every returns true if all meet requirement.
// ...
function someoneToLove(a) {
  return a.some(b => {
    if (b.length === 4) {
      return true
    }
  })
}
/*
 * Define a function mapYourself that accepts an array of
 * numbers and returns a new array where each number is doubled.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */
//for loop
//.push method  When for looping in JS use .push etc to return array with work done.
function mapYourself(a) {
  let b = []
  for (let i = 0; i < a.length; i++) {
    b.push(a[i] * 2)
  }
  return b
}
// or //

// const doubleTrouble = array => {
//   return array.map(double => {
//     return double * 2
//   })
// }
// ...

/*
 * Define a function filterYourself that accepts an
 * array of numbers and returns a new array containing
 * only the even numbers.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */
//for loop
//if statement
//.push method is adding to the end of its empty array in this case
function filterYourself(a) {
  let b = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      b.push(a[i])
    }
  }
  return b
}
// ...

/*
 * Define a function everyYourself that accepts an
 * array of numbers and returns true if every number
 * in the array is even.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */
//for loop
//if statement
//return true ~~reverse it!
// ...
function everyYourself(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 1) {
      return false
    }
  }
  return true
}
/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('yelling()', t => {
  t.deepEqual(yelling(['now', 'is', 'the', 'time']), [
    'NOW',
    'IS',
    'THE',
    'TIME'
  ])
})

test('doubleTrouble()', t => {
  t.deepEqual(doubleTrouble([2, 3, 9, 0, -5]), [4, 6, 18, 0, -10])
})

test('stringyIndexes', t => {
  t.deepEqual(stringyIndexes(['how', 'now', 'brown', 'cow']), [
    'how is at index 0',
    'now is at index 1',
    'brown is at index 2',
    'cow is at index 3'
  ])
})

test('onlyTheEvenSurvive', t => {
  t.deepEqual(onlyTheEvenSurvive([42, 50, 100, 5, -43, 17, 44]), [
    42,
    50,
    100,
    44
  ])
})

test('onlyTheEvenIndexedSurvive', t => {
  t.deepEqual(
    onlyTheEvenIndexedSurvive([
      31,
      67,
      64,
      96,
      14,
      24,
      43,
      51,
      48,
      80,
      58,
      43,
      64,
      84,
      98,
      99,
      69,
      93,
      5,
      32,
      29,
      4,
      28,
      18,
      86,
      22,
      20,
      74,
      35,
      27,
      85,
      79,
      65,
      32,
      56,
      94,
      93,
      20,
      29,
      22,
      72
    ]),
    [
      31,
      64,
      14,
      43,
      48,
      58,
      64,
      98,
      69,
      5,
      29,
      28,
      86,
      20,
      35,
      85,
      65,
      56,
      93,
      29,
      72
    ]
  )
})

test('bestMoviesOfTheYear', t => {
  const movies = [
    { name: 'The Grand Budapest Hotel', year: 2014, score: 91 },
    { name: 'Birdman', year: 2014, score: 91 },
    { name: 'Transformers: Age of Extinction', year: 2014, score: 18 },
    { name: 'Rage', year: 2014, score: 14 },
    { name: 'Get Out', year: 2017, score: 99 },
    { name: 'Justice League', year: 2017, score: 40 },
    { name: 'Ghost in the Shell', year: 2017, score: 46 },
    { name: 'The Big Sick', year: 2017, score: 98 }
  ]

  t.deepEqual(bestMoviesOfTheYear(movies, 2014), [
    'The Grand Budapest Hotel',
    'Birdman'
  ])

  t.deepEqual(bestMoviesOfTheYear(movies, 2017), ['Get Out', 'The Big Sick'])

  t.deepEqual(bestMoviesOfTheYear(movies, 2001), [])
})

test('everyoneIsOdd', t => {
  t.is(everyoneIsOdd([9, 15, 27, 101, 33]), true)
  t.is(everyoneIsOdd([9, 23, 3, 4, 77]), false)
})

test('findTheNeedle', t => {
  t.is(
    findTheNeedle(['one', 'time', 'there was a needle at', 'the market']),
    'there was a needle at'
  )
})

test('findTheNeedleIndex', t => {
  t.is(
    findTheNeedleIndex(['one', 'time', 'there was a needle at', 'the market']),
    2
  )
})

test('someoneToLove()', t => {
  t.is(someoneToLove(['how', 'now', 'brown', 'cow']), false)
  t.is(someoneToLove(['how', 'now', 'blue', 'cow']), true)
})

test('mapYourself()', t => {
  const originalMap = Array.prototype.map

  Array.prototype.map = () => []

  t.deepEqual(mapYourself([1, 2, 3]), [2, 4, 6])
  t.deepEqual(mapYourself([9, 0, 1]), [18, 0, 2])

  Array.prototype.map = originalMap
})

test('filterYourself()', t => {
  const original = Array.prototype.filter

  Array.prototype.filter = () => []

  t.deepEqual(filterYourself([8, 1, 2, 3]), [8, 2])

  Array.prototype.filter = original
})

test('everyYourself()', t => {
  const original = Array.prototype.every

  Array.prototype.every = () => undefined

  t.deepEqual(everyYourself([8, 1, 2, 3]), false)
  t.deepEqual(everyYourself([8, 10, 22, 38]), true)

  Array.prototype.every = original
})

/* eslint-enable */

// Static, Newly added 11.26

// function divisibleBy(numbers, divisor){
//   let answer = []

//   for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] % divisor === 0) {
//       answer.push(numbers[index])
//     }
//   }

//   return answer
// }

// ——0r and better——

// function divisibleBy(numbers, divisor){
//   return numbers.filter(number => {
//      // return true if we are keeping this number, false otherwise
//      const remainder = number % divisor
//      const keep = (remainder === 0)

//      return keep
//   })
// }

// ——
// JavaScript: 12/10

// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

// function remove(s){
//   //coding and coding....
//  return s.replace(/!/g, '') + "!"
// }

// C#

// public class Kata
// {
//   public static string Remove(string s)
//   {
//     return s.Replace("!", "") + "!";
//   }
// }
