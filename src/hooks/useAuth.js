import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // RF1: Registro de usuario
  const register = async (email, password, displayName) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: displayName,
            bio: '',
            avatar_url: ''
          }
        }
      });
      if (error) throw error;
      return data.user;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // RF2: Inicio de sesión
  const login = async (email, password) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      return data.user;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // RF3: Recuperación de contraseña
  const resetPassword = async (email) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      return true;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // RF5: Cerrar sesión
  const logout = async () => {
    await supabase.auth.signOut();
  };

  return { register, login, resetPassword, logout, error, loading };
};