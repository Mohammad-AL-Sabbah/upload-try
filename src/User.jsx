function UserDisplay(props) {
 return(
    <div className='user-card'>
    <h2>Hello {props.name} </h2>
    <p>email: {props.email} </p>
    <button className="btn btn-outline-secondary btn-lg rounded-pill shadow">Details</button>
    <button className="btn btn-outline-danger btn-lg rounded-pill shadow">Delete</button>

  </div>
 );
}
export default UserDisplay