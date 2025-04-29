import React from 'react'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

const Dashboard = () => {
  

  return (
    
      
     <div className='min-h-screen flex flex-col md:flex-row'>
     <div className="md:w-56">
         {/** sidebar */}
            <DashSidebar/>
      </div>

      {/** profile */}
      <DashProfile/>

     </div>

  )
}

export default Dashboard
