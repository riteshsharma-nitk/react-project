import React, {useState} from 'react'

import TriggerAndUpc from './TriggerAndUpc';
import BasketAndConditions from './BasketAndConditions';
import Upc from './Upc';
import BasketAndUpc from './BasketAndUpc';

export default function AuditParser() {
  const [showHide, setShowHide] = useState('');
  
  const handleShowHide = (e) => {
    const getOption = e.target.value;
    setShowHide(getOption) 
  };

  return (
    <div className='container'>
      <h1>Audit Parser</h1>
    
      <div className='row'>
        <select id='auditType' value={showHide} onChange={(e) => (handleShowHide(e))}>
          <option value="noSelect">Select</option>
          <option value="upc">UPC : get recent triggers based on upc</option>
          <option value="trigger">Trigger Id and UPC : get recent audit based on trigger id and upc</option>
          <option value="basket">Basket Id and UPC : get recent audit based on basket id and upc</option>
          <option value="basketAndCondition">Basket Id and Conditions : get recent audit based on basket id and conditions</option>
        </select>
      </div>
      
      { showHide === "upc" && <Upc/> }

      { showHide === "trigger" && <TriggerAndUpc/> }

      { showHide === "basket" && <BasketAndUpc/> }

      { showHide === "basketAndCondition" && <BasketAndConditions/> }

</div>
  )

}

 