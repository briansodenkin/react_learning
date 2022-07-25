import { useHistory } from "react-router-dom"
import QuoteForm from "../quotes/QuoteForm"
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api"
import { useEffect } from "react";
let initial = true

const NewQuotes = (props) =>{
    const { sendRequest, status } = useHttp(addQuote, true)
    const history = useHistory();
    useEffect(()=>{
        if(status === 'completed'){
          history.push('/quotes')
          initial=true
        }
    },[status, history])


    const addQuoteHandler = (quote) =>{
        initial = false
        sendRequest(quote)
    }
    return(
        <>
            <h1>This is the new quotes</h1>
            <QuoteForm isLoading={status==="pending"&&!initial} onAddQuote={addQuoteHandler}></QuoteForm>
        </>
    )
}

export default NewQuotes