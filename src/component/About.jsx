import React from 'react';
import Header from "./Header"
import Footer from "./Footer";




const About = () => {
 

    
    return(
        
    
        <div className="about">
            <Header />
            <div className="aboutUs">
            <h1>About TodoList</h1>
            
            <p>What is a <b>ToDo List</b>? The definition is a simple one. It’s a list of tasks you need to complete, or things that you want to do.<br/>Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and acts as a memory aid. <br/> As technology has evolved we have been able to develop a todoList app that can help you create your todo list. </p>
            </div>
            
            
            <Footer /> 
        </div>

   )
}

export default About;