const ReplaySubject = require('rxjs/Rx').ReplaySubject;
const Observable = require('rxjs/Rx').Observable;

const o = Observable.create((obs) => {
    let counter = 1;
    setInterval(() => {
        obs.next(counter++);
    }, 1000);
});

const rs = new ReplaySubject(100);
o.subscribe(rs);

setTimeout(() => rs.subscribe(
    (data) => console.log("observing: " + data)
), 5000);