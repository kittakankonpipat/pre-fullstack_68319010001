-- CreateTable
CREATE TABLE `Subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectCode` VARCHAR(20) NOT NULL,
    `subjectName` VARCHAR(150) NOT NULL,
    `objective` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `theoryHours` INTEGER NOT NULL,
    `practiceHours` INTEGER NOT NULL,
    `selfStudyHours` INTEGER NOT NULL,
    `instructor` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Subject_subjectCode_key`(`subjectCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
