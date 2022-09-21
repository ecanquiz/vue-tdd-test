import axios from 'axios';
import Users from '../Users';
vi.mock('axios');

const users = [{name: 'Bob'}];
const resp = {data: users};

test('should fetch users', () => {  
  axios.get.mockResolvedValue(resp);

  return Users.all().then(data => expect(data).toEqual([{name: 'Bob'}]));
});

test('should fetch users', () => {
  axios.get = vi.fn().mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});

test('should fetch users', () => {
  axios.get = vi.fn().mockResolvedValue(resp);

  return Users.all().then(data => expect(data).toEqual(users));
});
