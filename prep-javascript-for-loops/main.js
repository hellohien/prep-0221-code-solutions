var num = 0;
for (let i = 0; i < 10; i++) {
  console.log(num++);
}

var num2 = 0;
for (let j = 0; j < 10; j++) {
  console.log(num2);
  num2 += 2;
}

for (let h = 100; h >= 0; h--) {
  console.log('Time till explosion: ' + h);
}
