import androids from './android';
import cameras from './camera';
import laptops from './laptop';

// Spread Operator 
const fakeData = [...androids, ...cameras, ...laptops];

// Suffle (অদলবদল) , Product will be shuffle on every reload 
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;