import React from 'react';
import Header from "./Header"
import Footer from "./Footer";




const About = () => {
 

    
    return(
        
    
        <div className="about">
            <Header />
            <div className="aboutUs">
            <h1>About TodoList</h1>
            <h2 className="empty"></h2>
            <p>Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto. </p>
            </div>
            
            
            <Footer /> 
        </div>

   )
}

export default About;