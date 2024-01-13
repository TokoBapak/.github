# Saga Pattern

When services have been divided by certain design, which means that there will be a certain business flow that makes a
service talk to other service. Each service possibly will have their own dedicated database. Running the "happy path"
where we assume everything will run smoothly is easy. But, how do we know about the consistency of data being passed on?
How do we handle non-happy case, service failures, or cascading errors?

That is where saga pattern steps in.

**Saga is a sequence of _local transaction_.** Each local transaction updates the database and publishes a message or
event to trigger the next local transaction in the saga. If a local transaction fails because it violates a business
rule then the saga executes a series of compensating transactions that undo the changes that were made by the preceding
local transactions.

A _transaction_ is a single unit of logic or work, sometimes made up of multiple operations. Within a transaction, an
_event_ is a state change that occurs to an entity, and a command encapsulates all information needed to perform an
action or trigger a later event.

Transactions must be atomic, consistent, isolated, and durable (ACID). Transactions within a single service are ACID,
but cross-service data consistency requires a cross-service transaction management strategy.

* Atomicity is an indivisible and irreducible set of operations that must all occur or none occur.
* Consistency means the transaction brings the data only from one valid state to another valid state.
* Isolation guarantees that concurrent transactions produce the same data state that sequentially executed transactions
  would have produced.
* Durability ensures that committed transactions remain committed even in case of system failure or power outage.

There are two ways of coordination sagas:

* Choreography - each local transaction publishes domain events that trigger local transactions in other services
* Orchestration - an orchestrator (object) tells the participants what local transactions to execute

## Choreography-based saga

Choreography is a way to coordinate saga (again, a sequence of local transaction) where each participant (meaning each
service in the entire microservice) will exchange event without a centralized point of control. The service itself will
have to decide of what to do next with the event: where to pass it on, what additional attribute should be added, and so
on forth.

## Orchestration-based saga

Orchestration is a way to coordinate saga with a centralized point of control. The orchestrator (the central point of
control) will have to decide and handle the next step of the event.

## References

* https://microservices.io/patterns/data/saga.html
* https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga