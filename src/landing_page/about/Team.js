import React from 'react'

function Team() {
    return ( 
      <div className='contaner'>
        <h2 className='text-center'> People </h2>
        <div className='row  m-5 mb-5 text-muted'>
          <div className='col-6  text-center'>
            <img src='media/images/manishpic.jpg' style={{borderRadius:"100%",  width:"50%"}}/>
            <h5 className='mt-4'>Manish Prajapati</h5>
            <p className='mt-3'>Founder, CEO</p>
          </div>
          <div className='col-6 mt-3'>
            <p >Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href='' style={{textDecoration:"none"}}> Homepage</a>/  <a href='' style={{textDecoration:"none"}}> TradingQnA</a>/ <a href='' style={{textDecoration:"none"}}> Twitter</a></p>
          </div>
        </div>

      </div>
     );
}

export default Team;