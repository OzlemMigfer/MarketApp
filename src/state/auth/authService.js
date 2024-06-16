import supabase from '../../services/supabase';

export const signIn = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return user;
  } catch (error) {
    console.error('Error signin:', error.message);
    throw error;
  }
};
