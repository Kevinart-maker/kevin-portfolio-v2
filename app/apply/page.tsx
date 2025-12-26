'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ClickSpark from '../components/ui/ClickSpark';
import Iridescence from '../components/ui/Iridescence';
import SplitText from "./SplitText";

type FormData = {
  name: string;
  email: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage(result.message || 'Applied! Check your email/spam for next steps.');
        reset();
      } else {
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('A network error occurred. Please try again later.');
    }
  };

  return (
    <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className='overflow-hidden w-full h-[100vh] xl:h-[95vh] rounded-[2rem] relative text-white'>

        <header className="absolute flex flex-col gap-6 items-center justify-center inset-0 z-50 text-xs md:text-lg p-[2rem]">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="cursor-default px-6 py-2 text-xs rounded-[3rem] border flex items-center gap-3">
              <div className="relative w-fit h-fit flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center zoom -z-10" />
                <span
                  className="inline-block w-[10px] h-[10px] rounded-full bg-green-400 animate-pulse"
                  aria-label="Online status"
                />
              </div>
              Just one slot available.
            </div>

            <h1 className="font-bold leading-tight text-[1.5rem] xl:text-[3rem] md:text-[3rem] text-center text-white xl:w-[60%]">
              <SplitText delay={30} duration={0.2} />
            </h1>

            <p className="text-xs md:text-sm xl:w-[50%]">I'm selecting one high-potential startup to design and build a flagship landing page for $0 fee, 100% focused on revenue. Apply below to see if we're a fit.</p>
          </div>

          {message && (
            <p className='bg-green-200 text-xs text-green-950 w-fit p-2 rounded'>
              {message}
            </p>
          )}

          {errorMessage && (
            <p className='bg-red-200 text-xs text-red-950 w-fit p-2 rounded'>
              {errorMessage}
            </p>
          )}

          { !message && !errorMessage && <form
            className='flex flex-col gap-4 text-sm w-full xl:w-[40%]'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col'>
              <input
                {...register('name', { required: 'Name is required' })}
                type='text'
                placeholder='John Doe'
                className='outline-none border-b border-[var(--background)] p-[0.5rem]'
              />
              {errors.name && (
                <span className='text-red-400 text-xs mt-1'>{errors.name.message}</span>
              )}
            </div>

            <div className='flex flex-col'>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                type='email'
                placeholder='john@example.com'
                className='outline-none border-b border-[var(--background)] p-[0.5rem] w-full'
              />
              {errors.email && (
                <span className='text-red-400 text-xs mt-1'>{errors.email.message}</span>
              )}
            </div>

            <button
              type='submit'
              disabled={loading}
              className='bg-[var(--background)] text-[var(--text)] p-[0.5rem] rounded-[2rem]'
            >
              {loading ? 'Applying...' : 'Apply'}
            </button>
          </form>}
        </header>

        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-[2rem]" />
          <Iridescence />
        </div>
      </div>
    </ClickSpark>
  );
}