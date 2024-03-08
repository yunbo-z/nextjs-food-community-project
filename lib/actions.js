'use server'
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
// a async function with use server: this is a Server Action
// this function is to guaranteed to excute on the sever, onlu on the server
export async function ShareMeal(formData) {
    'use server';

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    await saveMeal(meal)
    redirect('/meals')
}