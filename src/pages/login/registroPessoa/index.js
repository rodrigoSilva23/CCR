import React from 'react';
import './index.css';
import {useSelector,useDispatch} from 'react-redux';
import {hideTela} from '../../../store/hide_showTela';







export default function RegistroPessoa(){

    const dispatch = useDispatch();


    function hideTelaPessoa(e){ //função usada para fechar a tela
        //e.preventDefault();
        dispatch(hideTela());




    };


    const isShow = useSelector((state)=>state.tela_Hide_Show.showTela);
  
    


    return (
       <React.Fragment>

           {isShow && (





        <div className="container containercss">

            

                <div className="card cardcss  ">
            
                    <div className="card-body ">
                        <div className="card-title  d-flex position-relative">Cadastre-se 
                            <div className=" test position-absolute top-0 end-0  d-flex align-items-center">
                                
                              
                                <span  onClick={hideTelaPessoa} className="material-icons iconcss">close</span>
                            </div>
                        </div>
                        <p className="card-text border-bottom">rapido e facil!!</p>
                    
                        <form>
                                            
                            
                            <div className="form-row">
                                <div className="form-group mb-3  col-md-12">
                                    <label for="inputAddress">Nome Completo</label>
                                    <input type="text" className="form-control" id="inputAddress1" placeholder="Nome"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label for="inputPassword4">Senha</label>
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Senha"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label for="inputPassword4">Digite Sua senha Novamente</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Senha"/>
                                </div>
                                <div className="form-group col-md-12 ">
                                    <label for="example-date-input" className="col-7 col-form-label">Data de nascimento</label>
                                    <div >
                                        <input className="form-control" type="date" value="03-01-2021" id="example-date-input"/>
                                    </div>
                                </div>
                                <label>Sexo</label>
                                <div className="d-flex">
                                    
                                     <div className="form-check  me-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Masculino
                                        </label>
                                    </div>
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Feminino
                                        </label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center border-top pt-3">
                                    <button type="submit" className="btn btn-success">Cadastre-Se</button>

                                </div>
                                
                                
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           )}


    </React.Fragment>
        



    );

    }