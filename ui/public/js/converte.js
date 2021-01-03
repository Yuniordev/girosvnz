var tasa_USDCOP = document.getElementById('USDCOP')
        var tasa_USDVES = document.getElementById('USDVES')
        var tasa_VESCOP = document.getElementById('VESCOP')

        var montoUSD = document.getElementById('usd')
        var montoCOP = document.getElementById('cop')
        var montoVES = document.getElementById('ves')

        localStorage.tasaUC = localStorage.tasaUC || '3200'
        localStorage.tasaUV = localStorage.tasaUV || '1194643'

        tasa_USDCOP.value = parseFloat(localStorage.tasaUC)
        tasa_USDVES.value = parseFloat(localStorage.tasaUV)
        tasa_VESCOP.value = tasa_USDCOP.value / tasa_USDVES.value

        montoUSD.addEventListener('keyup', function () {
            let usd = parseFloat(montoUSD.value)
            montoCOP.value = usd * parseFloat(localStorage.tasaUC)
            montoVES.value = usd * parseFloat(localStorage.tasaUV)
        })

        montoCOP.addEventListener('keyup', function () {
            let pesos = parseFloat(montoCOP.value)
            montoUSD.value = pesos / parseFloat(localStorage.tasaUC)
            montoVES.value = montoUSD.value * parseFloat(localStorage.tasaUV)
        })

        montoVES.addEventListener('keyup', function () {
            let bolivares = parseFloat(montoVES.value)
            montoUSD.value = bolivares / parseFloat(localStorage.tasaUV)
            montoCOP.value = montoUSD.value * parseFloat(localStorage.tasaUC)
        })

        tasa_USDCOP.addEventListener('keyup', function () {
            localStorage.tasaUC = tasa_USDCOP.value
            tasa_VESCOP.value = parseFloat(localStorage.tasaUC) / parseFloat(localStorage.tasaUV)
        })
        tasa_USDVES.addEventListener('keyup', function () {
            localStorage.tasaUV = tasa_USDVES.value
            tasa_VESCOP.value = parseFloat(localStorage.tasaUC) / parseFloat(localStorage.tasaUV)
        })
