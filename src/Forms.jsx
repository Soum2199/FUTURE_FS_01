import React, {useState} from 'react'
import axios from "axios";

function Forms() {
  const [naming, setNaming] = useState("");
  const [emails, setEmails] = useState("");
  const [msgs, setMsgs] = useState("");

  function namingPerson(eve) {
    console.log(eve.target.value)
    setNaming(eve.target.value)
  }
  function mails(eve) {
    setEmails(eve.target.value)
  }
  function messenge(eve) {
    setMsgs(eve.target.value)
  }
  function givinReviews() {
    console.log("happy\n Form already submitted!")
    alert("Form already submitted!")
  }
  return (
    <>
    <div style={{ display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", border: "1px solid pink", padding: "4px"}}>
<label for="">Name: </label><br/> <input required class="form-control form-control-lg bg-transparent shadow-md" type="text" placeholder="Your Name" style={{ display: "block",
  marginRight: "auto",  marginLeft: "auto" , width: "83vw", color: "beige"}} onChange={namingPerson} />
  <br/>
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input required style={{width: "84vw", color: "beige"}} type="email" onChange={mails} class="form-control bg-transparent shadow-md" id="exampleFormControlInput1" placeholder="Eg. name@example.com"/>
  <br/><label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea required style={{width: "84vw", color: "beige"}} onChange={messenge} class="form-control bg-transparent shadow-md" id="exampleFormControlTextarea1"></textarea>
<br/>
  <button type="button" onClick={givinReviews} class="btn btn-outline-success bg-lime-300 font-sans text-stone-700 text-xl" style={{margin: "3px", padding: "5px 10px"}}>Send Message</button>
</div>
    </>
  )
}

export default Forms