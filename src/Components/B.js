//1.Import Area


import { Component } from "react";
import C from "./C";


//2.Class Defination Area

//Class Child extends Parent{}
class B extends Component{
    //1.Properties/Variables
    name = "GAUTAM";

    //2.Constructor
    constructor(){
        super();
        this.address = "NEEMUCH";
    }

    //3.Methods
    render(){
        //Every function return something
        //In order to access any member of the class you have to use this.member
        return <span>B {this.name} {this.props.surname}- from {this.address} - <C>SHARMA</C></span>
    }
}

//Export Area
export default B;