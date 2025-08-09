import { z } from 'zod';

// Contact form validation schema
export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must be less than 60 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z.string()
    .email('Please enter a valid email address'),
  
  phone: z.string()
    .min(8, 'Phone number must be at least 8 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[+\-\s\d()]+$/, 'Please enter a valid phone number'),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
});

// Registration form validation schema
export const registrationSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(60, 'Full name must be less than 60 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z.string()
    .email('Please enter a valid email address'),
  
  age: z.number()
    .int('Age must be a whole number')
    .min(6, 'Minimum age is 6 years')
    .max(79, 'Maximum age is 79 years'),
  
  phone: z.string()
    .min(8, 'Phone number must be at least 8 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[+\-\s\d()]+$/, 'Please enter a valid phone number'),
  
  address: z.string()
    .min(10, 'Address must be at least 10 characters')
    .max(200, 'Address must be less than 200 characters'),
  
  sport: z.string()
    .min(1, 'Please select a sport'),
  
  consent: z.boolean()
    .refine(val => val === true, 'You must agree to the terms and conditions')
});

// Helper function to normalize phone number
export const normalizePhoneNumber = (phone) => {
  return phone.replace(/[^\d+]/g, '');
};

// Helper function to validate and transform form data
export const validateFormData = (schema, data) => {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    const fieldErrors = {};
    error.errors.forEach(err => {
      fieldErrors[err.path[0]] = err.message;
    });
    return { success: false, errors: fieldErrors };
  }
};
