import { Component } from 'react';

let PowerUp = OriginalComponent =>{

    return class NewComponent extends Component
    {
        render()
        {
            return <NewComponent/>
        }
    }

}