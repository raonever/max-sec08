import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6287f.firebaseio.com/'
});

export default instance;


// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://react-my-burger-6287f.firebaseio.com/'
// });

// export default instance;