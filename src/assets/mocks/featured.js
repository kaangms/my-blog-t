import moment from 'moment'
import 'moment/locale/tr'  // without this line it didn't work
moment.locale('tr')

export default[
   {
    title:'featured_Can anyone code?',
    date:moment().format('MMMM DD,YYYY'),
    categories:['Tech Culture','Tech News'],
    link:'#',
    image:'anyone_can_code.jpg',
   } ,
   {
    title:'featured_1Can anyone code?',
    date:moment().format('MMMM DD,YYYY'),
    categories:['Tech Culture','Tech News'],
    link:'#',
    image:'anyone_can_code.jpg',
   } ,
   {
    title:'featured_2Can anyone code?',
    date:moment().format('MMMM DD,YYYY'),
    categories:['Tech Culture'],
    link:'#',
    image:'anyone_can_code.jpg',
   } ,
   {
    title:'featured_3Can anyone code?',
    date:moment().format('MMMM DD,YYYY'),
    categories:['Tech Culture','Tech News'],
    link:'#',
    image:'anyone_can_code.jpg',
   } ,
  

]
