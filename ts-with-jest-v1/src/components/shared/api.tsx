import axios from 'axios';

export const URL = 'http://localhost:4000/forms';

class API {
  get = (url: string) => axios.get(url);

  post = (form: unknown) => axios.post(URL, form);

  delete = (id: string | number) => axios.delete(`${URL}/${id}`);

  put = (form: Record<string, unknown>) => axios.put(`${URL}/${form.id}`, form);

  search = (content: string) => axios.get(`${URL}?q=${content}`);
}

const api = new API();

export default api;
