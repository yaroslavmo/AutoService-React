import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Aux from './hoc/Aux';

export const AuthContext = React.createContext(false)

class App extends Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (
            <Aux>
                <Layout>
                 <div>Main</div>
                </Layout>
            </Aux>
        );
    }
}

export default App;
