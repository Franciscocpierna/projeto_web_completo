const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob("*/5 * 15 * * 5", function(){
    console.log("Executando a tarefa 1!", new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()//cancelar a tarefa 1
    console.log("Cancelando a tarefa 1!")
}
, 20000)//cancelar a tarefa 1 após 20 segundos

const regra = new schedule.RecurrenceRule()//criar uma regra de recorrencia
regra.dayOfWeek = [new schedule.Range(1, 5)]//definir os dias da semana
regra.hour = 15//definir a hora
regra.second = 30//definir os segundos

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando a tarefa 2!", new Date().getSeconds())
} )