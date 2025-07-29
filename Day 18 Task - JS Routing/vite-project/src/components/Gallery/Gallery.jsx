import React, { useEffect, useState } from 'react'
import About from '../About/About';
import Footer from '../Footer/Footer';
import { Link, Outlet } from "react-router-dom";

export default function Gallery() {

    let [counter, setCounter] = useState(0)
    let [userName, setUserName] = useState("Shahd")

    console.log("Render...");

    // Mounting Phase
    useEffect( () => {
        console.log("Mounting...");
     }, [])

    useEffect( () => {
        if(counter === 0)
            return;
        console.log("Update phase for counter...");
    }, [counter])

    useEffect( () => {
        if(userName === "Shahd")
            return;
        console.log("Update phase for userName...");
    }, [userName])

    // Updating phase
    useEffect( () => {
        if(counter === 0 && userName === "Shahd")
            return;
        console.log("Update phase...");
    }, [counter, userName])


    useEffect( () => {
        return () => {
            // unmounting
            console.log("Unmounting");
        }
    }, [])

    useEffect( () => {
        console.log("Mounting");

        let clr = setInterval( () => {
            console.log("Interval Fired");
        }, 500 )
        
        return () => {
            // unmounting
            console.log("Unmounting");
            clearInterval(clr)
        }
    }, [])

    useEffect( () => {
        console.log("useEffect");
    })

    function sayHello() {
        console.log("SayHello");
    }
    sayHello();

    function changeCounter() {
        setCounter( counter + 1 )
    }

    function changeUserName() {
        setUserName("Mona")
    }

    return (
        <>
            <Outlet/>
            <nav>
                <ul>
                    <li>
                        <Link to={'About'}>About</Link>
                    </li>
                    <li>
                        <Link to={'Footer'}>Footer</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h2>Gallery</h2>
                <h2>Counter: {counter}</h2>
                <h3>Name: {userName}</h3>
                <button className='btn btn-primary' onClick={changeCounter}>Increase</button>
                <button className='btn btn-primary' onClick={changeUserName}>Change Name</button>
            </div>
        </>
    )
}
