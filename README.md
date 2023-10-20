# AfricanDoto.v2
BackEnd for AfricanDoto ONG.


### Members Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |
