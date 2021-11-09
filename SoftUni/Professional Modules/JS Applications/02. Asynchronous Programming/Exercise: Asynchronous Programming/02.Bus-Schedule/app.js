function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

   let stop = {
        next: 'depot'
    };

    async function depart() {
        departBtn.disabled = true;
        //get information about next stop
        //display name of next stop

        //activate other button
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        const res = await fetch(url);
        stop = await res.json();
        //const data = await res.json(); Това не ни трябва самостоятелно


        label.textContent = `Next stop ${stop.name}`;

        
        arriveBtn.disabled = false;

    }

    function arrive() {
        //display name of current stop

        //display name of next stop

        //activate other button
        label.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();