import React from 'react'

function TriggerAndUpc() {
  return (
    <div>

     {/* Trigger ID */}
     <div className='row'>
             <div className='col-25'>
               <label className='required' htmlFor="triggerId">TRIGGER ID</label>
             </div>
             <div className='col-75'>
               <input type="text" id='triggerId' name='trigger_id' placeholder='Enter trigger id..' required/>
             </div>
           </div>
        
    {/* UPC */}
    <div className='row'>
       <div className='col-25'>
         <label className='required' htmlFor='upc'>UPC</label>
       </div>
       <div className='col-75'>
         <input type="text" id='upc' name='upc_' placeholder='Enter upc..'/>
       </div>
     </div>

     {/* Optional : state name */}

     <div className='row'>
     <div className='col-25'>
         <label htmlFor='state'>STATE</label>
       </div>
       <div className='col-75'>
         <input type="text" id='state' name='state_' placeholder='Enter state..'/>
       </div>
     </div>

      {/* optional : store name */}

      <div className='row'>
     <div className='col-25'>
         <label htmlFor='store'>STORE</label>
       </div>
       <div className='col-75'>
         <input type="text" id='store' name='store_' placeholder='Enter store..'/>
       </div>
     </div>

     {/* Neccesaaary Field */}
   {/* <div className='row'>
     <div className='col-25'>
         <label className='required' htmlFor='email'>EMAIL</label>
       </div>
       <div className='col-75'>
         <input type="email" id='email' name='email_' placeholder='Enter email..'/>
       </div>
     </div> */}
     
     </div>
  )
}

export default TriggerAndUpc