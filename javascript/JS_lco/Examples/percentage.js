
let grade = function(currentMarks,totalMarks)
{
    percentage = (currentMarks/totalMarks)*100
    console.log(`Percentage = ${percentage}`)

    let myGrade = ''

    if(percentage>=90)
    {
        myGrade = 'A'
    }
    else if(percentage>=80 && percentage<90)
    {
        myGrade = 'B'
    }
    else if(percentage>=70 && percentage<80)
    {
        myGrade = 'C'
    }
    else if(percentage>=60 && percentage<70)
    {
        myGrade = 'D'
    }
    else
    {
        myGrade = 'F'
    }

    return myGrade
}

console.log(`Your Grade = ${grade(86,110)}`)