const students = [
    {   name: "Lokendra",
        marks: 92
    },
    {  name: "Himanshu",
       marks: 89
    },
    {  name: "Hemant",
       marks: 70
    },
    { name: "Neeraj",
      marks: 95
    }] ;

    const checkResult = (el) => {
        for(let student of students) {
            if (student.name === el) {
                return student.marks > 90 ? 
                console.log(`Congratulations ${student.name}, You have Passed the exam.`) :
                console.log(`Sorry..!! ${student.name} You have not cleared the exam.`) 
            }
        }
                console.log('Invalid..!! User') ;
    } ;

checkResult("Neeraj") ;
checkResult("Hemant") ;



