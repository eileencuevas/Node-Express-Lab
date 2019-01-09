import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormDiv = styled.form`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    textarea {
        height: 100px;
        padding: 5px;
        margin: 10px 0;
        background-color: rgb(126, 166, 183, 0.4);
        border: 1px solid #EAD2AC;
        color: #EAD2AC;
        
        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #EAD2AC;
        }
    }

    input {
        padding: 5px;
        background-color: rgb(126, 166, 183, 0.4);
        border: 1px solid #EAD2AC;
        color: #EAD2AC;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #EAD2AC;
        }
    }

    button {
        width: 50%;
        padding: 10px;
        margin: 20px auto;
        border: 1px solid #EAD2AC;
        background-color: #EAD2AC;
        color: #031926;
        cursor: pointer;
    }
`

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contents: '',
        }
    }

    handlesChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addsQuote = event => {
        event.preventDefault();
        this.props.addQuote({
            title: this.state.title,
            contents: this.state.contents
        });
        
        this.setState({
            title: '',
            contents: ''
        })

        this.props.history.push('/');

    }

    render() {
        return(
            <FormContainer>
                {/* <p>Coming Soon ;)</p> */}
                <FormDiv onSubmit={this.addsQuote}>
                    <textarea
                        name='title'
                        placeholder='Quote Text'
                        value={this.state.title}
                        onChange={this.handlesChange}
                        autocomplete='off'
                        required
                    />
                    <input 
                        type='text'
                        name='contents'
                        placeholder='Quote Author'
                        value={this.state.contents}
                        onChange={this.handlesChange}
                        autocomplete='off'
                        required
                    />
                    <button>Submit</button>
                </FormDiv>
            </FormContainer>
        ); 
    }
}

export default QuoteForm;