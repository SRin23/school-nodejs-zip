function Person(name, age, birth){
    this.name = name;
    this.age = age;
    //this.walk = walk;  
    this.birth = birth;
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다.');
}

Person.prototype.eat = function(food){
    console.log(this.name + '는 ' + food + '를 먹습니다.');
}

Person.prototype.selfIntro = function(){
    console.log('이름 : ' + this.name);
    console.log('나이 : ' + this.age);
    console.log('생일 : ' + this.birth);
}

var person1 = new Person('소녀시대', 20, '0315');
var person2 = new Person('걸스데이', 22, '1209');
var person3 = new Person('티아라', 16, '0614')

//console.log(person1.name + "객체의 walk(10)을 호출합니다.");
person1.selfIntro();
person1.walk(10);
person1.eat('사과');