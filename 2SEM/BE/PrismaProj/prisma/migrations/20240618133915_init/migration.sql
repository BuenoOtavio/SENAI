-- CreateTable
CREATE TABLE `Destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `valor` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Destinos_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PontoTuristico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `endereco` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `id_destino` INTEGER NOT NULL,

    UNIQUE INDEX `PontoTuristico_nome_key`(`nome`),
    UNIQUE INDEX `PontoTuristico_telefone_key`(`telefone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hoteis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `valor` INTEGER NOT NULL,
    `avaliacao` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `site` VARCHAR(50) NOT NULL,
    `id_destino` INTEGER NOT NULL,

    UNIQUE INDEX `Hoteis_nome_key`(`nome`),
    UNIQUE INDEX `Hoteis_email_key`(`email`),
    UNIQUE INDEX `Hoteis_site_key`(`site`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PontoTuristico` ADD CONSTRAINT `PontoTuristico_id_destino_fkey` FOREIGN KEY (`id_destino`) REFERENCES `Destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hoteis` ADD CONSTRAINT `Hoteis_id_destino_fkey` FOREIGN KEY (`id_destino`) REFERENCES `Destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
