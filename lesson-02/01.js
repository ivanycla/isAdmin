const isAdmin = false;
const isVerifiedUser = true;
const hasSpecialPermission = true;
const hasTemporaryPass = false;

let isAccess;
if ((isAdmin && hasTemporaryPass) || hasSpecialPermission) {
    isAccess = true;
} else if ((isVerifiedUser && hasTemporaryPass) || hasSpecialPermission) {
    isAccess = true;
} else {
    isAccess = false;
}

console.log(isAccess); // true
