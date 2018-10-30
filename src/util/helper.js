// Get day, date difference
export const getDateDiff = (date) => {
   const current = new Date();
   date = date.split(' ')
   return (current.getDate() - parseInt(date[2]))
}