import React from "react";

class Header extends React.Component{
    var1 = "Текст1"
    render(){
        return(
            <div>

                <input
                    placeholder={this.var1}
                    onClick={this.fun1}
                />
                <header>dslkfj</header>
                <h1 onClick={this.fun2}>vasya</h1>
            </div>
        )
    }
    fun1(){console.log("clicked Holder")}
    fun2(){console.log("clicked Text")}
}

export default Header