import { RegistrationForm } from '@/models/Registration.model';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in/',
  headers: {
    Authorization: `Bearer TOKEN`,
  },
});

export default {
  createCustomer(regForm: RegistrationForm) {
    return apiClient.post('api/users', regForm);
  },
  updateCustomer(regForm: RegistrationForm) {
    return apiClient.put('api/users', regForm);
  },
  deleteCustomer(id: number) {
    return apiClient.delete(`api/users/${id}`);
  },
};
