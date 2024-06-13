import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';



// can group testcases using describe()

describe("contact page test cases",()=>{
    test("should load the heading in contact page",()=>{
        // jest dom will render contact component. To convert JSX code(contact component), we need to configure preset for babel 
        render(<Contact />); 
        const heading=screen.getByRole('heading'); // screen like our webpage/ webbrowser
        // Assertion
        expect(heading).toBeInTheDocument(); // checking heading is present or not
    });
    
    test("should load submit button in contact page",()=>{
        render(<Contact />);
        // const submit =screen.getByRole('button');
        const submit= screen.getByText('Submit');
        // const submit= screen.getByText('submit'); // case-sensitive=> failed test
    
        // console.log(submit);
        expect(submit).toBeInTheDocument();
    });
    
    test("should load input boxes in contact page",()=>{
        render(<Contact />);
        const input=screen.getAllByRole('textbox');
        expect(input.length).toBe(2);
    })
    // can use either jest or it
    it("should load input boxes in contact page",()=>{
        render(<Contact />);
        const input=screen.getAllByRole('textbox');
        expect(input.length).not.toBe(3);
    })
    it("should load input boxes in contact page",()=>{
        render(<Contact />);
        const input=screen.getAllByRole('button');
        expect(input.length).toBeTruthy();
    })
})