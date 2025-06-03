import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClient';

// RF17: Likes
export const useLikeProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (projectId) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      // Verificar si ya dio like
      const { data: existingLike } = await supabase
        .from('likes')
        .select()
        .eq('project_id', projectId)
        .eq('user_id', user.id)
        .maybeSingle();

      if (existingLike) {
        // Quitar like
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('id', existingLike.id);
        if (error) throw error;
        return { liked: false };
      } else {
        // Agregar like
        const { data, error } = await supabase
          .from('likes')
          .insert({ project_id: projectId, user_id: user.id })
          .select();
        if (error) throw error;
        return { liked: true, like: data[0] };
      }
    },
    onSuccess: (_, projectId) => {
      queryClient.invalidateQueries(['project', projectId]);
      queryClient.invalidateQueries(['publicProjects']);
    }
  });
};