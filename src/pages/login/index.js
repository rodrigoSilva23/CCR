import {useDispatch} from 'react-redux';
import {NavLink}from 'react-router-dom';
import {showTela} from '../../store/hide_showTela';

import './index.css';
export default function Login () {

    const dispatch = useDispatch();


    

    function showTelaPessoa(e){    //função usada para Mostra a tela de registro de jovem
		e.preventDefault();
		
        dispatch(showTela());
        

    }
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

                            <form >
                                <div className="mb-3">
                                    <label  className="form-label">Login:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="E-mail"/>
                                
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Informe sua senha"/>
                                    <NavLink to="/" >
                                        <span >Esqueceu sua senha?</span>

                                    </NavLink>
                                    
                                    
                                </div>
                                <div className="mb-3">
                                
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary px-4 ">Entrar</button>
                                </div>
                            </form>

                            <div className="border-top  mt-2">
                                <h1 className="text-center text-success">Cadastre-se</h1>
                                <div className="d-flex justify-content-center ">

                                    <button onClick={showTelaPessoa} className="btn btn-success me-3 px-3">Jovens</button>
                                    <button  onClick={showTelaPessoa} className="btn btn-primary">Empresas</button>

                                </div>


                            </div>

                                
                        
                            
                        
                        </div>     
                    </div>
            </div>
            
       


        </div>
    





    );
      


    
     
};

