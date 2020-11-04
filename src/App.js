import React from 'react';
import {Route, Link, Switch,Redirect} from 'react-router-dom';
 
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateProductComponent from './components/CreateProductComponent';
import EditProductComponent from './components/EditProductComponent';
import ProductListComponent from './components/ProductListComponent';

function App() {
  return (
    <div className="container">
                <h1>The React Routing Application</h1>
                <table className="table table-bordered table-striped table-danger">
                   
                  <tbody>
                     <tr>
                        <td>
                            <Link to="/">List Products</Link>
                        </td>
                          <td>
                            <Link to="/create">Create Product</Link>
                        </td> 
                     </tr>
                  </tbody>
                </table>
                {/* Define Route Table Here */}
                <div>
                    <Switch>
                        <Route exact path="/" component={ProductListComponent}></Route>
                        <Route exact path="/create" component={CreateProductComponent}></Route>
                        <Route exact path="/edit/:id" component={EditProductComponent}></Route>
                       
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </div>
  );
}

export default App;
