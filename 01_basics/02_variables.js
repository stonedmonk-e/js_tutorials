const accountId = 138913

// different ways to declare and intialise variables

// initially js didn't have block scope and functional scope, it happened by using var keyword
var accountPassword = ""

// so now everyone uses only let keyword
let accountEmail = "shash@goog.com"

// below is also possible but considered as bad practice
accountCity = "Chikamagalur"

// we wont be initialising this one, its undefined
let accountState;

//accountId = 2 // cannot change constant

accountEmail = "kjs@jakj.com"
accountPassword = "234245456"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* Output
┌─────────┬────────────────┐
│ (index) │     Values     │
├─────────┼────────────────┤
│    0    │     138913     │
│    1    │ 'kjs@jakj.com' │
│    2    │  '234245456'   │
│    3    │  'Bengaluru'   │
│    4    │   undefined    │
└─────────┴────────────────┘
*/