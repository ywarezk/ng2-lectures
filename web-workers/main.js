if (window.Worker) {
    var helloWorldWorker = new Worker('worker.js');
    helloWorldWorker.onmessage = function(e) {
        // alert(`got this from worker: ${e.data}`);

        for (const task of e.data) {
            const li = document.createElement('li');
            li.innerText = task.title;
            document.getElementById('container').appendChild(li);
        }
    }
}