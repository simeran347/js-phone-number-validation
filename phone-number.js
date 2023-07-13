export const clean = (inp) =>  {
  //first repace will keep only the digits
  let res = inp.replace(/[\. ()\-+]/g, "");

  if(res.length ==11){
    res = res.replace(/^1/, "")
  }

  let isChar = /[a-zA-Z]/g.test(res);
  let isSpecailChar = /[ `!@#$%^&*_\=\[\]{};':"\\|,<>\/?~]/.test(res);
  if (isChar) {
    throw "Letters not permitted";
  } else if (isSpecailChar) {
    throw "Punctuations not permitted";
  } else if (res.length < 10) {
    throw "Incorrect number of digits";
  } else if (res.length == 11) {
    throw "11 digits must start with 1";
  } else if (res.length > 11) {
    throw "More than 11 digits";
  } else if (res[0] == 0) {
    throw "Area code cannot start with zero";
  } else if (res[0] == 1) {
    throw "Area code cannot start with one";
  } else if (res[3] == 0) {
    throw "Exchange code cannot start with zero";
  } else if (res[3] == 1) {
    throw "Exchange code cannot start with one";
  } else {
    return res;
  }
};