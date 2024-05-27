import React from 'react'

export default function Contact({contact}) {
  return (
    <div>
      
      <section id="contact">
  <div className="container contact-row">
    <div className="contact-left-col">
      <h1>
        Sign Up to join out <br />
        learning comunity
      </h1>
      <form action="" method="post">
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <div className="btn-box">
          <button className="common-btn">Sign Up</button>
          <button className="common-btn"> Start free Trial</button>
        </div>
      </form>
      <div className="line">
        <span className="line-1" />
        <br />
        <span className="line-2" />
        <br />
        <span className="line-3" />
      </div>
    </div>
    <div className="contact-right-col">
      <img src={contact}alt="" />
    </div>
  </div>
</section>


    </div>
  )
}
