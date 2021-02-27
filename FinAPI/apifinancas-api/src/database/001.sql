ALTER TABLE `finfinancas`.`usuario` 
ADD COLUMN `telefone` VARCHAR(14) NULL AFTER `password`,
ADD COLUMN `cpf` VARCHAR(14) NULL AFTER `telefone`;
