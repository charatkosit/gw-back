import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const car = this.carRepository.create(createCarDto);
    return this.carRepository.save(car);
  }

  async findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.carRepository.findOne({where: {car_id: id}});
    if (!car) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    return car;
  }
  // async findOne(id: number): Promise<Car> {
  //   return this.carRepository.findOne({where: {car_id: id}});
  // }

  async update(id: number, updateCarDto: UpdateCarDto): Promise<Car> {
    await this.carRepository.update(id, updateCarDto);
    return this.carRepository.findOne({where: {car_id: id}});
  }

  async remove(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}