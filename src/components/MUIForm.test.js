import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './MUIForm.js'


afterEach(cleanup);


describe('Contact From Tests', ()=>{

    test('test inputs', ()=>{
        const {getByPlaceholderText, getByText} = render(<Form/>)

        const nameInput = getByPlaceholderText('Name')
        const emailInput = getByPlaceholderText('Email')
        const messageInput = getByPlaceholderText('Message')

        userEvent.type(nameInput, 'Alex');
        userEvent.type(emailInput, 'alex@alex.com');
        userEvent.type(messageInput, 'this is a message');
        expect(nameInput).toHaveValue('Alex');
        expect(emailInput).toHaveValue('alex@alex.com');
        expect(messageInput).toHaveValue('this is a message');

    })


    test('submit button text changes appropriately', ()=>{
        const {getByPlaceholderText, getByTestId} = render(<Form/>)

        const nameInput = getByPlaceholderText('Name')
        const emailInput = getByPlaceholderText('Email')
        const messageInput = getByPlaceholderText('Message')
        const submitBtn = getByTestId('submit')

        fireEvent.click(submitBtn)
        
        expect(submitBtn.textContent).toBe('send')
        
        userEvent.type(nameInput, 'Alex');
        userEvent.type(emailInput, 'alex@alex.com');
        userEvent.type(messageInput, 'this is a message');

        
        fireEvent.click(submitBtn)
        expect(submitBtn.textContent).toBe('loading...')
    })






})
