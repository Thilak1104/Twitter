import UserService from '../../src/services/user-service.js';
import UserRepository from '../../src/repository/user-repository.js';

jest.mock('../../src/repository/user-repository.js');

describe('User service signup test', () => {
    test('should successfully create a user', async () => {
        const data = {
            email: 'a@b.com',
            password: '123456'
        };
        (UserRepository.prototype.create).mockReturnValue({...data,createdAt:'2024-02-23',updatedAt:'2024-02-23'});
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    });
});