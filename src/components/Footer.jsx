import React from 'react';
import { Text, Group, Anchor } from '@mantine/core';

function Footer() {
    return (
        <div style={{ padding: '20px 0', textAlign: 'center', backgroundColor: "#000" }}>
            <Group position="center">
                <Anchor href="https://github.com/18Ammar" style={{ color: "#E91E63" }}>GitHub</Anchor>
                <Anchor href="https://www.linkedin.com/in/ammar-al-milli" style={{ color: "#E91E63" }}>LinkedIn</Anchor>
            </Group>
            <Text size="sm" color="dimmed" mt="md">
                © 2024 Ammar Al-Milli
            </Text>
        </div>
    );
}

export default Footer;
