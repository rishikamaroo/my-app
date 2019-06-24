import React from "react"
import moment from './moment'

function Hello(props){
    return <h1>Hello at {props.now}</h1>
}

describe("When you start testing", () => {
    let result;
    beforeAll(() => {
        result =  Hello({now : moment.toString()});
    });

    it("returns a value", () => {
        expect(result).not.toBeNull();
    });
});