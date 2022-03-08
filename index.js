const API = require("./instance"); //import instance


//get carpark available data
API.get("/transport/carpark-availability").then(res => {
    let carparks = res.data;
    console.log(carparks);

    let arrData = carparks.items[0]['carpark_data'];
    console.log(arrData); //log array of carpark data

    arrData.forEach((row, i) => {
        console.log(row);
    });   
});