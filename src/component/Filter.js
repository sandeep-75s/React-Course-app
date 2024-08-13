import './Filter.css'

function Filter({filterData,category,setCategory}){
    let categor = category;
    let setCat = setCategory;
    function clickHandler(title){
        setCat(title);
    }
    return(
        <div className="filter">
            {
                filterData.map((filter)=>{
                    return(<button onClick={()=>clickHandler(filter.title)} className='btn' key={filter.id} >{filter.title}</button>);
                })
            }
        </div>
    );
}

export default Filter;