let students =
    [
        {
            name: "Ha",
            gender: 'female',
            point: 8
        },
        {
            name: "Huy",
            gender: 'male',
            point: 9
        },
        {
            name: "Hung",
            gender: 'male',
            point: 7
        },
        {
            name: "Phuong",
            gender: 'female',
            point: 6
        },
        {
            name: "Huyen",
            gender: 'female',
            point: 10
        },
        {
            name: "Long",
            gender: 'male',
            point: 5
        },
        {
            name: "Luan",
            gender: 'male',
            point: 10
        },
        {
            name: "Linh",
            gender: 'female',
            point: 8
        }

    ];

let maleStudents = students.filter(student => student.gender === 'male');
let femaleStudents = students.filter(student => student.gender === 'female');
let sumPointsOfMale = maleStudents.reduce(
    (previousValue, currentValue) => previousValue + currentValue.point, 0
);
let sumPointsOfFemale = femaleStudents.reduce(
    (previousValue, currentValue) => previousValue + currentValue.point, 0
);

console.log(`Điểm trung bình của các học sinh nam: ${sumPointsOfMale / maleStudents.length}`);
console.log(`Điểm trung bình của các học sinh nữ: ${sumPointsOfFemale / femaleStudents.length}`);