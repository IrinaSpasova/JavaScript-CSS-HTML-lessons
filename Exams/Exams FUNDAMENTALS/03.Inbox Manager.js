function solve(input) {
    // 1. prepare input data
    input.pop();
    let users = {};

    // 2. read input data-loop
    for (const line of input) {
        let [command, user, email] = line.split('->');

        switch (command) {
            case 'Add':
                if (Users[user]) {
                    console.log('User is registered');
                } else {
                    users[user] = [];
                }
                break;

            case 'Send':
                users[user].push(email);
                break;
            case 'Delete':
                if (users[user]) {
                    delete users[user];
                } else {
                    console.log('Not found');
                }
                break;

        }
    }


    //2.5 transform object to arr
    let usersArr = Object.entries(users);
    // 3. sort arr
    let sortedUsersArr = usersArr.sort(sortUsers);

    // 4. sorting function
    const sortUsers = function (userA, userB) {

        let userNameA = userA[0];
        let userEmailsA = userA[1];
        let emailCountA = userEmailsA.length;
        // or:
        //let emailCountA = userA[1].length;

        let userNameB = userB[0];
        let userEmailsB = userB[1];
        let emailCountB = userEmailsB.length;

        if (emailCountB == emailCountA) {
            return userNameA.localeCompare(userNameB);
        } else {
            return emailCountB - emailCountA;
        }
    }
    // 5. Convert to object
    let sortedUsers = Object.fromEntries(sortedUsersArr);

    // 6. print result
    console.log(sortedUsersArr.length);
    // or console.log(Object.keys(sortedUsers).length);
    for (const users in sortedUsers) {
        console.log(user);
        for(const iterator of sortedUsers[user]){
            console.log(email);
        }
    }
}
solve();