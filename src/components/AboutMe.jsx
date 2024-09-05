import React from 'react';
import { Container, Grid, Text, Title, Group, Tabs } from '@mantine/core';

function AboutSection() {
    return (
        <Container id='about'>
            <Grid gutter="md" align="center">

                {/* Right Side: Content */}
                <Grid.Col span={12} md={6}>
                    <Title order={1} style={{ color: '#ff4d4f' }}>
                        About Me
                    </Title>
                    <Text style={{ color: 'white', marginTop: '1rem', lineHeight: 1.6 }}>
                        Passionate Software Engineer specializing in the realms of Computer Vision, AI, and Web Development,
                        with a proven track record of crafting innovative, high-impact solutions. Proficient in Python, and
                        experienced in a wide array of technologies, from deep learning frameworks to modern web architectures.
                        Adept at translating complex problems into streamlined, effective software products, I am driven by a
                        commitment to excellence and continuous learning. Eager to embrace challenging roles that push the
                        boundaries of technology and contribute to pioneering advancements in the software industry.
                    </Text>

                    <Tabs defaultValue="skills" style={{ marginTop: '2rem' }} color='#E91E63'>
                        <Tabs.List>
                            <Tabs.Tab value="skills" style={{ color: 'white' }}>Main skills</Tabs.Tab>
                            <Tabs.Tab value="experience" style={{ color: 'white' }}>Experience</Tabs.Tab>
                            <Tabs.Tab value="education" style={{ color: 'white' }}>Education & Certification</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="skills" pt="xs">
                            <Group direction="column" spacing="xs">
                                <Text style={{ color: 'white' }}>Programming Languages: Python, C++, JavaScript, PHP</Text>
                                <Text style={{ color: 'white' }}>Web Development: Python frameworks (Django, Flask), PHP (Laravel), React.Js, HTML, CSS</Text>
                                <Text style={{ color: 'white' }}>Database: MySQL, SQL, SQLite3, NoSQL</Text>
                                <Text style={{ color: 'white' }}>AI and Machine: Learning Deep Learning, Neural Networks, TensorFlow, Keras, NLP, OpenCV, Transformers, LLMs</Text>
                                <Text style={{ color: 'white' }}>Computer Vision: Object detection, image classification, image segmentation</Text>
                                <Text style={{ color: 'white' }}>Other Skills: Problem-solving, analytical skills, strong communication, and collaboration abilities</Text>
                            </Group>
                        </Tabs.Panel>



                        <Tabs.Panel value="experience" pt="xs">
                            <Group direction="column" spacing="xs">
                                <Text style={{ color: 'white' }}>Independently developed computer vision and AI projects, including object detection, facial recognition, and image classification systems.</Text>
                                <Text style={{ color: 'white' }}>Created web applications using Python frameworks such as Flask and PHP using Laravel, implementing backend functionality and integrating with front-end technologies.</Text>
                                <Text style={{ color: 'white' }}>Contributed to the development of a University car badge system using Laravel, which includes a robust authentication and authorization mechanism, supporting roles such as client, employee, admin, and super admin.</Text>
                                <Text style={{ color: 'white' }}>Developed an AI-based Health Assistant providing personalized medical assistance using TensorFlow, Keras, NLP, and React.js.</Text>
                                <Text style={{ color: 'white' }}>Built an automated surveillance system using Computer Vision and Python, and a real-time facial recognition system for attendance management in educational institutions.</Text>
                            </Group>
                        </Tabs.Panel>

                        <Tabs.Panel value="education" pt="xs">
                            <Group direction="column" spacing="xs">
                                <Text style={{ color: 'white' }}>Bachelor in Software Engineering, University of Mosul</Text>
                                <Text style={{ color: 'white' }}>Meta backend engineer Certification </Text>
                                <Text style={{ color: 'white' }}>NLP Certification </Text>
                            </Group>
                        </Tabs.Panel>
                    </Tabs>
                </Grid.Col>
            </Grid>
        </Container>
    );
}

export default AboutSection;
