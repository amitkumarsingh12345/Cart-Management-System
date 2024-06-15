import React from 'react'
import Category from './Category';

const ViewCategory = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-2'>
            <div className='row'>
                <div className='col'>
                    <Category />
                </div>
            </div>
        </div>
        <div className='col-10'>
            <div className='row'>
                <div className='col'>
                ViewCategory
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ViewCategory