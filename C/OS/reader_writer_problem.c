// Suppose we have a shared memory area (critical section). It is possible to protect the shared data behind a mutual exclusion mutex,
// in which case no two threads can access the data at the same time. However, this solution is sub-optimal, because it is possible that a reader R1 might have the lock,
// and then another reader R2 requests access. It would be foolish for R2 to wait until R1 was done before starting its own read operation; instead, R2 should be allowed to
// read the resource alongside R1 because reads don't modify data, so concurrent reads are safe. This is the motivation for the first readers-writers problem, in which the
// constraint is added that no reader shall be kept waiting if the share is currently opened for reading.
//
//
// The first solution is suboptimal, because it is possible that a reader R1 might have the lock, a writer W be waiting for the lock, and then a reader R2 requests access.
// It would be unfair for R2 to jump in immediately, ahead of W; if that happened often enough, W would starve. Instead, W should start as soon as possible. This is the
// motivation for the second readers-writers problem, in which the constraint is added that no writer, once added to the queue, shall be kept waiting longer than absolutely
// necessary.
//
// In fact, the solutions implied by both problem statements can result in starvation — the first one may starve writers in the queue, and the second one may starve
// readers. Therefore, the third readers-writers problem is sometimes proposed, which adds the constraint that no thread shall be allowed to starve; that is, the operation
// of obtaining a lock on the shared data will always terminate in a bounded amount of time.


semaphore mutex = 1;                 // Controls access to the reader count
semaphore db = 1;                    // Controls access to the database
int reader_count;                    // The number of reading processes accessing the data

Reader()
{
  while (TRUE) {                     // loop forever
     down(&mutex);                          // gain access to reader_count
     reader_count = reader_count + 1;       // increment the reader_count
     if (reader_count == 1)
         down(&db);                         // if this is the first process to read the database,
                                            // a down on db is executed to prevent access to the
                                            // database by a writing process
     up(&mutex);                            // allow other processes to access reader_count
     read_db();                             // read the database
     down(&mutex);                          // gain access to reader_count
     reader_count = reader_count - 1;       // decrement reader_count
     if (reader_count == 0)
         up(&db);                           // if there are no more processes reading from the
                                            // database, allow writing process to access the data
     up(&mutex);                            // allow other processes to access reader_countuse_data();
                                            // use the data read from the database (non-critical)
}

Writer()
{
  while (TRUE) {                     // loop forever
     create_data();                         // create data to enter into database (non-critical)
     down(&db);                             // gain access to the database
     write_db();                            // write information to the database
     up(&db);                               // release exclusive access to the database
}
