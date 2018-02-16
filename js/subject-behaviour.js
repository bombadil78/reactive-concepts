const BehaviorSubject = require('rxjs/Rx').BehaviorSubject;
const Observable = require('rxjs/Rx').Observable;

// Notion of a current value exists and is sent to observer on subscription

const obs = Observable.create((observer) => {
    let counter = 1;
    setInterval(() => observer.next(counter++), 5000);
});

setInterval(() => console.log("----------"), 1000);

const subj = new BehaviorSubject(0);

console.log("subscribe #1...");
subj.subscribe((data) => console.log("#1: " + data));
setTimeout(() => {
    console.log("subscribe #2...");
    subj.subscribe((data) => console.log("#2: " + data));
}, 7500);
setTimeout(() => {
    console.log("subscribe #3...");
    subj.subscribe((data) => console.log("#3: " + data));
}, 17500);

obs.subscribe(subj);