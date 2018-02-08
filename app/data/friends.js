// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friends = [
{
  name:"GZ",
  photo:"https://s17.postimg.org/e1m8g3d67/GZ1.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
  name:"Squidward",
  photo:"https://s17.postimg.org/3str9z71b/squidw.jpg",
  scores:[
      3,
      2,
      4,
      4,
      1,
      5,
      2,
      3,
      4,
      1
    ]
  },
  {
  name:"Mr. Burns",
  photo:"https://s17.postimg.org/jeb2tzvv3/mrb.jpg",
  scores:[
      1,
      2,
      3,
      4,
      5,
      5,
      4,
      3,
      2,
      1
    ]
  },
   {
  name:"Bub",
  photo:"https://s17.postimg.org/4v3xsri7j/bub.jpg",
  scores:[
      5,
      2,
      3,
      5,
      1,
      2,
      4,
      2,
      3,
      1
    ]
  }
]; 
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;