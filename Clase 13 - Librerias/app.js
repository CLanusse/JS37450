

const btnSwall = document.querySelector('#alert')



btnSwall.addEventListener('click', () => {

    Swal.fire({
        title: 'Está seguro?',
        text: "Está a punto de vaciar el carrito. Esta acción no es reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'Por favor NO!'
      }).then((result) => {

        if (result.isConfirmed) {
        //   Swal.fire(
        //     'Vaciado!!',
        //     'Su carrito se vació correctamente.',
        //     'success'
        //   )

            Toastify({
                text: 'Se vació el carrito',
                duration: 5000
            }).showToast()
        }
      })

})

// btnSwall.addEventListener('click', () => {

//     Swal.fire({
//         position: 'top',
//         icon: 'success',
//         title: 'Bienvenidos!',
//         text: 'Estás en la clase de JS!',
//         confirmButtonText: ':D',
//         width: '100vw'
//       })

// })

const btnToast = document.querySelector('#toast')

btnToast.addEventListener('click', () => {

    Toastify({
        text: 'El producto se agregó correctamente!',
        duration: 30000,
        gravity: 'bottom',
        className: 'codertoast',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        onClick: () => {
            Toastify({
                text: 'Vamos a coder?',
                destination: 'https://www.coderhouse.com'
            }).showToast()
        }
    }).showToast()
})


// LUXON


const { DateTime } = luxon
// const DateTime = luxon.DateTime

const  dt = DateTime.local(2022, 4, 15)

// console.log(dt.toString())

const now = DateTime.now()

// console.log(now.hour)
// console.log(dt.toLocaleString())

console.log( now.toLocaleString(DateTime.TIME_WITH_LONG_OFFSET) )
console.log( now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS) )

const suma = now.plus({hours: 30, minutes: 20})

console.log(suma.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS) )