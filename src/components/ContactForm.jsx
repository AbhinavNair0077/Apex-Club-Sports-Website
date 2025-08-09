import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../utils/validation';
import { sendContactForm } from '../utils/email';
import { useUIStore } from '../store/uiStore';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useUIStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await sendContactForm(data);
      addToast({
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you for contacting us. We\'ll get back to you soon.',
        duration: 5000,
      });
      reset();
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Failed to Send',
        message: error.message || 'Something went wrong. Please try again.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-strong rounded-2xl p-8"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-4">Get In Touch</h2>
        <p className="text-gray-400">
          Ready to start your journey? Send us a message and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            required
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            required
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        <Input
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          required
          error={errors.phone?.message}
          {...register('phone')}
        />

        <Textarea
          label="Message"
          placeholder="Tell us about your interest in our sports programs..."
          rows={5}
          required
          error={errors.message?.message}
          {...register('message')}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full cursor-hover"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
