import { makeAutoObservable, runInAction } from 'mobx';
import { history } from '../..';
import agent from '../api/agent';
import { User, UserFormValues } from '../models/User';
import { store } from './store';

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    // cast the user obj to a boolean, is he logged in or not?
    return !!this.user;
  }

  login = async (userFormValues: UserFormValues) => {
    try {
      const user = await agent.Account.login(userFormValues);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      this.user = user;
      history.push('/activities');
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    store.commonStore.setToken(null);
    window.localStorage.removeItem('jwt');
    this.user = null;
    history.push('/');
  };

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      runInAction(() => (this.user = user));
    } catch (error) {
      console.log(error);
    }
  };

  register = async (userFormValues: UserFormValues) => {
    try {
      const user = await agent.Account.register(userFormValues);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      this.user = user;
      history.push('/activities');
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };
}
