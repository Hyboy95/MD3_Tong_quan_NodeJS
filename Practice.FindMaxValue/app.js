const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = -Infinity;
array.forEach(item => {
    if (item > max) {
        max = item
    }
})
console.log(`Giá trị lớn nhất của mảng là ${max}`)