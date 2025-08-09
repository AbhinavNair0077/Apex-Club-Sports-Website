import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from '../utils/validation';
import { sendRegistrationForm } from '../utils/email';
import { useUIStore } from '../store/uiStore';
import { sportsData } from '../data/sports';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useUIStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const watchConsent = watch('consent');

  const sportOptions = sportsData.map(sport => ({
    value: sport.slug,
    label: sport.name,
  }));

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Convert age to number
      const formData = {
        ...data,
        age: parseInt(data.age, 10),
      };
      
      await sendRegistrationForm(formData);
      addToast({
        type: 'success',
        title: 'Registration Successful!',
        message: 'Welcome to Apex Sports Club! We\'ll contact you soon with next steps.',
        duration: 6000,
      });
      reset();
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Registration Failed',
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="glass-strong rounded-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">Join Our Club</h1>
          <p className="text-gray-400 text-lg">
            Start your journey with Apex Sports Club. Fill out the form below to become a member.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-glass-border pb-2">
              Personal Information
            </h3>
            
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              required
              error={errors.fullName?.message}
              {...register('fullName')}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                required
                error={errors.email?.message}
                {...register('email')}
              />
              
              <Input
                label="Age"
                type="number"
                placeholder="Enter your age"
                min="6"
                max="79"
                required
                error={errors.age?.message}
                {...register('age', { valueAsNumber: true })}
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
              label="Address"
              placeholder="Enter your complete address"
              rows={3}
              required
              error={errors.address?.message}
              {...register('address')}
            />
          </div>

          {/* Sports Selection */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-glass-border pb-2">
              Sports Preference
            </h3>
            
            <Select
              label="Primary Sport"
              options={sportOptions}
              placeholder="Select your primary sport"
              required
              error={errors.sport?.message}
              {...register('sport')}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-glass-border pb-2">
              Terms & Conditions
            </h3>
            
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 w-4 h-4 text-primary-500 bg-transparent border-2 border-gray-400 rounded focus:ring-primary-500 focus:ring-2"
                {...register('consent')}
              />
              <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                I agree to the{' '}
                <a href="/terms" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">
                  Privacy Policy
                </a>. 
                I consent to being contacted by Apex Sports Club regarding my membership and training programs.
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-400">{errors.consent.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            disabled={isSubmitting || !watchConsent}
            className="w-full cursor-hover"
          >
            {isSubmitting ? 'Registering...' : 'Complete Registration'}
          </Button>
          
          <p className="text-center text-sm text-gray-400">
            Already a member?{' '}
            <a href="/login" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">
              Sign in here
            </a>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
