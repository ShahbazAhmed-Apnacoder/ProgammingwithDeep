function App(){ //App become  custom HTML tag or jsx element or UI component

/* Define State */

 //!Array Destructuring :
const [username, setUsername] = React.useState(''); //! .useState() is hook 
const [password, setPassword] = React.useState('');
// the first variable is especial variable
/* setUsername function midware function which is "built in of React" */
/*    1-value,
    2-setter function

]; */

function handleUsername(e) {
  //! username = e.target.value; 
  //? don,t mutate state directly or don,t change directly 
//* react doesn,t recognitize change 
  setUsername(e.target.value);
  
}

function handlePassword(e) {
  setPassword(e.target.value);
  
}


// onChane = {SetUsername};
return <div>
     <h1 className="dispaly-3 text-center  mb-3 fw-bold">Website form</h1>

<h2 className ="fw-semobold text-center">Login in</h2>

<div className ="card w-50 m-auto shodow border-0">
  <div className ="card-body ">
  <form action="">
<div className="mb-3">
<label htmlFor="username" className="mb-2">Username : </label>
<input id="username" onChange={handleUsername} type="text"  className="form-control" placeholder="Enter Your Username..."/>
</div>

<div className="mb-3">
<label htmlFor="password" className="mb-2">Password : </label>
<input id="password" onChange={handlePassword}  className="form-control" type="password" placeholder="Enter Your Password ..." />
</div>
                               {/* !If Jsx element is same as HTML element if it  selfclose tag i must add "/" at end of */}
<div className="card ">
<div className="card-header text-primary fw-bold">Output :</div>
<div className="card-body mb-3 ">
<strong>Username : </strong> {username.toUpperCase().split(' ')}
<br/>
<strong>Password : </strong>{password.split('').map((passwd)=> '*').join('')}
{console.log(password.split('').map((letter)=> '*').join(''))}
</div>
</div>


<div className="text-end mt-3">
<div className="btn btn-primary" >Sign Up</div>
</div>
  </form>
</div>
</div>

</div>;

};   /* it consider as component when it returns HTML */

//JSX (JavaScript and Extension markup language)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
