//1.Import Area

import B from "./B";

//2.Function Defination Area

//2.1 Functional Defination Area
function A(ln){
    let name = "MINAKSHI";
    let surname2 = "SHARMAA";
    //Every function return something
    return <h1>A { name } {ln.surname} - <B surname={surname2}/> </h1>;
}

//3.Export Area
export default A;