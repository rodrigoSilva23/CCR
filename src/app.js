import React from 'react';


import Pages from './pages/login';
import RegistroPessoa from './pages/login/registroPessoa'
import Footer from './layout/footer';


export default function App() {
	return (
		<div>
            <RegistroPessoa/>
            <Pages />
            <Footer/>
        </div>
			
			
	
	);
}
