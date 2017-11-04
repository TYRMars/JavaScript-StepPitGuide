add(1,1);
add2(1,2);
add3(1,3);
function add1(i,j) {
  console.log(i+j);
}

var add2 = function (i,j) {
  console.log();
}

var token = getResponseHeader('x-auth-token');

xmlhttp=new XMLHttpRequest()
console.log(xmlhttp.getResponseHeader);

function functionName() {
  var arr2 = [];
  for (var i = 0; i < 2; i++) {
    arr2[i] = [];
    for (var j = 0; j < 3; i++) {
      arr2[i][j]=i+j;
    }
  }
  console.log(arr2);
}
functionName();
