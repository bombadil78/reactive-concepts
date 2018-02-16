const Observable = require('rxjs/Rx').Observable;

const obs1 = Observable.create((obs) => {
    obs.next("hello world");
    obs.complete();
});
const obs2 = Observable.of(1, 2, 3);
const obs3 = Observable.interval(1000);
const obs4 = Observable.from([99, 98 , 97]);
const obs5 = Observable.range(1000, 900);

obs1.subscribe(data => console.log(data));
obs2.subscribe(data => console.log(data));
obs3.take(1).repeat(2).subscribe(data => console.log(data));
obs4.subscribe(data => console.log(data));
obs5.take(3).subscribe(data => console.log(data));
