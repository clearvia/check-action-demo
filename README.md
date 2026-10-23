# check-action demo

A minimal service that runs [`clearvia/check-action`](https://github.com/clearvia/check-action)
on every push and uploads the result to Clearvia (staging) with GitHub OIDC. No
Clearvia secret is stored in this repository.

Run with `npm start`; the service listens on `PORT` (3000 by default).
