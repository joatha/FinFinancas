import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('listar')
  async listar(): Promise<Usuario[]>{
      return this.usuarioService.listar()
  }
  @Post('cadastrar')
  async cadastrar(@Body()data:UsuarioCadastrarDto): Promise<ResultadoDto>{
   
    return this.usuarioService.cadastrar(data)
    
  }
}