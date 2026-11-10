-- CreateTable
CREATE TABLE `Course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseCode` VARCHAR(20) NOT NULL,
    `courseName` VARCHAR(150) NOT NULL,
    `objective` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `theoryHours` INTEGER NOT NULL,
    `practiceHours` INTEGER NOT NULL,
    `selfStudyHours` INTEGER NOT NULL,
    `instructor` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Course_courseCode_key`(`courseCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
