# Contribution Guide

For Bahasa Indonesia, see [CONTRIBUTING_ID.md](./CONTRIBUTING_ID.md)

Hello! We assume you're as interested as us for creating this highly hype-driven development
of fake e-Commerce website that is most likely be deployed once everything's ready.
To make things easier, we have a few guideline that you can use as a baseline for some
standards (be it code, commit, documentation, or communication) between everyone that are
working on the project.

## Communicating with the team

You are open to join the TokoBapak Github organization as long as you are willing to contribute
and maintain the development process of TokoBapak. Bear in mind that we do not like people
who joined to our organization just to show off their organization list on their profile while
contributing nothing to the organization itself.

We value asynchronous communication over synchronous ones. That means we are communicating more
in a written-form that doesn't require immediate reply like you would do on voice calls.
We utilize Github teams discussion, repository issues, and Telegram group for that.

By joining the organization, you will be assigned to a team of your choice of backend, frontend,
and infrastructure team. Each team have a team discussion that discuss stuff related to their role.
For more about Github's team discussion, you can follow
[this link](https://docs.github.com/en/organizations/collaborating-with-your-team/about-team-discussions).

To join our Telegram group, you can follow [this link](https://t.me/teknologi_umum_v2).
You can ask questions there and hope for faster response.

Synchronous form of communication might be used for helping each other on doing some coding
issues or teaching some software engineering concepts.

## Working on tasks

If you want to work on a task that is already specified on the repository's issue, you can
give a comment that states you want to work on that task. Later on, the TokoBapak team will
(and should) put you as the assignee for the issue. If you are a member of TokoBapak team,
you should put yourself as the assignee directly.

If it took a few weeks and you realized that you got something else going on and can't work
on that task, please remove yourself from the assignee. We do this to not block those who have
time to work on the issue and wants to work on it immediately.

If the thing that you want to work on is not on the issue list yet, please create a new one.

Once the work is completed, you should submit a pull request.

## Running the local environment

Detailed information regarding running the application should be provided on each repository.
It should be on the `README` file.

We are encouraging you to not run the application locally during development process. Rather,
you should create unit test and integration test to make sure and prove to others that your
code works. Doing [Test Driven Development](https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/)
is not a must, but at least having test cases on your code will do.

## Opening a pull request

Our repositories should include some [CODEOWNERS](https://help.github.com/articles/about-codeowners/)
file. The request reviews should be assigned automatically. There is no need to mention the whole team
or some people from TokoBapak to review your code, just be patient.

Please create a pull request that ONLY covers 1 issue (or task). DO NOT create pull request that
covers more than 1 issues. It will make the review process longer.

Don't aim for higher line of codes, instead aim for higher quality.

Multiple people can work on a single pull request together. They should communicate and sort things
out themself (if that is between them).
