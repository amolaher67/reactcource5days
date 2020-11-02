import React,{useState,useEffect} from 'react'

export default function TestFunctionalState() {

    const [state, setstate] = useState('');
    useEffect(() => {
        console.log(state);
    }, [state]);

    const getComboData = () => {
          console.log(state);
      };

    const onTextChange = (event)=>{
        setstate(event.target.value)
        getComboData();
    }

    return (
        <div>
            <h1>Testing functional Component</h1>
            <input type='text' onChange={onTextChange} value={state} ></input>
        </div>
    )
}
