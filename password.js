let password = 'Password22';

// Other successful passwords:
// password = '12345Passw'
// password = 'Pass!word123'

// Fail passwords:
// password = 'PasswordHi'
// password = 'Password'
// password = 'Password1'
// password = '1234567891'


if(password.length >= 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)){
    console.log('Password meets the criteria.');
} else {
    console.log('Password does not meet the criteria.');
}

// 3 Additional Checks:

// Additional Check 1:
// if(password.length === 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)){
//     if(password.includes('Password')){
//         console.log('Password does not meet the criteria.');
//     } else {
//         console.log('Password meets the criteria.');
//     }
// } else {
//     console.log('Password does not meet the criteria.');
// }


//Additional Check 2:
// if(password.length === 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)){
//     if(password.includes('!') || password.includes('.')){
//         console.log('Password does not meet the criteria.');
//     } else {
//         console.log('Password meets the criteria.');
//     }
// } else {
//     console.log('Password does not meet the criteria.');
// }


//Additional Check 3:
    // if(password.length === 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)){
    //     if(password.includes(' ')){
    //         console.log('Password does not meet the criteria.');
    //     } else {
    //         console.log('Password meets the criteria.');
    //     }
    // } else {
    //     console.log('Password does not meet the criteria.');
    // }
