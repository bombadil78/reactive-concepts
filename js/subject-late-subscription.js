const Subject = require('rxjs/Rx').Subject;
const Observable = require('rxjs/Rx').Observable;

// Hot observable - late subscription

// The callback is called once the subject subscribes
const o = Observable.create((observer) => {
    let x = 0;
    setInterval(() => {
        observer.next(x++);
    }, 1000);
});
const s = new Subject();
o.subscribe(s);

const obs1 = { next: (data) => console.log("obs1: " + data) };
const obs2 = { next: (data) => console.log("obs2: " + data) };

s.subscribe(obs1);
setTimeout(() => s.subscribe(obs2), 5000);
