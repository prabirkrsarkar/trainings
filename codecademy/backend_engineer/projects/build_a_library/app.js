class Media {
    // This argument will set the one property that is in all three subclasses of Media, and does not have a default value.
    // Always initialize an array to an empty array so that you don't get a type error when using array methods like push() etc. 
    constructor(title) {
        this._title = title;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
    }
    getAverageRating() {
        let ratingsSum = this._ratings.reduce((accumulator, currentvalue) => accumulator + currentvalue);
        return (ratingsSum / (this._ratings.length));
    }
    addRating(rating) {
        this._ratings.push(rating);
    }
    set isCheckedOut(checkoutstatus) {
        if (typeof checkoutstatus === 'boolean') {
            this._isCheckedOut = checkoutstatus;
        } else {
            console.log('You must assign a boolean to isCheckedOut');
        }
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movies extends Media {
    constructor(director, title, runtime) {
        super(title);
        this._director = director;
        this._runTime = runtime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movies('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());