import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/config/prisma.service';
import { ConflictError, NotFoundError } from 'src/helpers/error-middlewere';

@Injectable()
export class UserService {
   constructor(private db: PrismaService) {}

   async create({ name, email, password }: CreateUserDto) {
      const payload = {
         name,
         email,
         password: await bcrypt.hash(password, 10),
      };

      const userExists = await this.db.user.findUnique({ where: { email } });
      if (userExists) throw new ConflictError('Usuário já cadastrado');

      const user = this.db.user.create({
         data: payload,
      });

      return user;
   }

   async findAll() {
      const users = await this.db.user.findMany();
      const usersWithoutPassword = users.map(({ password, ...rest }) => rest);
      return {
         usuarios: usersWithoutPassword,
         statusCode: 200,
      };
   }

   async findOne(id: number) {
      const user = await this.db.user.findUnique({ where: { id } });
      if (!user) throw new NotFoundError('Usuário não encontrado');

      const { password, ...rest } = user;
      return rest;
   }

   async findAccount(id: number) {
      const account = await this.db.account.findUnique({ where: { id } });
      return { ...account, statusCode: 200 };
   }
}
