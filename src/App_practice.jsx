// import React, { useState } from 'react'

// function App() {

//   const submitHandeler = (e) =>{
//     e.preventDefault();
//     console.log(userName)
//   }

// const [userName, setUserName]  = useState('')

//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandeler(e)
//       }}>
//         <input  onChange={(e)=>{
//         setUserName(e.target.value)
//       }}
//       value={userName}
//       className='bg-red px-5 py-3 m-5' placeholder='Enter Name' type='text'/>
//       <button className='px-5 py-2 m-5 border text-xl font-semibold bg-emerald-600 rounded text-white'>Submit</button>
//       </form>s
//     </div>
//   )
// }

// export default App


// ------------------- 27-11  ----------------- // 

// import React from 'react'
// import Body from './Components/Body'
// const App = () => {
//   let UserData = 
//   [
//     {
//       "name": "John Doe",
//       "city": "New York",
//       "age": 30,
//       "profession": "Software Engineer",
//       "profile_photo": "https://example.com/photos/johndoe.jpg"
//     },
//     {
//       "name": "Alice Smith",
//       "city": "Los Angeles",
//       "age": 27,
//       "profession": "Graphic Designer",
//       "profile_photo": "https://example.com/photos/alicesmith.jpg"
//     },
//     {
//       "name": "Bob Johnson",
//       "city": "Chicago",
//       "age": 35,
//       "profession": "Data Scientist",
//       "profile_photo": "https://example.com/photos/bobjohnson.jpg"
//     },
//     {
//       "name": "Mary Davis",
//       "city": "Miami",
//       "age": 32,
//       "profession": "Marketing Specialist",
//       "profile_photo": "https://example.com/photos/marydavis.jpg"
//     },
//     {
//       "name": "James Wilson",
//       "city": "San Francisco",
//       "age": 28,
//       "profession": "Product Manager",
//       "profile_photo": "https://example.com/photos/jameswilson.jpg"
//     }
//   ]
  
//   return (
//     <div>
//       <div className="p-10">
//         {UserData.map(function(elem,id){
//           return <Body key={id} username = {elem.name} age = {elem.age} city = {elem.city} photo = {elem.profile_photo} />
//         })}
//       </div>
//     </div>
//   )
// }

// export default App

// ------------------------ 30-11   --------------------------- //

// import React from 'react'
// import Ex from './Components/Ex'
// function App() {
//   return (
//     <div>
//       <Ex/>
//     </div>
//   )
// }

// export default App

//---------------- 30-11 -------------------------------//

// import React from 'react'
import React, { useState } from 'react'
import axios from 'axios'



const App = () => {
    const [data, setData] = useState([])

    const getData = async() =>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data);
    console.log(data);
  }

  // getData()

  


  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-emerald-600 text-white text-xl font-semibold rounded px-6 py-3 m-5 active:scale-90'> Get Data </button>
      <div className="p-5 bg-grey-950 text-white">{
        data.map(function (elem, id){
          return <div key={id} className='bg-gray-50 text-black  items-center justify-between w-full px-6 py-7 mb-3'>
            <img  src={elem.download_url} height={elem.height} width={elem.width} />
            <span>{elem.author}</span>
          </div>
        })}</div>
    </div>
  )
}

export default App

