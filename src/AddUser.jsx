function AddUser(props) {

  return (
    <div className="mt-4 form-info w-100 d-flex justify-content-center ">
      <form  className="d-flex flex-column  w-25" method="get"  >
        <label htmlFor="name" className="mt-3">{props.titleName} </label>
        <input type="text" id="name"className="ms-2 rounded-pill border border-primary text-center" name="Username" />

        
        <label htmlFor="email" className="mt-3">{props.titleEmail} </label>
        <input type="email" id="email" className="ms-2 rounded-pill text-center border border-primary" name="email" />

        <label htmlFor="age" className="mt-3">{props.Age} </label>
        <input type="number" id="age" className="ms-2 rounded-pill text-center border border-primary" name="age"  min="1" />


        <div className="UserStatus d-flex gap-3" >
        <label htmlFor="Blocked">Blocked</label>
        <input type="radio" name="UserStatus" id="Blocked" value={"active"} />

        <label htmlFor="active">active</label>
          <input type="radio" name="UserStatus" id="active" value="blocked" />
        </div>
      

        <input type="submit" className="btn btn-primary rounded-pill ms-2 mt-3" value={props.value} name="submit" />
      </form>
    </div>
  );
}

export default AddUser;
