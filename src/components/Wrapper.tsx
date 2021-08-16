import { Box } from '@chakra-ui/react';
import React from 'react'

interface WrapperProps {
    variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({children, variant='regular'}) => {
        return (
            <Box 
                mt={12} 
                mx="auto" w="100%" 
                maxW={variant === "regular" ? "900px" : '450px'}
            > 
                {children}  
            </Box>
        );
}