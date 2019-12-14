// setTimeout(() => {
//     postMessage('hello world from worker');
// }, 3000);


fetch('https://nztodo.herokuapp.com/api/task/?format=json').then((res) => {
    res.json().then((data) => {
        postMessage(data);
        close();
    });
});