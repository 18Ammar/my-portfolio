import React from 'react';
import { Text, Group, Button } from '@mantine/core';

function ContactSection() {
    return (
        <div style={{ padding: '50px 0', textAlign: 'center' }} id='contact'>
            <Text weight={700} size="xl">
                Contact
            </Text>
            <Text size="sm" color="dimmed">
                Feel free to reach out via email or phone.
            </Text>
            <Group position="center" mt="lg">
                <Button component="a" href="mailto:ammar2003895@gmail.com" variant="outline" color="#E91E63">
                    Email Me
                </Button>
                <Button component="a" href="tel:+964773168804" color="#E91E63">
                    Call Me
                </Button>
            </Group>
        </div>
    );
}

export default ContactSection;
