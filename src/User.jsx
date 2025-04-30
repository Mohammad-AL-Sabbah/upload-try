function UserDisplay(props) {
 return(
    <div className='user-card border-1 shadow  p-3'>
    <h2 className="fs-4">Welcome : {props.name} </h2>
    <p>Email: {props.email} </p>
    <p>Age is: {props.age} </p>
    <div className="buttons flex-row d-flex gap-3 w-25">
    <button className={`btn btn-outline-${props.color} btn-lg rounded-pill shadow`}>Details</button>
    <button className="btn btn-outline-danger btn-lg rounded-pill shadow">Delete</button>
    </div>
  </div>
 );
}
export default UserDisplay