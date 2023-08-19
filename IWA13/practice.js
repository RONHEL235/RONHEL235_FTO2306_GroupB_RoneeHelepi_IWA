let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => { 
    const isString = typeof calculated === 'string';
    const calculatedAsNumber = isString ? parseFloat(calculated) : parseFloat(calculated);
    calculated = (calculatedAsNumber + 1).toString();
};

const calcUser = () => {
    logCalc();
    if (parseFloat(calculated) > 2) {
        user = 'John';
        state = 'requesting';
    }
    if (parseFloat(calculated) > 3) {
        state = 'idle';
    }
};

const checkUser = () => {
    if (user && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`);
    }
};

// Only allowed to change above

// Call calcUser() multiple times to reach the desired state
calcUser();
calcUser();
calcUser();

// Call checkUser() to log the output
checkUser();
