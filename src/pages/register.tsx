import React from 'react'
import { Form, Formik } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Box, Button } from '@chakra-ui/react';
import { valueScaleCorrection } from 'framer-motion/types/render/dom/projection/scale-correction';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
        return (
            <Wrapper variant="small">
                <Formik 
                    initialValues={{ username: "", password: ""}}
                    onSubmit={(values)=>{
                        console.log(values);
                    }} 
                >
                    {({isSubmitting})  => (
                        <Form>
                            <InputField 
                                name="username"
                                placeholder="username"
                                label="Username"
                            />
                            <Box mt={4}>
                                <InputField 
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    label="Password"
                                />
                            </Box>
                            <Button 
                                mt={12} 
                                type="submit" 
                                colorScheme="green"
                                variant="outline"
                                isLoading={isSubmitting}
                            > 
                                Register 
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Wrapper>
        );
};

export default Register