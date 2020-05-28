import { Component, OnInit } from '@angular/core';
import { Observable, of, Observer, interval, Subscription, timer, merge, Subject, from, BehaviorSubject, ReplaySubject } from 'rxjs';
import { take, map, filter, count, max } from 'rxjs/operators';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  tab: Array<any> = [];
  status = '';
  constructor() { }
  subscription: Subscription;
  ngOnInit() {
  //   const observable1: Observable<number> = timer(3000, 1000).pipe(
  //     take(5),
  //     map(elt => elt * 2),
  //     );
  //   const observable2: Observable<number> = timer(4000, 1000).pipe(
  //     take(10),
  //     filter(elt => elt % 2 !== 0),
  //   );
  //   const observable = merge(
  //     observable1,
  //     observable2
  //   );
  //   this.subscription = observable.subscribe(
  //     (value) => { this.tab.push(value); },
  //     (error) => { this.status = error; },
  //     () => { this.status = 'fini'; }
  //   );
  // }
  // ngOnDestroy() { this.subscription.unsubscribe(); }
  
    
    // const subject = new Subject<any>();
    // subject.subscribe({
    //   next: (value) => console.log(`A : ${value}`)
    // });
    // subject.subscribe({
    //   next: (value) => console.log(`B : ${value}`)
    // });
    // subject.subscribe({
    //   next: (value) => console.log(`C : ${value}`)
    // });
    // const observable: Observable<number> = from([1, 2, 3]);

    // observable.subscribe(subject);
    // subject.next("bonjour");
    // subject.next(8);
  //   const subject = new BehaviorSubject<any>(0);
  //   subject.subscribe({
  //     next: (value) => console.log(`A : ${value}`)
  //   });
  //   subject.next("ma valeur 1");
  //   subject.next(2);
  //   subject.subscribe({
  //     next: (value) => console.log(`B : ${value}`)
  //   });
  //   subject.next(3);
  // }
  const subject = new ReplaySubject(2);
  subject.subscribe({
    next: (value) => console.log(`A : ${value}`)
  });
  subject.next(1);
  subject.next(2);
  subject.subscribe({
    next: (value) => console.log(`B : ${value}`)
  });
  subject.next(3);
  subject.subscribe({
    next: (value) => console.log(`C : ${value}`)
  });
  subject.next(4);
}
  
  
}
