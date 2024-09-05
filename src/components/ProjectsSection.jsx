import React from 'react';
import { Text, Card, SimpleGrid, Badge, Group } from '@mantine/core';

const projects = [
    {
        title: 'Car Badge System',
        description: 'A system for managing car badges at the University of Mosul, including robust authentication and authorization with support for various roles.',
        technologies: ['Laravel', 'MySQL', 'RESTful APIs'],
    },
    {
        title: 'Health Assistant Project',
        description: 'AI-based Health Assistant providing personalized medical assistance, including medical image analysis, article reading, and a chatbot interface.',
        technologies: ['TensorFlow', 'Keras', 'NLP', 'React.js', 'Flask', 'Socket.IO', 'Transformers', 'LLMs'],
    },
    {
        title: 'Real-time Facial Recognition',
        description: 'System for efficient attendance management in educational institutions using real-time facial recognition technology.',
        technologies: ['Python', 'OpenCV'],
    },
    {
        title: 'Automated Surveillance System',
        description: 'Automated system for intruder detection and tracking using computer vision.',
        technologies: ['Python', 'Computer Vision'],
    },
    {
        title: 'E-commerce Platform',
        description: 'Web-based platform with user authentication, product listings, and secure payment processing.',
        technologies: ['Flask', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Chess-Playing Robot',
        description: 'Robot capable of playing chess using AI and computer vision for board analysis and strategic moves.',
        technologies: ['AI Algorithms', 'Computer Vision'],
    },
    {
        title: 'Automated Sorting System Using Robot Arm',
        description: 'Automated system utilizing a robot arm for sorting products based on barcode recognition, with features for multi-criteria sorting and comprehensive automation.',
        technologies: ['Arduino', 'Computer Vision', 'Python', 'OpenCV'],
    },
    {
        title: 'Mustahaqati ChatBot',
        description: 'Developed a frontend chatbot application using React.js, featuring a user-friendly interface for real-time interaction and integration with backend services.',
        technologies: ['React.js', 'JavaScript', 'CSS'],
    },
];

function ProjectsSection() {
    return (
        <div style={{ padding: '50px 0' }} id='projects'>
            <Text weight={700} size="xl" align="center" style={{ marginBottom: '20px' }}>
                Projects
            </Text>
            <SimpleGrid cols={2} spacing="lg" mt="lg">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        shadow="sm"
                        padding="lg"
                        style={{
                            backgroundColor: "#1a1a1a",
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <Text weight={500} style={{ marginBottom: '10px' }}>{project.title}</Text>
                            <Text size="sm" color="dimmed" style={{ marginBottom: '10px' }}>
                                {project.description}
                            </Text>
                        </div>
                        <Group spacing="xs" mt="xs">
                            {project.technologies.map((tech, i) => (
                                <Badge key={i} color="#E91E63">
                                    {tech}
                                </Badge>
                            ))}
                        </Group>
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    );
}

export default ProjectsSection;
