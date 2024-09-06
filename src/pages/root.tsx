import "./root.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderRoot = () => {
    return (<div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-4">
                <div className="card bx">
                    <div className="card-body">
                        <div className="card-title">
                            <h4>Login as Admin</h4>
                            <p className="card-text small text-muted">Login with your username & password</p>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-sm" placeholder="Username"
                                           required/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control form-control-sm"
                                           placeholder="Password"
                                           required/>
                                </div>
                                <div className="mb-3">
                                    <input type="submit" className="btn btn-block btn-sm btn-success" value="Sign In"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const Root = () => {
    return <><HeaderRoot/>
        <li>Error.....................</li>
    </>
}

export default Root;