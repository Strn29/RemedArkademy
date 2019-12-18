import React , {Component} from "react";
import "./landing.css";
import TopName from "./components/topName";
import Description from "./components/descripton";
import Form from "./components/form";
import ScrollDown from "./components/scrollDown";

class Landing extends Component{
    render(){
        return (
            <div class="wrapper with-image ">
            <div class="flex-wrapper">
                {/* top name */}
                <TopName
                    name="Muhammad Azis Saputra"
                ></TopName>
                {/* -- */}
                {/* description */}
                    <Description/>
                {/* -- */}
                {/* form */}
                <Form/>
                {/* -- */}
                {/* scroll down */}
               <ScrollDown/>
                {/* -- */}
            </div>
            <div class="opacity">
            </div>
        </div>
        )
    }
}

export default Landing;