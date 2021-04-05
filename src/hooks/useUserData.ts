import { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getLocalUser } from '../services/localService';
import { getCurrentUserApi } from '../services/zAdminApi';

export default function useUserData() {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    if (!user.id) {
      setUser(getLocalUser());
    }
  }, []);
  const userQuery = useQuery('users/me', getCurrentUserApi, {
    onSuccess: (result) => {
      setUser(result.data);
    },
  });

  const displayName = useMemo(() => {
    if (user.member?.full_name) {
      return user.member?.full_name.split(' ')[0];
    }
    return '';
  }, [user]);

  const displayPhoto = useMemo(() => {
    if (user.member?.photo) {
      return user.member?.photo;
    }
    return null;
  }, [user]);

  return {
    user,
    userQuery,
    displayName,
    displayPhoto,
  };
}
