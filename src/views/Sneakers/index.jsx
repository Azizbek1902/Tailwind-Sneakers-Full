import React from 'react';
import ApBar from '../../components/Sneakers/AppBar'
import Container from '../../components/Sneakers/Container';
import Sleder from '../../components/Sneakers/Sleder';

function Sneakers() {
  return (
    <div>
      <ApBar />
      <div className='flex justify-center'>
        <div className="flex justify-between w-11/12 gap-3">
          <div className='w-1/4'><Sleder /></div>
          <div className='w-3/4'><Container /></div>
        </div>
      </div>
    </div>
  )
}

export default Sneakers