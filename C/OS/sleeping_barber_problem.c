// The analogy is based upon a hypothetical barber shop with one barber. The barber has one barber's chair in a cutting room and a waiting room containing a number of chairs in it.
// When the barber finishes cutting a customer's hair, he dismisses the customer and goes to the waiting room to see if there are others waiting. If there are, he brings one of
// them back to the chair and cuts their hair. If there are none, he returns to the chair and sleeps in it.
//
// Each customer, when they arrive, looks to see what the barber is doing. If the barber is sleeping, the customer wakes him up and sits in the cutting room chair.
// If the barber is cutting hair, the customer stays in the waiting room. If there is a free chair in the waiting room, the customer sits in it and waits their turn.
// If there is no free chair, the customer leaves.
//
// Based on a naïve analysis, the above decisions should ensure that the shop functions correctly, with the barber cutting the hair of anyone who arrives until there are
// no more customers, and then sleeping until the next customer arrives. In practice, there are a number of problems that can occur that are illustrative of general
// scheduling problems.
//
// The problems are all related to the fact that the actions by both the barber and the customer (checking the waiting room, entering the shop, taking a waiting room chair,
// etc.) all take an unknown amount of time. For example, a customer may arrive and observe that the barber is cutting hair, so he goes to the waiting room. While they're
// on their way, the barber finishes their current haircut and goes to check the waiting room. Since there is no one there (the customer not having arrived yet), he goes
// back to their chair and sleeps. The barber is now waiting for a customer, but the customer is waiting for the barber. In another example, two customers may arrive at
// the same time when there happens to be a single seat in the waiting room. They observe that the barber is cutting hair, go to the waiting room, and both attempt to
// occupy the single chair.
//
// The Sleeping Barber Problem is often attributed to Edsger Dijkstra (1965), one of the pioneers in computer science.
//
// Many possible solutions are available. The key element of each is a mutex, which ensures that only one of the participants can change state at once. The barber
// must acquire/enforce this mutual exclusion (of room status) before checking for customers and release it when they begin either to sleep or cut hair. A customer
// must acquire it before entering the shop and release it once they are sitting in either a waiting room chair or the barber chair, and also when they leave the shop
// because no seats were available. This eliminates both of the problems mentioned in the previous section. A number of semaphores is also required to indicate the state
// of the system. For example, one might store the number of people in the waiting room.

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>  //Header file for sleep(). man 3 sleep for details.
#include <pthread.h>

int num_seats = 10;
semaphor
