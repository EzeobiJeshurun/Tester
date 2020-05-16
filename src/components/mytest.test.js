import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Hello from './Hello';
import { cleanup } from '@testing-library/react';
import { exportAllDeclaration } from '@babel/types';

let container = null;

beforeEach(()=>{
//setup a DOM element as a render target
container = document.createElement("div");
document.body.appendChild(container);

})

afterEach(()=>{
    // cleanup existing
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})


it("renders with or without a name",()=>{
    act(()=>{
        render(<Hello/>,container);
    })
    expect(container.textContent).toBe("Hey, Stranger");

    act(()=>{
        render(<Hello name="jesh"/>, container);
    })
    expect(container.textContent).toBe("Hello, jesh");

    act(()=>{
        render(<Hello name="james"/>, container);
    })
    expect(container.textContent).toBe("Hello, james");
})
