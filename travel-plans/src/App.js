import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isDiabetic: false,
            isKosher: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        onChange={this.handleChange}
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="First name" /><br />
                    <input
                        onChange={this.handleChange}
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="Last name" /><br />
                    <input
                        onChange={this.handleChange}
                        name="age"
                        value={this.state.age}
                        placeholder="Age" /><br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender == "male"}
                            onChange={this.handleChange} /> Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender == "female"}
                            onChange={this.handleChange} /> Female
                    </label>

                    <br />

                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}>
                        <option value="">---</option>
                        <option value="turkey">Turkey</option>
                        <option value="uk">UK</option>
                        <option value="us">US</option>
                    </select>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan} /> Vegan
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="isDiabetic"
                            onChange={this.handleChange}
                            checked={this.state.isDiabetic} /> Diabetic
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher} /> Kosher
                    </label>

                    <hr />

                    <h2>Your info</h2>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Age: {this.state.age}</p>
                    <p>Gender: {this.state.gender}</p>
                    <p>Destination: {this.state.destination}</p>
                    <p>Dietary restrictions:</p>
                    <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                    <p>Diabetic: {this.state.isDiabetic ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                </form>
            </main>
        )
    }
}

export default App;
