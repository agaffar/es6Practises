/**
 * Created by SB004 on 3/27/2017.
 */
let rates = [
    {
        "name": "30 years fixed",
        "rate": "13",
        "years": "30"
    },
    {
        "name": "20 years fixed",
        "rate": "2.8",
        "years": "20"
    }
];
export let findAll = () => new Promise((resolve, reject) => {
    if (rates) {
        resolve(rates);
    } else {
        reject("No rates");
    }
});