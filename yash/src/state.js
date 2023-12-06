import{useState} from 'react';
 function Apps(){
 const [data,setData]=useState(0)
 
 function updateData(){
    setData(data+1);

 }
 console.warn();
 return (<div className="App">
    
    <h1>{data}</h1>
    <button onClick={updateData}>update</button>
    </div>
    );
}
export default Apps;