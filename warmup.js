var hobbies = ['clone','photography', 'biking', 'hiking'];
hobbies.push('writing', 'painting', 'running', 'filmmaking', 'sculpting', 'calligraphy');
console.log(hobbies, 'pushed six items');
hobbies.shift();
console.log(hobbies, 'used shift');
hobbies.pop();
console.log(hobbies, 'pop');
hobbies.splice(0,1);
console.log(hobbies, 'used splice(0,1)');

var applePie = {};
