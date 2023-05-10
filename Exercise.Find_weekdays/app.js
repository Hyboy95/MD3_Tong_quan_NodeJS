let daysOfWeek = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
function getDayOfWeek(date) {
    let dateObj = new Date(Date.parse(date));
    return daysOfWeek[dateObj.getDay()]
}

let date = '5/10/2023';
console.log(`Ngày ${date} là ${getDayOfWeek(date)}.`)