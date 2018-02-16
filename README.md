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
* Producer
  * The data source
  * Emits data by calling the Observer's next(), error() or complete() methods      
* Cold Observable
  * The Producer is closed over the Observable
  * Creating a new Observable results in the creation of a new Producer
  * Unicast between Producer and Observable ...
  * ... and uni- or multicast between Observable and Observers
* Hot Observable
  * The Producer lives outside of the Observable
  * Multicast between Producer and Observable ...
  * ... and uni- or multicast between Observable and Observers
* Subject
  * A subject is both an Observable and an Observer
  * A subject can be used to model multicasts from Producer to Observable
    * Create a new subject that subscribes to the cold observable, hence listing to the Producer
    * Create a new hot observable that subscribes its observer to the subject on subscription
    * Keep track of the number of subscriptions to the hot observable and unsubscribe the subject from the cold observable if the hot observable has no more subscriptions
    * Higher-level abstractions like RxJS.Subject offer automatic subscribe/unsubscribe to the cold observable
  * Examples of subjects:
    * BehaviorSubject: Send the latest (= current) value to the observer at subscription time
    * ReplaySubject: Sends up to n latest messages to the observer at subscription time
    * AsyncSubject: Only sends last value (= current) when observable completes, other messages are never sent
* Operators: Allows operations on observable using functional programming style. The operators can be categorized:
  * Create: create(), from(), of(), interval(), ... 
  * Transform: map(), buffer(), scan(), ...
  * Filter: filter(), distinct(), skip(), take(), ...
  * Combine: forkJoin(), race(), zip(), ...
  * Multicast
  * Error 
  * Utility
