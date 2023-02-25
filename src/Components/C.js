//1.Import Area


//2.Function Defination Area

let C = (props)=>{ //Function define by Fat Arrow Notation.
    let name = "CHOTU";
    console.log('Hi',props.children)
    //Every function return something
    return <span>C {name} {props.children} - </span> 
}

//3.Export Area


//3.1 Default export
export default C; 

//3.2 Named export