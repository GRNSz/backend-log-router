import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

const mockUser: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  password: 'secret',
};

const mockRepo = {
  create: jest.fn().mockReturnValue(mockUser),
  save: jest.fn().mockResolvedValue(mockUser),
  find: jest.fn().mockResolvedValue([mockUser]),
  findOneBy: jest.fn().mockResolvedValue(mockUser),
  remove: jest.fn().mockResolvedValue(undefined),
};

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepo },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create() should return the created user', async () => {
    const dto = {
      name: 'Alice',
      email: 'alice@example.com',
      password: 'secret',
    };
    const result = await controller.create(dto);
    expect(result).toEqual(mockUser);
  });

  it('findAll() should return an array of users', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([mockUser]);
  });

  it('findOne() should return a user by id', async () => {
    const result = await controller.findOne('1');
    expect(result).toEqual(mockUser);
  });

  it('update() should return the updated user', async () => {
    const dto = { name: 'Bob' };
    const result = await controller.update('1', dto);
    expect(result).toEqual(mockUser);
  });
});
