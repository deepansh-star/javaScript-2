function clauclateLeftDays (el) {

const currDate = new Date () ;
const eventDate = new Date (el) ; 

const timeLeft = eventDate - currDate  ;
const daysleft = Math.ceil(timeLeft / (1000 * 60 * 60 *24)) ;

return daysleft ; 
}

const eventDate = '2024-01-12'
console.log(clauclateLeftDays(eventDate)) ;







