import Card from "./Card";
import './Cards.css'

function Cards(props){
    let courses = props.courses;
    
    function getCourses(){
        if(props.category==="All"){
            let allCourses=[];
            console.log(courses);
            Object.values(courses).forEach(array => {
                // console.log(array)
                array.forEach(courseData=>{
                    allCourses.push(courseData)
                })
            })
            return allCourses;
        
        }else{
           return courses[props.category]
        }
    };
    // getCourses();
    return(
        <div className="cards">
            {
                
            getCourses().map( (card) => (
                <Card key={card.id} course={card}></Card>
            ))
                
            }   
        </div>
    );
}

export default Cards;