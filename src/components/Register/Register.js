import React from 'react'
import { Form } from 'react-bootstrap'
import NavbarMain from '../Navbar/Navbar'
import { useState } from 'react'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [country, setOption] = useState('')
    
    
    
    let genders = ["Male", "Female", "Guy"]
    let options = ['USA', 'UK', 'EU', 'AU']
   //name 
    const onChangeData = (data) => {
        setName(data);
    }
  //email
  const onChangeData3 = (data) => {
    setEmail(data);
}
  //password
  const onChangeData4 = (data) => {
      setPassword(data);
  }

  //address
  const onChangeData5 = (data) => {
    setAddress(data);
}

    return (
        <>
        <NavbarMain />
        <div className="container">

            <h2>Register</h2>

            <form>
                <div className="form-group">
                    <labe for="names">Name</labe>
                    <input className="form-control" 
                    type="text" 
                    id="names" 
                    name="name"
                    onChange={(e) => onChangeData(e.target.value)}
                    value={name}
                    placeholder="Enter your name" 
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" 
                    type="email" 
                    name="email" 
                    onChange={(e) => onChangeData3(e.target.value)}
                    value={email}
                    placeholder="Enter your Email" 
                    />
                </div>

                <div className="form-group">
                    <label for="password">Password</label>
                    <input className="form-control" 
                    id="password" 
                    type="password" 
                    name="password" 
                    onChange={(e) => onChangeData4(e.target.value)}
                    value={password}
                    placeholder="Enter your Password" 
                    />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input className="form-control" 
                    type="text" 
                    name="address" 
                    onChange={(e) => onChangeData5(e.target.Value)}
                    value={address}
                    placeholder="Enter your address" 
                    />
                </div>

                <div className="form-group">
                    <label for="country">Select your Country</label>
                    <option disabled>Your country</option>
                    <select className="form-control" onChange={e=> setOption(e.target.value)}>
                    {options.map( xx => (<option value={xx}>{xx}</option>))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Gender: </label><br />
                    {genders.map(result => ( <Form.Check
                    type="radio"
                    label={result}
                    onChange={e => setGender(e.target.value)}
                        value={result}
                    />))}
                </div>
                <br />
                <div className="form-group">
                    <label for="textar">About You</label>
                <Form.Control
                    as="textarea"
                    id="textar"
                    placeholder="Leave a comment here"
                    style={{ height: '200px' }}
                    />
                </div>

                <br />
                <button type="submit" className="btn btn-info">Register</button>


            </form>
            {country}
        </div>
        </>
    )
}

export default Register