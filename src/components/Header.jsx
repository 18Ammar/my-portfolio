import React, { useState, useEffect } from 'react';
import { Group, Anchor, Text, Burger, Drawer, Button } from '@mantine/core';

const useIsInView = (elementId, offset = 0) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = document.getElementById(elementId);
        if (element) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsInView(entry.isIntersecting);
                },
                {
                    root: null,
                    rootMargin: `${offset}px`,
                    threshold: 0.5,
                }
            );
            observer.observe(element);

            return () => {
                observer.unobserve(element);
            };
        }
    }, [elementId, offset]);

    return isInView;
};

function PortfolioHeader() {
    const [menuOpened, setMenuOpened] = useState(false);
    const isAboutInView = useIsInView('about');
    const isHomeInView = useIsInView('home');
    const isServiceInView = useIsInView('service');
    const isProjectsInView = useIsInView('projects');
    const isContactInView = useIsInView('contact');

    const toggleMenu = () => setMenuOpened(!menuOpened);

    return (
        <>
            <header
                style={{
                    height: '60px',
                    padding: '0 20px',
                    backgroundColor: '#000',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease-in-out',
                    flexWrap: 'wrap',
                }}
            >
                <Text weight={700} size="xl" style={{ fontFamily: 'sans-serif' }}>
                    AMMAR AL-MILLI
                </Text>
                <Burger
                    opened={menuOpened}
                    onClick={toggleMenu}
                    style={{
                        display: 'none',
                        '@media (max-width: 768px)': {
                            display: 'block',
                        },
                    }}
                />
                <Group
                    spacing="xl"
                    style={{
                        display: 'flex',
                        '@media (max-width: 768px)': {
                            display: menuOpened ? 'block' : 'none',
                            width: '100%',
                            textAlign: 'center',
                            position: 'absolute',
                            top: '60px',
                            left: 0,
                            backgroundColor: '#000',
                            zIndex: 1000,
                        },
                    }}
                >
                    <Anchor
                        href="#home"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            borderBottom: isHomeInView ? '2px solid #E91E63' : 'none',
                            transition: 'border-bottom 0.3s ease'
                        }}
                    >
                        Home
                    </Anchor>
                    <Anchor
                        href="#about"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            borderBottom: isAboutInView ? '2px solid #E91E63' : 'none',
                            transition: 'border-bottom 0.3s ease'
                        }}
                    >
                        About
                    </Anchor>
                    <Anchor
                        href="#service"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            borderBottom: isServiceInView ? '2px solid #E91E63' : 'none',
                            transition: 'border-bottom 0.3s ease'
                        }}
                    >
                        Services
                    </Anchor>
                    <Anchor
                        href="#projects"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            borderBottom: isProjectsInView ? '2px solid #E91E63' : 'none',
                            transition: 'border-bottom 0.3s ease'
                        }}
                    >
                        Projects
                    </Anchor>
                    <Anchor
                        href="#contact"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            borderBottom: isContactInView ? '2px solid #E91E63' : 'none',
                            transition: 'border-bottom 0.3s ease'
                        }}
                    >
                        Contact
                    </Anchor>
                </Group>
            </header>

            {/* Drawer for mobile menu */}
            <Drawer
                opened={menuOpened}
                onClose={() => setMenuOpened(false)}
                title="Menu"
                padding="md"
                size="md"
                styles={(theme) => ({
                    drawer: {
                        backgroundColor: theme.colors.dark[7],
                    },
                })}
            >
                <Group
                    direction="column"
                    spacing="md"
                    style={{ width: '100%' }}
                >
                    <Anchor
                        href="#home"
                        onClick={() => setMenuOpened(false)}
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        Home
                    </Anchor>
                    <Anchor
                        href="#about"
                        onClick={() => setMenuOpened(false)}
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        About
                    </Anchor>
                    <Anchor
                        href="#service"
                        onClick={() => setMenuOpened(false)}
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        Services
                    </Anchor>
                    <Anchor
                        href="#projects"
                        onClick={() => setMenuOpened(false)}
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        Projects
                    </Anchor>
                    <Anchor
                        href="#contact"
                        onClick={() => setMenuOpened(false)}
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        Contact
                    </Anchor>
                </Group>
            </Drawer>
        </>
    );
}

export default PortfolioHeader;
