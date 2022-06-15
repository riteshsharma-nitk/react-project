import {useState} from 'react'

export default function BasketAndConditions() {

  const [dateType, setDateType] = useState("");

  const [formData, setFormData] = useState({
    basketId : "",
    date : "",
    hourLowerBound : "",
    hourUpperBound : "",
    dateLowerBound : "",
    dateUpperBound : ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name] : event.target.value })
  };

 const handleShowHide = (event) => {
    const getUser = event.target.value;
    setDateType(getUser) 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    
    const API = `https://tools.learningcontainer.com/sample-json.json`;
    fetch(API)
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'download.json';
        a.click();
      })
    })


    setFormData({
      basketId : "",
      date : "",
      hourLowerBound : "",
      hourUpperBound : "",
      dateLowerBound : "",
     dateUpperBound : ""
    });
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <div className='row'>
          <div className='col-25'>
            <label className='required' htmlFor="basketId">Basket Id</label>
          </div>
          <div className='col-75'>
            <input 
            type="text"
            id='basketId'
             name='basketId'
             placeholder='Enter basket id..'
             value={formData.basketId}
             onChange={handleChange}
             required
             />
          </div>
      </div>


    
    <div>
    <div className='row'>
      <div className='col-25'>
        <label className='required' htmlFor='dateType'>Date Type</label>
      </div>
      <div className='col-75'>
        <select id='dateType' value={dateType} onChange={e => (handleShowHide(e))}>
          <option value="noSelect">Select</option>
          <option value="single">For Single Date</option>
          <option value="multi">For Multiple Dates</option>
        </select>
       </div>
    </div> 

      { dateType === "single" && (

          <>
          <div className='row'>

              <div className='col-25'>
              <label className='required' htmlFor="date">Date</label>
              </div>

              <div className='col-75'>
              <input
               type="date"
               id='date'
               name='date'
               placeholder='Enter date..'
               value={formData.date}
               onChange={handleChange}
               required 
               />
              </div>
          </div>
          

            <div className='row'>
              <div className='col-25'>
                <label className='required' htmlFor='hourLowerBound'>Hour Lower Bound</label>
              </div>

              <div className='col-25'>
                <input type="number"
                 id='hourLowerBound'
                 name='hourLowerBound'
                 placeholder='Enter hour lower bound (00 to 23)'
                 min="00" max="23"
                 value={formData.hourLowerBound}
                 onChange={handleChange}
                 required
                />
              </div>

              <div className='col-25'>
                <label className='required smallField' htmlFor='hourUpperBound'>Hour Upper Bound</label>
              </div>

              <div className='col-25'>
                <input type="number"
                id='hourUpperBound'
                name='hourUpperBound'
                placeholder='Enter hour upper bound (00 to 23)'
                min="00" max="23"
                maxLength={2}
                value={formData.hourUpperBound}
                onChange={handleChange}
                required
                 />
              </div>
            </div>
            
            </>
            )
            
          }
          </div>

      
      { dateType === "multi" && (
        
        <div className='row'>
             <div className='col-25'>
               <label className='required' htmlFor='dateLowerBound'>Date Lower Bound</label>
             </div>

             <div className='col-25'>
               <input type="date"
                id='dateLowerBound'
                name='dateLowerBound'
                placeholder='Enter date lower bound'
                value={formData.dateLowerBound}
                onChange={handleChange}
                required
               />
             </div>

             <div className='col-25'>
               <label className='required smallField' htmlFor='dateUpperBound'>Date Upper Bound</label>
             </div>

             <div className='col-25'>
               <input type="date"
                 id='dateUpperBound'
                 name='date_upper'
                 placeholder='Enter date upper bound'
                 value={formData.dateUpperBound}
                 onChange={handleChange}
                 required
               />
             </div>

            </div>
          )
      }

      <br/>

      <div className='row'>
          <input type="submit" value="Submit"/>
      </div>
      </form>
      
    </div>
  )
}
