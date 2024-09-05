import React from 'react';
import { Container, Grid, Card, Text, Title, Group } from '@mantine/core';
import { IconNetwork, IconStack2, IconReportAnalytics, IconDeviceDesktop } from '@tabler/icons-react';

function ServicesSection() {
    const services = [
        {
            title: "AI & Computer Vision",
            description: "Developing cutting-edge computer vision and AI solutions, including object detection, facial recognition, and image classification systems.",
            icon: <IconNetwork size={40} color="#E91E63" />,
        },
        {
            title: "Web Development",
            description: "Creating robust web applications using Python (Flask, Django) and PHP (Laravel), integrating with front-end technologies for a seamless experience.",
            icon: <IconStack2 size={40} color="#E91E63" />,
        },
        {
            title: "AI-based Applications",
            description: "Developing AI-based solutions such as medical assistants and chatbots for real-time queries and personalized assistance.",
            icon: <IconReportAnalytics size={40} color="#E91E63" />,
        },
        {
            title: "Automated Systems",
            description: "Designing and implementing automated systems for tasks such as sorting, surveillance, and robotic control using advanced technologies.",
            icon: <IconDeviceDesktop size={40} color="#E91E63" />,
        },
    ];

    return (
        <Container style={{ paddingTop: '50px', paddingBottom: '50px' }} id='service'>
            <Title order={2} align="center" style={{ color: '#ff4d4f', fontSize: '36px' }}>
                My Expertise
            </Title>
            <Text align="center" style={{ color: '#888', marginBottom: '40px', fontSize: '18px' }}>
                Leveraging a diverse skill set to deliver innovative solutions in AI, web development, and automation.
            </Text>

            <Grid cols={2} spacing="lg" mt="lg">
                {services.map((service, index) => (
                    <Grid.Col span={12} sm={6} md={4} key={index}>
                        <Card shadow="md" radius="md" style={{ backgroundColor: '#1a1a1a', padding: '30px', height: '100%' }}>
                            <Group direction="column" spacing="md" align="center">
                                {service.icon}
                                <Text size="xl" weight={700} style={{ color: 'white', textAlign: 'center' }}>
                                    {service.title}
                                </Text>
                                <Text style={{ color: '#999', textAlign: 'center' }}>
                                    {service.description}
                                </Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}

export default ServicesSection;
