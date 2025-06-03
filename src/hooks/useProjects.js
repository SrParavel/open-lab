import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClient';

// RF6: Crear proyecto
export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (project) => {
      const { data, error } = await supabase
        .from('projects')
        .insert(project)
        .select();
      if (error) throw error;
      return data[0];
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['projects']);
    }
  });
};

// RF9: Listar mis proyectos
export const useUserProjects = (userId) => {
  return useQuery({
    queryKey: ['projects', userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', userId);
      if (error) throw error;
      return data;
    },
    enabled: !!userId
  });
};

// RF13: Explorar proyectos públicos
export const usePublicProjects = () => {
  return useQuery({
    queryKey: ['publicProjects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*, user:profiles(*)')
        .eq('visibility', 'public');
      if (error) throw error;
      return data;
    }
  });
};