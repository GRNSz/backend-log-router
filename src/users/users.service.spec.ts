import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';

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

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create() should save and return a user', async () => {
    const dto = {
      name: 'Alice',
      email: 'alice@example.com',
      password: 'secret',
    };
    const result = await service.create(dto);
    expect(mockRepo.create).toHaveBeenCalledWith(dto);
    expect(mockRepo.save).toHaveBeenCalled();
    expect(result).toEqual(mockUser);
  });

  it('findAll() should return an array of users', async () => {
    const result = await service.findAll();
    expect(mockRepo.find).toHaveBeenCalled();
    expect(result).toEqual([mockUser]);
  });

  it('findOne() should return a user by id', async () => {
    const result = await service.findOne(1);
    expect(mockRepo.findOneBy).toHaveBeenCalledWith({ id: 1 });
    expect(result).toEqual(mockUser);
  });

  it('findOne() should throw NotFoundException when user is not found', async () => {
    mockRepo.findOneBy.mockResolvedValueOnce(null);
    await expect(service.findOne(99)).rejects.toThrow(NotFoundException);
  });

  it('update() should update and return the user', async () => {
    const dto = { name: 'Bob' };
    const result = await service.update(1, dto);
    expect(mockRepo.save).toHaveBeenCalled();
    expect(result).toEqual(mockUser);
  });

  it('remove() should delete the user', async () => {
    await service.remove(1);
    expect(mockRepo.remove).toHaveBeenCalledWith(mockUser);
  });
});
