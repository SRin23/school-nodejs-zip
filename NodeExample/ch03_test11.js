var Users = [{name : '방탄소년단', age: 20}, {name : '걸스데이', age: 22}];
console.log('push() 호출 전 배열요소의 수 : %d', Users.length);

Users.push({name:'티아라', age:23});
console.log('push() 호출 후 배열요소의 수 : %d', Users.length);

Users.pop();
console.log('pop() 호출 후 배열요소의 수 : %d', Users.length);