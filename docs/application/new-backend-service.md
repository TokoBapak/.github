# On Creating New Backend Service

New service can be proposed through the [organization discussion](https://github.com/orgs/TokoBapak/discussions).
Please provide a good and strong reason on why a new service has to be created (even if it's just for fun).
The team will reject and hard delete the repository if a service was made without any discussion whatsoever.

## Requirements

A few requirements has to be met to create a service:

1. Use gRPC for presentation/transport layer. Submit your `.proto` file on the [proto repository](https://github.com/TokoBapak/proto).
2. No third party dependency (database, message bus, blob storage, etc.) that uses Java (and JVM derivatives), please. Go
   search for an alternative. Example: Typesense instead of Elasticsearch, Redpanda instead of Kafka, and ScyllaDB
   instead of Cassandra.
3. It's okay if your service have slow response time, or running a long process. But please, don't let it consume high CPU and RAM usage.
4. Provide a Dockerfile for deployment purpose.

That being said, we are allowing you to:

1. Use as much as bleeding edge tools, frameworks, and language
2. Not writing unit test (we know it, you're lazy when it comes to open source stuff)
3. Overkill design and architecture (because some of us have too little time)

Because we're allowing you that much, please remind yourself that you have a family at home, an anime to watch,
a neighbourhood stray cat/dog to feed, and a life to live. Don't waste too much of your time.

If you would like to amend the required conditions for creating new backend services, please do not immediately create a pull request for this repository.
Instead, please open an [Organization Discussion](https://github.com/orgs/TokoBapak/discussions/new?category=backend-team-posts) first about the changes.