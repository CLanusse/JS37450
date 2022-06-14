let tiempo = new Date("junio 10, 2022, 20:41:00");
console.log(tiempo);


let intervalo = setInterval(()=>{

    let fecha = new Date();

    let diferencia = tiempo - fecha;
    console.log(diferencia);

    let dias = Math.floor(diferencia/(1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    document.getElementById("tiempo").innerHTML = `
            <h4 class="bg-primary col-md-3 p-3">${dias} dias</h4>
            <h4 class="bg-danger col-md-3 p-3">${horas} horas</h4>
            <h4 class="bg-warning col-md-3 p-3">${minutos} minutos</h4>
            <h4 class="bg-success text-white col-md-3 p-3">${segundos} segundos</h4>
    `;

    if(diferencia < 0){
        
        clearInterval(intervalo);
        document.getElementById("tiempo").innerHTML = "¡Bienvenido al Cyber Monday!";
        document.getElementById("tiempo").style.color = "red";

        aplicarDescuentos()
    }

}, 1000)

function aplicarDescuentos(){
    
    console.log("aplicarDescuentos");

}