import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { siteConfig } from "./siteConfig";
import { FloatingInput, FloatingTextarea, FloatingSelect } from "./FloatingField";
import { CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  date: z.string().min(1, 'Preferred date is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
  };

  return (
    <section id="booking" className="py-28 md:py-36 bg-slate-50 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 relative z-10">
        <div className="bg-white rounded-[28px] shadow-[0_40px_80px_-30px_rgba(15,23,42,0.25)] p-8 md:p-12 border border-border/50">

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
              >

                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
                    {siteConfig.booking.title}
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    {siteConfig.booking.subtitle}
                  </p>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <FloatingInput
                      id="name"
                      label="Full Name"
                      error={errors.name?.message}
                      {...register('name')}
                    />

                    <FloatingInput
                      id="phone"
                      type="tel"
                      label="Phone Number"
                      error={errors.phone?.message}
                      {...register('phone')}
                    />
                  </div>


                  <div className="grid md:grid-cols-2 gap-6">

                    <FloatingInput
                      id="date"
                      type="date"
                      label="Preferred Date"
                      error={errors.date?.message}
                      {...register('date')}
                    />

                    <FloatingSelect
                      id="service"
                      label="Service"
                      error={errors.service?.message}
                      {...register('service')}
                    >
                      <option value="">Select a service...</option>

                      {siteConfig.servicesSection.services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}

                    </FloatingSelect>

                  </div>


                  <FloatingTextarea
                    id="message"
                    label="Additional Notes"
                    {...register('message')}
                  />


                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full text-lg h-14 rounded-xl bg-primary text-white font-medium transition hover:opacity-90 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending Request..." : "Request Appointment"}
                  </motion.button>

                </form>

              </motion.div>

            ) : (

              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                  className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-12 h-12" />
                </motion.div>


                <h3 className="text-3xl font-semibold mb-4">
                  Request Received!
                </h3>

                <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
                  {siteConfig.booking.successMessage}
                </p>


                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 rounded-xl border border-border hover:bg-slate-100 transition"
                >
                  Book Another Appointment
                </button>


              </motion.div>

            )}
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
}
