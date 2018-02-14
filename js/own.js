function MyDataSource(arr) {
    this.data = arr;
    this.counter = 0;

    this.start = () => {
        this.tick = setInterval(() => {
            if (this.counter < this.data.length) {
                this.ondata(this.data[this.counter++]);
            } else {
                this.oncomplete();
                clearInterval(this.tick);
            }
        }, 1000);
    };

    this.stop = () => {
        this.oncomplete();
        clearInterval(this.tick);
    }
}

function MyGeneralObservable() {
    this.map = (func) => map(this, func);
    this.filter = (func) => filter(this, func);
}

function MyObservable(dataSource) {
    MyGeneralObservable.call(this);

    this.dataSource = dataSource;
    this.dataSource.ondata = (data) => this.observer.next(data);
    this.dataSource.onerror = (err) => this.observer.error(err);
    this.dataSource.oncomplete = (data) => this.observer.complete();

    this.subscribe = (observer) => {
        this.observer = observer;
        this.dataSource.start();
    };
}

function chain(observable, nextFunc) {
    const nextObservable = new MyGeneralObservable();
    nextObservable.subscribe = (observer) => {
        const nextObserver = {
            next: nextFunc(observer),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        };
        observable.subscribe(nextObserver);
    };
    return nextObservable;
}

function map(observable, mapFunc) {
    return chain(observable, (observer) => (data) => observer.next(mapFunc(data)))
}

function filter(observable, filterFunc) {
    return chain(observable, (observer) => (data) => {
        if (filterFunc(data)) {
            observer.next(data);
        }
    });
}

const data = [];
for (let i = 0; i < 100000; i++) {
    data[i] = i;
}

new MyObservable(new MyDataSource(data))
    .map(x => x * x)
    .filter(x => x.toString().endsWith("6"))
    .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => {}
    });