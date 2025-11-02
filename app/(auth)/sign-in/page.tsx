'use client'
import React from 'react'
import {useForm} from "react-hook-form";
import InputField from "@/components/forms/inputField";
import {Button} from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";
import TextPressure from "@/components/TextPressure";

const SignIn = () => {


    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        }, mode: 'onBlur'
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log('Sign In', data);
        } catch (e) {
            console.error(e);
        }
    }



    return (
       <>
           <div style={{position: 'relative', height: '200px'}}>
               <TextPressure
                   text="Welcome back!"
                   flex={true}
                   alpha={false}
                   stroke={false}
                   width={true}
                   weight={true}
                   italic={true}
                   textColor="#ffffff"
                   strokeColor="#ff0000"
                   minFontSize={36}
               />

           </div>


           <form onSubmit={handleSubmit(onSubmit)} className={"space-y-2"}>

               <InputField
                name={"email"}
                label={"Email"}
                placeholder={"example@gmail.com"}
                register={register}
                error={errors.email}
                validation={{required:'Email is required', pattern: /^\w+@\w+\.\w+$/}}
               />

               <InputField
                   name="password"
                   label="Password"
                   placeholder="Enter your password"
                   type="password"
                   register={register}
                   error={errors.password}
                   validation={{ required: 'Password is required', minLength: 8}}
               />
               <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                   {isSubmitting ? 'Signing In' : 'Sign In'}
               </Button>

               <FooterLink text="Don't have an account?" linkText="Create an account" href="/sign-up" />

           </form>
       </>

    )
}
export default SignIn
