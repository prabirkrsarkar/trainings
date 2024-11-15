
let isValidBirthDate;

// sunSign as Array of Objects
const sunSignTable = [
    { SignName: "Aries", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
    { SignName: "Taurus", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
    { SignName: "Gemini", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
    { SignName: "Cancer", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
    { SignName: "Leo", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { SignName: "Virgo", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { SignName: "Libra", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
    { SignName: "Scorpio", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
    { SignName: "Sagittarius", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
    { SignName: "Capricorn", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
    { SignName: "Aquarius", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
    { SignName: "Pisces", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 }
    ];
  
// Function to get the sun sign based on the birth date
function getSunSign(birthMonth, birthDay) {
    if(birthMonth < 1 || birthMonth > 12 || birthDay < 1 || birthDay > 31 || isNaN(birthMonth) || isNaN(birthDay)) {
        isValidBirthDate = false;
        return "Invalid birth date";
    } else {
        isValidBirthDate = true;
        console.log("Your birth date is " + String(birthMonth).padStart(2, 0) + "-" + String(birthDay).padStart(2, 0));
        for (let signObj of sunSignTable) {
            if (isDateInRange(birthMonth, birthDay, signObj.startMonth, signObj.startDay, signObj.endMonth, signObj.endDay)) {
                console.log("Your Sign is : " + signObj.SignName);
		break;
            }
        }
    }
}

function isDateInRange(month, day, startMonth, startDay, endMonth, endDay) {
    // Convert the input date and range dates to "MM-DD" format
    const userBirthDate = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const startDate = `${String(startMonth).padStart(2, '0')}-${String(startDay).padStart(2, '0')}`;
    const endDate = `${String(endMonth).padStart(2, '0')}-${String(endDay).padStart(2, '0')}`;

    if (startDate <= endDate) {
        // Range is within a single year (e.g., March 1 to July 31)
        return userBirthDate >= startDate && userBirthDate <= endDate;
    } else {
        // Range wraps around the end of the year (e.g., December 15 to January 15)
        return userBirthDate >= startDate || userBirthDate <= endDate;
    }
}

const messageTableOne = ["You are having good luck", 
                        "Your day will be full of surprises", 
                        "You will meet someone special today", 
                        "You will get a promotion today", 
                        "You will find a new hobby today", 
                        "You will have a great day today",
                        "Your day will be full of joy", 
                        "You will have a peaceful day", 
                        "You will have a lucky day", 
                        "You will have a day full of love", 
                        "You will have a day full of laughter", 
                        "You will have a day full of happiness", 
]

const messageTableTwo = ["You should not trust anyone", 
                         "You should be careful with your decisions", 
                         "You should be careful with your health", 
                         "You should be careful with your money", 
                         "You should be careful with your relationships", 
                         "You should be careful with your family",
                         "You should be careful with your friends",
                         "You should be careful with your partner",
                         "You should be careful with your colleagues",
                         "You should be careful with your neighbors",
                         "You should be careful with your pets"
                        ]

// Function to generate a random message.
function generateRandomMessage() {
    if(isValidBirthDate) {
        let messageOne = messageTableOne[Math.floor(Math.random() * messageTableOne.length)];
        let messageTwo = messageTableTwo[Math.floor(Math.random() * messageTableTwo.length)];
        return `${messageOne}. ${messageTwo}.`;
  } else {
    return "Please enter a valid birth date";
  }
}

console.log(getSunSign(8, 31) + ". " + generateRandomMessage());

// Example usage:
/*
console.log(isDateInRange(12, 20, 12, 15, 1, 15)); // true (December 20 is in range Dec 15 - Jan 15)
console.log(isDateInRange(12, 10, 12, 15, 1, 15)); 
console.log(isDateInRange(2, 10, 12, 15, 1, 15));  // false (February 10 is in range Dec 15 - Jan 15)
console.log(isDateInRange(8, 1, 5, 1, 10, 31));    // true (August 1 is in range May 1 - Oct 31)
console.log(isDateInRange(8, 22, 8, 23, 8, 30)); 
console.log(isDateInRange(8, 22, 8, 15, 8, 30));
*/
