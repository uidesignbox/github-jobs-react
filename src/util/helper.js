// Get date difference. First argument in floor is current date, second is passed argument.
export const getDateDiff = (date) => {
   return (Math.floor((new Date() - new Date(date)) / (1000*60*60*24)))
}