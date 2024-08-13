import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Filter from './component/Filter';
import Cards from './component/Cards';
import {filterData,apiUrl} from "./data"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spiner from './component/Spiner';

function App() {
  const [category,setCategory] = useState(filterData[0].title);
  const[loading,setLoading] = useState(true);
  async function fetchData() {

    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data);
      fetchCourses(data.data)
    }
    catch(error){
      toast.error("something went wrong");
    }
    setLoading(false);
  }
  const [courses,fetchCourses] = useState(null)
  useEffect(()=>{
    fetchData();
    console.log(courses);
  },[]);
  return (
    <div className="App">
      <Navbar/>
      <Filter
       filterData={filterData}
       category={category}
       setCategory={setCategory}/>
      {
        loading ? <Spiner/> : <Cards category={category} courses={courses} />
      }
    </div>
  );
}

export default App;
