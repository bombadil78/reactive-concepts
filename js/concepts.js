const MyDataSource = require('./api').MyDataSource;
const MyObservable = require('./api').MyObservable;

const data = [];
for (let i = 0; i < 100000; i++) {
    data[i] = i;
}

const observable = new MyObservable(new MyDataSource(data))
    .map(x => x * x)
    .filter(x => x.toString().endsWith("6"));

console.log(observable);

const subscription = observable.subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => {}
    });
console.log(subscription);

setTimeout(() => subscription.unsubscribe(), 1000);