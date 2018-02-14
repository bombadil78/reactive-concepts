# reactive-concepts

## Concepts

* Observable
  * Links an observer to a data source
  * Starts & stops the Observer's consumption of values emitted by the data source
  * Does in general NOT know about its Observers
  * Possibly transforms the emitted values using an Operator chain
  * Technically:
    * An object that offers a subscribe function which takes an Observer
    * ... and returns a function used to unsubscribe()
* Observer
  * Knows what to do with values
  * Subscribe to an Observable
  * Technically:
    * An object with three following functions:
      * next
      * error 
      * complete
* Subject
  * A subject is both an Observable and an Observer
  * A subject is a subtype of an Observable that holds a list of its Observers
  * Does know about its Observers
  * Can be used to multi-cast 

* Hot vs. Cold Observable
* Subject

## RxJS API

## 

## Creation
```javascript
Observable.create(function subscribe(observer) {
    // call observer here...
    // ...

    // return unsubscribe()
    return () => {
        // ...
    };
});
```
An observable is created using create() which takes a subscribe function as argument. This function will be called once a clients subscribes to the observable, **individually for every client**.

An observable does not maintain a list of observers, it is just a call to *subscribe()*.
