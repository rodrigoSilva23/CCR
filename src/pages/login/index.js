import './index.css';

function Login () {
    return (
        <div className="container     ">

            <div className="row d-flex justify-content-center">

                <div className="row ">
                    
                    <div className="col-md-12   d-flex">
                        <h2>LOGO:</h2>

                        <h1>vai jovem</h1>
                    </div>

                </div>

                <div className="card shadow-sm d-flex justify-content-center" >
                
                        <div className="card-body ">

                            <form className="">
                                <div className="mb-3">
                                    <label  className="form-label">Login:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="E-mail"/>
                                
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Informe sua senha"/>
                                    <a href="#">
                                        <span className="">Esqueceu sua senha?</span>
                                    </a>
                                </div>
                                <div className="mb-3">
                                
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary px-4 ">Entrar</button>
                                </div>
                            </form>

                            <div className="border-top  mt-2">
                                <h1 className="text-center text-success">cadastre-se</h1>
                                <div className="d-flex justify-content-center ">

                                    <button type="submit" className="btn btn-success me-3 px-3">Jovens</button>
                                    <button type="submit" className="btn btn-primary">Empresas</button>

                                </div>


                            </div>

                                
                        
                            
                        
                        </div>     
                    </div>
            </div>
            
       


        </div>
    





    );
      


    
     
};

export default Login;