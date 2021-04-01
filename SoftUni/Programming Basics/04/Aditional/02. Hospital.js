function data(input) {
    let period = Number(input[0]);


    /*LOGIC*/
    let untreatedPatients = 0;
    let treatedPatients = 0;
    let doctors = 7;

    for (let i = 1; i <= period; i++) {
        let patients = Number(input[i]);
        if((i%3==0) && (untreatedPatients>=treatedPatients)){
            doctors++;
        }
        if (patients > doctors) {
            untreatedPatients += patients - doctors;
            treatedPatients += doctors;
        } else {
            treatedPatients += patients;
        }

    }

    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)



}
data([4, 7, 27, 9, 1])