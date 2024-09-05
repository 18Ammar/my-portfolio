import React, { useEffect, useState } from 'react';
import { Text, Title, Image } from '@mantine/core';
import { ReactTyped } from 'react-typed';
import image from "../assets/image.png";

function HeroSection() {
    const [scale, setScale] = useState(1);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const newScale = 1 + (scrollTop / 1000);
            setScale(Math.min(Math.max(newScale, 1), 2));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',

            }}
            id='home'
        >
            <Image
                src={image}
                alt="Background Image"
                fit="cover"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    filter: 'brightness(110%)',
                    transform: `scale(${scale})`,
                    transition: 'transform 0.2s ease-out',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)',
                    zIndex: 0,
                }}
            />

            <div style={{ textAlign: 'center', zIndex: 1, padding: '0 20px' }}>
                <Text
                    size="sm"
                    color="dimmed"
                    weight={600}
                    style={{ fontSize: '1rem', '@media (max-width: 768px)': { fontSize: '0.8rem' } }}
                >
                    WELCOME TO MY WORLD
                </Text>
                <Title
                    order={1}
                    style={{
                        fontSize: '3rem',
                        marginTop: '1rem',
                        lineHeight: 1.2,
                        color: '#fff',
                        '@media (max-width: 768px)': { fontSize: '2rem' },
                    }}
                >
                    Hi, I'm Ammar Al-Milli
                </Title>
                <Title
                    order={2}
                    style={{
                        fontSize: '3rem',
                        marginTop: '1rem',
                        color: '#ff4d4f',
                        '@media (max-width: 768px)': { fontSize: '2rem' },
                    }}
                >
                    <ReactTyped
                        strings={['Software Engineer.', 'AI Specialist.', 'Web Developer.', 'Deep Learning Specialist.', 'Computer Vision Engineer.']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />

                </Title>
                <Text
                    size="lg"
                    style={{
                        marginTop: '1rem',
                        fontSize: '3rem',
                        color: '#fff',
                        '@media (max-width: 768px)': { fontSize: '2rem' },
                    }}
                >
                    Based in Iraq.
                </Text>
            </div>
        </div>
    );
}

export default HeroSection;
