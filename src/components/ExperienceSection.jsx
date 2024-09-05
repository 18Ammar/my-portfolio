import React from 'react';
import { Text, Timeline } from '@mantine/core';

const experiences = [
    {
        role: 'Backend Developer',
        company: 'University of Mosul',
        description: 'Contributed to the development of a University car badge system using Laravel. Implemented robust authentication and authorization mechanisms, supported various user roles including client, employee, admin, and super admin. Designed and developed RESTful APIs for managing user data and integrated them with the frontend application.',
    },
    {
        role: 'AI Developer',
        company: 'Health Assistant Project',
        description: 'Developed AI-based health assistant features using TensorFlow and Keras. Designed and implemented medical image analysis models to aid diagnosis, created a real-time chatbot interface for medical queries, and built user profile management features to track medical information. Integrated NLP techniques and utilized Transformers and LLMs for enhanced chatbot performance.',
    },
    {
        role: 'Developer',
        company: 'Automated Surveillance System',
        description: 'Developed an automated system for intruder detection and tracking using computer vision. Designed algorithms for real-time detection and tracking of intruders, ensuring the security and efficiency of the surveillance system.',
    },
    {
        role: 'Developer',
        company: 'E-commerce Platform',
        description: 'Designed and implemented a web-based e-commerce platform with Flask. Developed user authentication features, product listings, and secure payment processing. Ensured a user-friendly interface and reliable performance of the platform.',
    },
    {
        role: 'Engineer',
        company: 'Chess-Playing Robot',
        description: 'Developed a chess-playing robot utilizing AI and computer vision. Implemented AI algorithms to analyze the chessboard and make strategic moves, allowing the robot to play chess autonomously.',
    },
    {
        role: 'Engineer',
        company: 'Automated Sorting System Using Robot Arm',
        description: 'Created an automated sorting system with a robot arm for product sorting based on barcode recognition. Applied computer vision techniques to improve image quality and integrated multi-criteria sorting options for versatile automation.',
    },
];

function ExperienceSection() {
    return (
        <div style={{ padding: '50px 0' }} id='experience'>
            <Text weight={700} size="xl" align="center">
                Experience
            </Text>
            <Timeline active={experiences.length - 1} bulletSize={24} lineWidth={2} mt="lg" color='#E91E63'>
                {experiences.map((experience, index) => (
                    <Timeline.Item key={index} title={experience.role}>
                        <Text color="dimmed" size="sm">
                            {experience.company}
                        </Text>
                        <Text size="sm" mt="xs">
                            {experience.description}
                        </Text>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    );
}

export default ExperienceSection;
