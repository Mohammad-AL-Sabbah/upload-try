function CustomeButton(props){
    return(
        <button  className= {`btn btn-outline-${props.type} btn-lg rounded-pill bg-${props.backolor} shadow`}>{props.text} </button>
    )
}
export default CustomeButton