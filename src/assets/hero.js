import React, { useEffect, useState } from 'react';
import '../assets/hero.css';
import BG from '../assets/bgx.png';

function Hero() {
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);

    const words = ["Education", "Learning", "Knowledge", "Growth"];
    const typingSpeed = 150; 
    const deletingSpeed = 75; 
    const pauseTime = 1000; 

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingTimeout;

        if (!isDeleting && charIndex < currentWord.length) {
            // Typing the word
            typingTimeout = setTimeout(() => {
                setCurrentText(currentWord.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // Deleting the word
            typingTimeout = setTimeout(() => {
                setCurrentText(currentWord.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, deletingSpeed);
        } else if (charIndex === currentWord.length) {
            // Pause after completing the word
            typingTimeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);
        } else if (isDeleting && charIndex === 0) {
            // Move to the next word after deletion
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <div className="contains-all">
            <div className="body flex items-center justify-between">
                <div className="para flex flex-col items-start justify-start gap-[50px] h-full pt-[20px] pl-[40px] text-white">
                    <p className="top text-[40px]">Empowering Futures, Transforming Careers.</p>
                    <p className="below text-[60px]">
                        Transforming the way of <br />
                        <span id="changingWord" className="typing">{currentText} &nbsp;</span>
                    </p>
                    <p className="bottom text-[20px]">
                        <i>"Face challenges as opportunities, much like us, navigate innovation"</i>
                    </p>
                </div>
                <img src={BG} alt="Background" />
            </div>
        </div>
    );
}

export default Hero;
