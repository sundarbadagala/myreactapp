import React from 'react'
import SubPractice from './PracticeSub'

class Practice extends React.Component{
    state = {
        a: 'PEOPLE'
    }
    main = () => {
        return 'MAN'
    }
    txt = (z) => {
        return <h3>{z}</h3>
    }
    add=(x,y) => {
        return x+y;
    }
    render() {
        return (
            <div>
                {this.state.a}<br/>
                {this.main()} 
                <SubPractice name={this.main()} />
                <SubPractice name={this.state.a} />
                {this.add(4,5)}
                {this.txt('DALL')}
            </div>
        );
    }
}

export default Practice;