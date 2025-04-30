function CustomeButton(props){
    return(
        <div>
        <button  className= {`btn btn-outline-${props.type} btn-lg rounded-pill bg-${props.backolor} shadow`}>{props.text} </button>
        </div>
    )
}
export default CustomeButton