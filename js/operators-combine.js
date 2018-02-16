const Observable = require('rxjs/Rx').Observable;

const waitAll = Observable.forkJoin(
    Observable.interval(1000).map(x => x + 1).take(3),
    Observable.interval(500).map(x => x + 1).take(4)
).subscribe(data => console.log(data));

const firstWins = Observable.race(
    Observable.interval(1000).map(x => x + 1).take(3),
    Observable.interval(500).map(x => x + 1).take(4)
).subscribe(data => console.log(data));

const firstWins = Observable.race(
    Observable.timer(5000).map(x => 1),
    Observable.timer(5001).map(x => 2)
).subscribe(x => console.log(x));

const zippedAsync = Observable.zip(
    Observable.interval(2000).map((x, i) => "A" + i).take(5),
    Observable.interval(1).map((x, i) => "B" + i).take(5)
).subscribe(x => console.log(x));