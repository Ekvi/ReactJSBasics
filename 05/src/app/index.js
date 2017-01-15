import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    onGreet() {
        alert("Hello");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sx-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sx-10 col-xs-offset-1">
                        <Home name={"Dima"} initialAge={32} greet={this.onGreet} />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
{/*greet={onGreet}*/}