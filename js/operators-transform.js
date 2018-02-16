const Observable = require('rxjs/Rx').Observable;

const obs1 = Observable.timer(3000).repeat(3);
const interval = Observable.create((obs) => {
    let counter = 0;
    setInterval(() => {
        obs.next(counter++);
    }, 1000);
});
// interval.buffer(obs1).take(3).subscribe(x => console.log(x));
// interval.bufferTime(3000).take(3).subscribe(x => console.log(x));

const obs2 = Observable.timer(1, 1000).repeat(10);
obs2.scan((acc, cur) => acc + cur, 0).subscribe(x => console.log(x));



